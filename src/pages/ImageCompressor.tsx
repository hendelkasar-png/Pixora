import { useState } from 'react';
import ToolPageShell from '../components/ToolPageShell';
import UploadZone from '../components/UploadZone';
import ImagePreview from '../components/ImagePreview';
import DownloadButton from '../components/DownloadButton';
import ErrorMessage from '../components/ErrorMessage';
import LoadingState from '../components/LoadingState';
import { useLanguage } from '../contexts/LanguageContext';
import { useImageState } from '../hooks/useImageState';
import { compressImage, downloadDataURL, formatBytes } from '../lib/imageUtils';

export default function ImageCompressor() {
  const { t } = useLanguage();
  const { image, isLoading, error, setError, handleFiles, reset, hasImage } = useImageState();
  const [quality, setQuality] = useState(0.75);
  const [processedUrl, setProcessedUrl] = useState<string>('');
  const [processedSize, setProcessedSize] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCompress = async () => {
    if (!image.dataUrl) return;
    setIsProcessing(true);
    setError(null);
    try {
      const result = await compressImage(image.dataUrl, { quality, format: 'image/jpeg' });
      const size = Math.round((result.length - 'data:image/jpeg;base64,'.length) * 0.75);
      setProcessedUrl(result);
      setProcessedSize(size);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Compression failed');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!processedUrl) return;
    const baseName = image.name.replace(/\.[^/.]+$/, '');
    downloadDataURL(processedUrl, `${baseName}_compressed.jpg`);
  };

  const handleReset = () => {
    reset();
    setProcessedUrl('');
    setProcessedSize(0);
  };

  const reduction = image.size > 0 && processedSize > 0
    ? Math.round(((image.size - processedSize) / image.size) * 100)
    : 0;

  return (
    <ToolPageShell titleKey="tool.compressor" descKey="tool.compressor.desc">
      {!hasImage && (
        <UploadZone onFilesSelected={handleFiles} multiple={false} />
      )}

      {isLoading && <LoadingState />}

      {error && <ErrorMessage message={error} />}

      {hasImage && !isLoading && (
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-soft">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-3">
              {t('compressor.quality')}: <span className="text-brand-500 font-semibold">{Math.round(quality * 100)}%</span>
            </label>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.05"
              value={quality}
              onChange={(e) => setQuality(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-dark-border rounded-full appearance-none cursor-pointer accent-brand-500"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-2">
              <span>10%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleCompress}
              disabled={isProcessing}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-medium text-sm transition-colors"
            >
              {isProcessing ? t('common.processing') : t('compressor.compress')}
            </button>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-200 font-medium text-sm hover:border-brand-400 hover:text-brand-500 transition-colors"
            >
              {t('common.reset')}
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ImagePreview
              src={image.dataUrl}
              label={t('common.original')}
              size={formatBytes(image.size)}
            />
            {processedUrl ? (
              <ImagePreview
                src={processedUrl}
                label={t('common.result')}
                size={`${formatBytes(processedSize)} ${reduction > 0 ? `(-${reduction}%)` : ''}`}
              />
            ) : (
              <div className="rounded-xl border-2 border-dashed border-slate-200 dark:border-dark-border flex items-center justify-center min-h-[200px] text-slate-400 text-sm">
                {t('common.result')}
              </div>
            )}
          </div>

          {processedUrl && (
            <div className="flex justify-center">
              <DownloadButton onClick={handleDownload} />
            </div>
          )}
        </div>
      )}
    </ToolPageShell>
  );
}
