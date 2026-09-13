import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import type { ThemeMode } from '../types';

export default function ThemeToggle() {
  const { mode, resolvedTheme, setMode } = useTheme();

  const modes: { value: ThemeMode; icon: typeof Sun; label: string }[] = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' },
  ];

  const cycle = () => {
    const order: ThemeMode[] = ['light', 'dark', 'system'];
    const idx = order.indexOf(mode);
    setMode(order[(idx + 1) % order.length]);
  };

  const CurrentIcon = resolvedTheme === 'dark' ? Moon : Sun;

  return (
    <div className="flex items-center">
      <button
        onClick={cycle}
        className="flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 dark:border-dark-border text-slate-600 dark:text-dark-muted hover:border-brand-400 hover:text-brand-500 dark:hover:border-brand-400 dark:hover:text-brand-300 transition-colors"
        aria-label="Toggle theme"
        title={`Theme: ${mode}`}
      >
        <CurrentIcon className="w-4 h-4" />
      </button>
    </div>
  );
}
