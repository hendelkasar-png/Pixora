import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ToolPageShellProps {
  titleKey: string;
  descKey: string;
  children: ReactNode;
}

export default function ToolPageShell({ titleKey, descKey, children }: ToolPageShellProps) {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
      <Link
        to="/tools"
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-dark-muted hover:text-brand-500 dark:hover:text-brand-300 mb-6 transition-colors"
      >
        <Arrow className="w-4 h-4 rotate-180" />
        {t('common.back')}
      </Link>

      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
          {t(titleKey)}
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          {t(descKey)}
        </p>
      </header>

      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
}
