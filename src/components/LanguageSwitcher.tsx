import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-dark-border text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-brand-400 hover:text-brand-500 dark:hover:border-brand-400 dark:hover:text-brand-300 transition-colors"
      aria-label="Switch language"
    >
      <Languages className="w-4 h-4" />
      <span>{lang === 'en' ? 'ع' : 'EN'}</span>
    </button>
  );
}
