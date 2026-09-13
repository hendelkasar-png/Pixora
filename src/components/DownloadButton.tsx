import { Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface DownloadButtonProps {
  onClick: () => void;
  disabled?: boolean;
  label?: string;
}

export default function DownloadButton({ onClick, disabled, label }: DownloadButtonProps) {
  const { t } = useLanguage();
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-medium text-sm transition-colors shadow-soft hover:shadow-card"
    >
      <Download className="w-4 h-4" />
      <span>{label || t('common.download')}</span>
    </button>
  );
}
