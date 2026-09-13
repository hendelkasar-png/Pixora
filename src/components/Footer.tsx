import { Link } from 'react-router-dom';
import { Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { to: '/', labelKey: 'nav.home' },
    { to: '/tools', labelKey: 'nav.tools' },
    { to: '/about', labelKey: 'nav.about' },
    { to: '/faq', labelKey: 'nav.faq' },
  ];

  const toolLinks = [
    { to: '/tools/compressor', labelKey: 'tool.compressor' },
    { to: '/tools/resizer', labelKey: 'tool.resizer' },
    { to: '/tools/converter', labelKey: 'tool.converter' },
    { to: '/tools/cropper', labelKey: 'tool.cropper' },
  ];

  const legalLinks = [
    { labelKey: 'footer.privacy' },
    { labelKey: 'footer.terms' },
    { labelKey: 'footer.contact' },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-dark-bg border-t border-slate-200 dark:border-dark-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                <ImageIcon className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight text-slate-800 dark:text-white">
                Pixora
              </span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-dark-muted leading-relaxed mb-4 max-w-xs">
              {t('footer.desc')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800 dark:text-white text-sm mb-4">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-500 dark:text-dark-muted hover:text-brand-500 dark:hover:text-brand-300 transition-colors"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800 dark:text-white text-sm mb-4">
              {t('footer.tools')}
            </h4>
            <ul className="space-y-2.5">
              {toolLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-500 dark:text-dark-muted hover:text-brand-500 dark:hover:text-brand-300 transition-colors"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800 dark:text-white text-sm mb-4">
              {t('footer.legal')}
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link, idx) => (
                <li key={idx}>
                  <span className="text-sm text-slate-500 dark:text-dark-muted hover:text-brand-500 dark:hover:text-brand-300 transition-colors cursor-pointer">
                    {t(link.labelKey)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            {t('footer.copyright')}
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-2">
            <span>{t('footer.made')}</span>
            <span className="text-brand-500">●</span>
            <span>Pixora</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
