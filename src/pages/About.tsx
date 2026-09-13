import { ShieldCheck, Zap, Globe, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const values = [
    { icon: ShieldCheck, title: 'Privacy First', desc: 'Your images never leave your device. All processing happens locally in your browser.' },
    { icon: Zap, title: 'Speed Matters', desc: 'No server uploads. Process images instantly with the power of the Canvas API.' },
    { icon: Globe, title: 'Accessible', desc: 'Free for everyone, everywhere. No sign-ups, no watermarks, no hidden fees.' },
    { icon: Heart, title: 'Crafted with Care', desc: 'Every tool is designed with attention to detail, usability, and quality.' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          {t('about.title')}
        </h1>
        <p className="text-lg text-brand-500 font-medium">
          {t('about.subtitle')}
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none mb-12 space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed">
        <p>{t('about.p1')}</p>
        <p>{t('about.p2')}</p>
        <p>{t('about.p3')}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {values.map((v, idx) => {
          const Icon = v.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-soft"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-950/40 flex items-center justify-center text-brand-500 mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-800 dark:text-white mb-2">{v.title}</h3>
              <p className="text-sm text-slate-500 dark:text-dark-muted leading-relaxed">{v.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
