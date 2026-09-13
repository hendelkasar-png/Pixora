import { useLanguage } from '../contexts/LanguageContext';

interface ImagePreviewProps {
  src: string;
  alt?: string;
  label?: string;
  size?: string;
}

export default function ImagePreview({ src, alt, label, size }: ImagePreviewProps) {
  const { t } = useLanguage();
  return (
    <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-dark-border bg-slate-50 dark:bg-dark-bg">
      {label && (
        <div className="px-4 py-2 border-b border-slate-200 dark:border-dark-border text-xs font-medium text-slate-500 dark:text-dark-muted bg-white dark:bg-dark-card">
          {label}
          {size && <span className="float-right text-brand-500 font-semibold">{size}</span>}
        </div>
      )}
      <div className="p-4 flex items-center justify-center min-h-[200px] max-h-[400px] overflow-auto">
        <img
          src={src}
          alt={alt || t('common.preview')}
          className="max-w-full max-h-[350px] object-contain rounded-lg"
        />
      </div>
    </div>
  );
}
