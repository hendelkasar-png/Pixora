import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';
import type { Language } from '../types';
import { translations } from '../data/translations';

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = 'pixora-lang';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en';
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (saved === 'en' || saved === 'ar') return saved;
    const browser = navigator.language.toLowerCase();
    return browser.startsWith('ar') ? 'ar' : 'en';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.body.classList.toggle('font-arabic', lang === 'ar');
    document.body.classList.toggle('font-sans', lang === 'en');
  }, [lang]);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState(prev => (prev === 'en' ? 'ar' : 'en'));
  }, []);

  const t = useCallback((key: string): string => {
    const dict = translations[lang];
    return dict[key] || key;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, isRTL: lang === 'ar' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
