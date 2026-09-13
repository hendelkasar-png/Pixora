export type Language = 'en' | 'ar';

export type ThemeMode = 'light' | 'dark' | 'system';

export interface TranslationDict {
  [key: string]: string;
}

export interface ToolInfo {
  id: string;
  path: string;
  iconKey: string;
  category: string;
}

export interface ImageFile {
  id: string;
  file: File;
  url: string;
  name: string;
  size: number;
  type: string;
}

export interface ProcessedImage {
  id: string;
  originalUrl: string;
  processedUrl: string;
  originalName: string;
  originalSize: number;
  processedSize: number;
  type: string;
}
