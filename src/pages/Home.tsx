import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight, ArrowLeft,
  ShieldCheck, Zap, Gift, Lock,
  Upload as UploadIcon, Wand2, Download,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import UploadZone from '../components/UploadZone';
import ToolCard from '../components/ToolCard';
import { tools } from '../data/tools';

export default function Home() {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const handleFiles = (_files: File[]) => {
    navigate('/tools/compressor');
  };

  const features = [
    { icon: ShieldCheck, titleKey: 'features.private.title', descKey: 'features.private.desc' },
    { icon: Zap, titleKey: 'features.fast.title', descKey: 'features.fast.desc' },
    { icon: Gift, titleKey: 'features.free.title', descKey: 'features.free.desc' },
    { icon: Lock, titleKey: 'features.secure.title', descKey: 'features.secure.desc' },
  ];

  const steps = [
    { icon: UploadIcon, titleKey: 'how.step1.title', descKey: 'how.step1.desc' },
    { icon: Wand2, titleKey: 'how.step2.title', descKey: 'how.step2.desc' },
    { icon: Download, titleKey: 'how.step3.title', descKey: 'how.step3.desc' },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white dark:from-brand-950/20 dark:via-dark-bg dark:to-dark-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 -left-32 w-96 h-96 bg-brand-200/30 dark:bg-brand-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-100/40 dark:bg-brand-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 pb-12 lg:pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/30 border border-brand-100 dark:border-brand-900/50 text-brand-600 dark:text-brand-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                {t('hero.badge')}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.05] mb-6">
                {t('hero.title')}
                <br />
                <span className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
                  {t('hero.title2')}
                </span>
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                {t('hero.desc')}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  to="/tools"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm transition-colors shadow-soft hover:shadow-card"
                >
                  {t('hero.ctaPrimary')}
                  <Arrow className="w-4 h-4" />
                </Link>
                <Link
                  to="/tools"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-200 font-semibold text-sm hover:border-brand-400 hover:text-brand-500 dark:hover:border-brand-400 dark:hover:text-brand-300 transition-colors bg-white dark:bg-dark-card"
                >
                  {t('hero.ctaSecondary')}
                </Link>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-500/10 to-transparent rounded-3xl blur-2xl" />
              <div className="relative bg-white dark:bg-dark-card rounded-2xl shadow-card border border-slate-200 dark:border-dark-border p-5 lg:p-6">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-200 dark:border-dark-border">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-400 bg-slate-50 dark:bg-dark-bg px-2.5 py-1 rounded-md">
                    Pixora.app
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {tools.slice(0, 4).map(tool => (
                    <Link
                      key={tool.id}
                      to={tool.path}
                      className="group p-3 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border hover:border-brand-300 dark:hover:border-brand-500/40 transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border flex items-center justify-center text-brand-500 mb-2 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                        <span className="text-xs font-bold">{tool.id.charAt(0).toUpperCase()}</span>
                      </div>
                      <div className="text-xs font-semibold text-slate-700 dark:text-slate-200 truncate">
                        {t(`tool.${tool.id}`)}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN UPLOAD */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-20">
        <UploadZone onFilesSelected={handleFiles} />
      </section>

      {/* TOOLS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            {t('tools.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            {t('tools.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {tools.map(tool => (
            <ToolCard
              key={tool.id}
              id={tool.id}
              path={tool.path}
              iconKey={tool.iconKey}
              titleKey={`tool.${tool.id}`}
              descKey={`tool.${tool.id}.desc`}
            />
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-slate-50 dark:bg-dark-bg/50 py-16 lg:py-20 border-y border-slate-200 dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
              {t('features.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-soft"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950/40 flex items-center justify-center text-brand-500 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-2">
                    {t(feat.titleKey)}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-dark-muted leading-relaxed">
                    {t(feat.descKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            {t('how.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative text-center">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="absolute inset-0 bg-brand-500/10 rounded-full scale-150" />
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white shadow-card">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white dark:bg-dark-card border-2 border-brand-500 flex items-center justify-center text-sm font-bold text-brand-500">
                    {idx + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2 text-lg">
                  {t(step.titleKey)}
                </h3>
                <p className="text-sm text-slate-500 dark:text-dark-muted max-w-xs mx-auto">
                  {t(step.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PRIVACY */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 p-8 lg:p-12 text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="relative grid md:grid-cols-[auto_1fr] gap-6 items-start">
            <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                {t('privacy.title')}
              </h2>
              <p className="text-brand-50/90 leading-relaxed mb-3 max-w-2xl">
                {t('privacy.desc')}
              </p>
              <p className="text-sm text-brand-100/80 font-medium">
                {t('privacy.note')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
