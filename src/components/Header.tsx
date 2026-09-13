import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { t, isRTL, toggleLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: '/', labelKey: 'nav.home', end: true },
    { to: '/tools', labelKey: 'nav.tools' },
    { to: '/about', labelKey: 'nav.about' },
    { to: '/faq', labelKey: 'nav.faq' },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? 'text-brand-500'
        : 'text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-300'
    }`;

  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-slate-200 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-soft group-hover:shadow-card transition-shadow">
              <ImageIcon className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-800 dark:text-white">
              Pixora
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
                {t(link.labelKey)}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 dark:border-dark-border text-slate-600 dark:text-slate-300"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 dark:border-dark-border">
            <nav className="flex flex-col gap-1">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-brand-50 dark:bg-brand-950/30 text-brand-600 dark:text-brand-300'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-dark-card'
                    }`
                  }
                >
                  {t(link.labelKey)}
                </NavLink>
              ))}
              <button
                onClick={toggleLang}
                className="mt-2 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-dark-card text-right sm:hidden"
              >
                {isRTL ? 'English' : 'العربية'}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
