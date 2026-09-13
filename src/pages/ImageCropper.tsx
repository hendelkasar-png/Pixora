import { useState } from 'react';
import ToolPageShell from '../components/ToolPageShell';
import UploadZone from '../components/UploadZone';
import ImagePreview from '../components/ImagePreview';
import DownloadButton from '../components/DownloadButton';
import ErrorMessage from '../components/ErrorMessage';
import LoadingState from '../components/LoadingState';
import { useLanguage } from '../contexts/LanguageContext';
import { useImageState } from '../hooks/useImageState';
import { cropImage, downloadDataURL, getImageDimensions } from '../lib/imageUtils';

type AspectRatio = 'free' | '1:1' | '4:5' | '16:9';

export default function ImageCropper() {
  const { t } = useLanguage();
  const { image, isLoading, error, setError, handleFiles, reset, hasImage } = useImageState();
  const [aspect, setAspect] = useState<AspectRatio>('free');
  const [processedUrl, setProcessedUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCrop = async () => {
    if (!image.dataUrl) return;
    setIsProcessing(true);
    setError(null);
    try {
      const dims = await getImageDimensions(image.dataUrl);
      let cropW = dims.width;
      let cropH = dims.height;

      if (aspect === '1:1') {
        const s = Math.min(dims.width, dims.height);
        cropW = s; cropH = s;
      } else if (aspect === '4:5') {
        if (dims.width / dims.height > 4 / 5) {
          cropW = Math.round(dims.height * 4 / 5);
          cropH = dims.height;
        } else {
          cropW = dims.width;
          cropH = Math.round(dims.width * 5 / 4);
        }
      } else if (aspect === '16:9') {
        if (dims.width / dims.height > 16 / 9) {
          cropW = Math.round(dims.height * 16 / 9);
          cropH = dims.height;
        } else {
          cropW = dims.width;
          cropH = Math.round(dims.width * 9 / 16);
        }
      }

      cropW = Math.min(cropW, dims.width);
      cropH = Math.min(cropH, dims.height);

      const x = Math.round((dims.width - cropW) / 2);
      const y = Math.round((dims.height - cropH) / 2);

      const result = await cropImage(image.dataUrl, { x, y, width: cropW, height: cropH });
      setProcessedUrl(result);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Crop failed');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!processedUrl) return;
    const baseName = image.name.replace(/\.[^/.]+$/, '');
    downloadDataURL(processedUrl, `${baseName}_cropped.png`);
  };

  const handleReset = () => { reset(); setProcessedUrl(''); };

  const ratios: { value: AspectRatio; labelKey: string }[] = [
    { value: 'free', labelKey: 'cropper.free' },
    { value: '1:1', labelKey: 'cropper.square' },
    { value: '4:5', labelKey: 'cropper.portrait' },
    { value: '16:9', labelKey: 'cropper.landscape' },
  ];

  return (
    <ToolPageShell titleKey="tool.cropper" descKey="tool.cropper.desc">
      {!hasImage && <UploadZone onFilesSelected={handleFiles} multiple={false} />}
      {isLoading && <LoadingState />}
      {error && <ErrorMessage message={error} />}

      {hasImage && !isLoading && (
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-soft">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-3">
              {t('cropper.aspectRatio')}
            </label>
            <div className="flex flex-wrap gap-2">
              {ratios.map(r => (
                <button
                  key={r.value}
                  onClick={() => setAspect(r.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    aspect === r.value
                      ? 'bg-brand-500 text-white'
                      : 'bg-slate-100 dark:bg-dark-bg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-dark-border'
                  }`}
                >
                  {t(r.labelKey)}
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-3">
              * {aspect === 'free' ? 'Full image preserved' : `Center-cropped to ${aspect} ratio`}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button onClick={handleCrop} disabled={isProcessing} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-medium text-sm transition-colors">
              {isProcessing ? t('common.processing') : t('cropper.crop')}
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
