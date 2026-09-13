import { useLanguage } from '../contexts/LanguageContext';
import ToolCard from '../components/ToolCard';
import { tools } from '../data/tools';

export default function Tools() {
  const { t } = useLanguage();

  const categories = [
    { key: 'optimize', labelKey: 'tools.category.optimize' },
    { key: 'basic', labelKey: 'tools.category.basic' },
    { key: 'convert', labelKey: 'tools.category.convert' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
          {t('tools.title')}
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          {t('tools.subtitle')}
        </p>
      </div>

      {categories.map(cat => {
        const catTools = tools.filter(tl => tl.category === cat.key);
        if (catTools.length === 0) return null;
        return (
          <div key={cat.key} className="mb-12 last:mb-0">
            <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-5 pb-2 border-b border-slate-200 dark:border-dark-border">
              {t(cat.labelKey)}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {catTools.map(tool => (
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
          </div>
        );
      })}
    </div>
  );
}
