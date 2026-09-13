import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ToolCardProps {
  id: string;
  path: string;
  iconKey: string;
  titleKey: string;
  descKey: string;
}

export default function ToolCard({ id, path, iconKey, titleKey, descKey }: ToolCardProps) {
  const { t, isRTL } = useLanguage();

  const IconComponent = (Icons as any)[iconKey] || Icons.Image;
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <Link
      to={path}
      className="group block p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-soft hover:shadow-card-hover hover:border-brand-300 dark:hover:border-brand-500/40 transition-all duration-200 hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950/40 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors">
          <IconComponent className="w-6 h-6" />
        </div>
        <Arrow className="w-5 h-5 text-slate-300 dark:text-slate-600 group-hover:text-brand-500 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-all" />
      </div>
      <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-1.5 group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
        {t(titleKey)}
      </h3>
      <p className="text-sm text-slate-500 dark:text-dark-muted leading-relaxed">
        {t(descKey)}
      </p>
    </Link>
  );
}
