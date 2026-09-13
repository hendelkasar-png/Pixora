import { useState, useEffect } from 'react';
import ToolPageShell from '../components/ToolPageShell';
import UploadZone from '../components/UploadZone';
import ImagePreview from '../components/ImagePreview';
import DownloadButton from '../components/DownloadButton';
import ErrorMessage from '../components/ErrorMessage';
import LoadingState from '../components/LoadingState';
import { useLanguage } from '../contexts/LanguageContext';
import { useImageState } from '../hooks/useImageState';
import { resizeImage, downloadDataURL, getImageDimensions } from '../lib/imageUtils';

export default function ImageResizer() {
  const { t } = useLanguage();
  const { image, isLoading, error, setError, handleFiles, reset, hasImage } = useImageState();
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [lockRatio, setLockRatio] = useState(true);
  const [aspectRatio, setAspectRatio] = useState(1);
  const [processedUrl, setProcessedUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (image.dataUrl) {
      getImageDimensions(image.dataUrl).then(dims => {
        setWidth(dims.width);
        setHeight(dims.height);
        setAspectRatio(dims.width / dims.height);
      });
    }
  }, [image.dataUrl]);

  const handleWidthChange = (val: number) => {
    setWidth(val);
    if (lockRatio && aspectRatio > 0) {
      setHeight(Math.round(val / aspectRatio));
    }
  };

  const handleHeightChange = (val: number) => {
    setHeight(val);
    if (lockRatio && aspectRatio > 0) {
      setWidth(Math.round(val * aspectRatio));
    }
  };

  const handleResize = async () => {
    if (!image.dataUrl || !width || !height) return;
    setIsProcessing(true);
    setError(null);
    try {
      const result = await resizeImage(image.dataUrl, { width, height, maintainAspectRatio: false });
      setProcessedUrl(result);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Resize failed');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!processedUrl) return;
    const baseName = image.name.replace(/\.[^/.]+$/, '');
    downloadDataURL(processedUrl, `${baseName}_${width}x${height}.png`);
  };

  const handleReset = () => {
    reset();
    setProcessedUrl('');
    setWidth(0);
    setHeight(0);
  };

  return (
    <ToolPageShell titleKey="tool.resizer" descKey="tool.resizer.desc">
      {!hasImage && <UploadZone onFilesSelected={handleFiles} multiple={false} />}
      {isLoading && <LoadingState />}
      {error && <ErrorMessage message={error} />}

      {hasImage && !isLoading && (
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-soft space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                  {t('resizer.width')}
                </label>
                <input
                  type="number"
                  value={width}
                  onChange={(e) => handleWidthChange(parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-bg text-slate-800 dark:text-slate-100 focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                  {t('resizer.height')}
                </label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => handleHeightChange(parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-bg text-slate-800 dark:text-slate-100 focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20 outline-none transition"
                />
              </div>
            </div>
            <label className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={lockRatio}
                onChange={(e) => setLockRatio(e.target.checked)}
                className="w-4 h-4 rounded border-slate-300 text-brand-500 focus:ring-brand-500"
              />
              {t('resizer.lockRatio')}
            </label>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleResize}
              disabled={isProcessing || !width || !height}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-medium text-sm transition-colors"
            >
              {isProcessing ? t('common.processing') : t('resizer.resize')}
            </button>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-200 font-medium text-sm hover:border-brand-400 hover:text-brand-500 transition-colors"
            >
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
