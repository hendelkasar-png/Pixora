import { useState } from 'react';
import { FlipHorizontal, FlipVertical } from 'lucide-react';
import ToolPageShell from '../components/ToolPageShell';
import UploadZone from '../components/UploadZone';
import ImagePreview from '../components/ImagePreview';
import DownloadButton from '../components/DownloadButton';
import ErrorMessage from '../components/ErrorMessage';
import LoadingState from '../components/LoadingState';
import { useLanguage } from '../contexts/LanguageContext';
import { useImageState } from '../hooks/useImageState';
import { flipImage, downloadDataURL } from '../lib/imageUtils';
import type { FlipDirection } from '../lib/imageUtils';

export default function ImageFlipper() {
  const { t } = useLanguage();
  const { image, isLoading, error, setError, handleFiles, reset, hasImage } = useImageState();
  const [direction, setDirection] = useState<FlipDirection | null>(null);
  const [processedUrl, setProcessedUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFlip = async (dir: FlipDirection) => {
    if (!image.dataUrl) return;
    setIsProcessing(true);
    setError(null);
    try {
      const result = await flipImage(image.dataUrl, dir);
      setProcessedUrl(result);
      setDirection(dir);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Flip failed');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!processedUrl) return;
    const baseName = image.name.replace(/\.[^/.]+$/, '');
    downloadDataURL(processedUrl, `${baseName}_flipped.png`);
  };

  const handleReset = () => {
    reset();
    setProcessedUrl('');
    setDirection(null);
  };

  return (
    <ToolPageShell titleKey="tool.flipper" descKey="tool.flipper.desc">
      {!hasImage && <UploadZone onFilesSelected={handleFiles} multiple={false} />}
      {isLoading && <LoadingState />}
      {error && <ErrorMessage message={error} />}

      {hasImage && !isLoading && (
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-soft">
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleFlip('horizontal')}
                disabled={isProcessing}
                className="flex flex-col items-center gap-2 p-5 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border hover:border-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950/30 transition-colors disabled:opacity-50"
              >
                <FlipHorizontal className="w-6 h-6 text-brand-500" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  {t('flipper.horizontal')}
                </span>
              </button>
              <button
                onClick={() => handleFlip('vertical')}
                disabled={isProcessing}
                className="flex flex-col items-center gap-2 p-5 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border hover:border-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950/30 transition-colors disabled:opacity-50"
              >
                <FlipVertical className="w-6 h-6 text-brand-500" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  {t('flipper.vertical')}
                </span>
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button onClick={handleReset} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-200 font-medium text-sm hover:border-brand-400 hover:text-brand-500 transition-colors">
              {t('common.reset')}
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ImagePreview src={image.dataUrl} label={t('common.original')} />
            {processedUrl ? (
              <ImagePreview
                src={processedUrl}
                label={`${t('common.result')} (${direction === 'horizontal' ? '↔' : '↕'})`}
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
