import { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FAQItem {
  qKey: string;
  aKey: string;
}

const faqs: FAQItem[] = [
  { qKey: 'faq.q1', aKey: 'faq.a1' },
  { qKey: 'faq.q2', aKey: 'faq.a2' },
  { qKey: 'faq.q3', aKey: 'faq.a3' },
  { qKey: 'faq.q4', aKey: 'faq.a4' },
  { qKey: 'faq.q5', aKey: 'faq.a5' },
];

export default function FAQ() {
  const { t } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          {t('faq.title')}
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          {t('faq.subtitle')}
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-soft overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full flex items-center justify-between gap-4 p-5 text-right"
              >
                <span className="flex-1 text-start font-medium text-slate-800 dark:text-white text-left">
                  {t(faq.qKey)}
                </span>
                <span className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                  isOpen
                    ? 'bg-brand-500 text-white'
                    : 'bg-slate-100 dark:bg-dark-bg text-slate-500 dark:text-slate-400'
                }`}>
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-0">
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-dark-border pt-4">
                    {t(faq.aKey)}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
