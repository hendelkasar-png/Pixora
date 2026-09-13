import { useState, useRef, DragEvent, ChangeEvent } from 'react';
import { Upload, X, FileImage, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface UploadZoneProps {
  onFilesSelected: (files: File[]) => void;
  accept?: string;
  maxSizeMB?: number;
  multiple?: boolean;
}

const SUPPORTED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/bmp'];

export default function UploadZone({
  onFilesSelected,
  accept = 'image/*',
  maxSizeMB = 10,
  multiple = true,
}: UploadZoneProps) {
  const { t } = useLanguage();
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): boolean => {
    if (!SUPPORTED_TYPES.includes(file.type) && file.type !== '') {
      setError(t('upload.errorType'));
      return false;
    }
    if (file.size > maxSizeMB * 1024 * 1024) {
      setError(t('upload.errorSize'));
      return false;
    }
    return true;
  };

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setError(null);
    const validFiles: File[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (validateFile(file)) {
        validFiles.push(file);
      }
    }
    if (validFiles.length > 0) {
      onFilesSelected(validFiles);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
    if (inputRef.current) inputRef.current.value = '';
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="w-full">
      <div
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`
          relative cursor-pointer rounded-2xl border-2 border-dashed
          transition-all duration-200 p-8 md:p-12 text-center
          ${isDragging
            ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/30'
            : 'border-slate-300 dark:border-dark-border hover:border-brand-400 bg-white dark:bg-dark-card'
          }
        `}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          className="hidden"
        />
        <div className="flex flex-col items-center gap-4">
          <div className={`
            w-16 h-16 rounded-2xl flex items-center justify-center
            ${isDragging
              ? 'bg-brand-500 text-white'
              : 'bg-brand-50 dark:bg-brand-950/40 text-brand-500'
            }
            transition-colors
          `}>
            <Upload className="w-8 h-8" />
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">
              {t('upload.title')}
            </p>
            <p className="text-sm text-slate-500 dark:text-dark-muted">
              {t('upload.subtitle')}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-400 dark:text-slate-500">
            <span className="flex items-center gap-1">
              <FileImage className="w-3.5 h-3.5" />
              {t('upload.formats')}
            </span>
            <span>•</span>
            <span>{t('upload.maxSize')}</span>
            {multiple && (
              <>
                <span>•</span>
                <span>{t('upload.multiple')}</span>
              </>
            )}
          </div>
        </div>
        {isDragging && (
          <div className="absolute inset-0 rounded-2xl bg-brand-500/5 pointer-events-none" />
        )}
      </div>

      {error && (
        <div className="mt-4 flex items-center gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 text-red-700 dark:text-red-400 text-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span className="flex-1">{error}</span>
          <button
            onClick={() => setError(null)}
            className="p-1 rounded hover:bg-red-100 dark:hover:bg-red-950/40"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
