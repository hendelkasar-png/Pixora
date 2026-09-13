import { AlertCircle, X } from 'lucide-react';
import { useState } from 'react';

interface ErrorMessageProps {
  message: string;
  onDismiss?: () => void;
}

export default function ErrorMessage({ message, onDismiss }: ErrorMessageProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const handleDismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 text-red-700 dark:text-red-400">
      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
      <p className="flex-1 text-sm leading-relaxed">{message}</p>
      <button
        onClick={handleDismiss}
        className="p-1 rounded-lg hover:bg-red-100 dark:hover:bg-red-950/40 transition-colors flex-shrink-0"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
