import { useState } from 'react';
import ToolPageShell from '../components/ToolPageShell';
import UploadZone from '../components/UploadZone';
import ImagePreview from '../components/ImagePreview';
import DownloadButton from '../components/DownloadButton';
import ErrorMessage from '../components/ErrorMessage';
import LoadingState from '../components/LoadingState';
import { useLanguage } from '../contexts/LanguageContext';
import { useImageState } from '../hooks/useImageState';
import { convertImage, downloadDataURL } from '../lib/imageUtils';

type OutputFormat = 'image/jpeg' | 'image/png' | 'image/webp';

const formatExt: Record<OutputFormat, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
};

export default function ImageConverter() {
  const { t } = useLanguage();
  const { image, isLoading, error, setError, handleFiles, reset, hasImage } = useImageState();
  const [format, setFormat] = useState<OutputFormat>('image/png');
  const [processedUrl, setProcessedUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleConvert = async () => {
    if (!image.dataUrl) return;
    setIsProcessing(true);
    setError(null);
    try {
      const result = await convertImage(image.dataUrl, { format, quality: 0.92 });
      setProcessedUrl(result);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Conversion failed');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!processedUrl) return;
    const baseName = image.name.replace(/\.[^/.]+$/, '');
    downloadDataURL(processedUrl, `${baseName}_converted.${formatExt[format]}`);
  };

  const handleReset = () => {
    reset();
    setProcessedUrl('');
  };

  return (
    <ToolPageShell titleKey="tool.converter" descKey="tool.converter.desc">
      {!hasImage && <UploadZone onFilesSelected={handleFiles} multiple={false} />}
      {isLoading && <LoadingState />}
      {error && <ErrorMessage message={error} />}

      {hasImage && !isLoading && (
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-soft">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-3">
              {t('converter.format')}
            </label>
            <div className="flex flex-wrap gap-2">
              {(['image/png', 'image/jpeg', 'image/webp'] as OutputFormat[]).map(f => (
                <button
                  key={f}
                  onClick={() => setFormat(f)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    format === f
                      ? 'bg-brand-500 text-white'
                      : 'bg-slate-100 dark:bg-dark-bg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-dark-border'
                  }`}
                >
                  {formatExt[f].toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleConvert}
              disabled={isProcessing}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-medium text-sm transition-colors"
            >
              {isProcessing ? t('common.processing') : t('converter.convert')}
            </button>
            <button onClick={handleReset} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-200 font-medium text-sm hover:border-brand-400 hover:text-brand-500 transition-colors">
              {t('common.reset')}
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ImagePreview src={image.dataUrl} label={t('common.original')} />
            {processedUrl ? (
              <ImagePreview src={processedUrl} label={t('common.result')} />
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
