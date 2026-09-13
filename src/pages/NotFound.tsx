import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, ImageOff } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function NotFound() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-brand-50 dark:bg-brand-950/40 text-brand-500 mb-6">
          <ImageOff className="w-10 h-10" />
        </div>
        <h1 className="text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
          404
        </h1>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
          {t('notfound.title')}
        </h2>
        <p className="text-slate-500 dark:text-dark-muted mb-8">
          {t('notfound.desc')}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm transition-colors shadow-soft"
        >
          <Arrow className="w-4 h-4 rotate-180" />
          {t('notfound.back')}
        </Link>
      </div>
    </div>
  );
}
