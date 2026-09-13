import { Loader2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface LoadingStateProps {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function LoadingState({ label, size = 'md' }: LoadingStateProps) {
  const { t } = useLanguage();
  const sizeMap = { sm: 'w-5 h-5', md: 'w-8 h-8', lg: 'w-12 h-12' };

  return (
    <div className="flex flex-col items-center justify-center gap-3 p-8">
      <Loader2 className={`${sizeMap[size]} text-brand-500 animate-spin`} />
      <p className="text-sm text-slate-500 dark:text-dark-muted">
        {label || t('common.processing')}
      </p>
    </div>
  );
}
