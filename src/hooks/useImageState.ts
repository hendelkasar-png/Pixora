import { useState, useCallback } from 'react';
import { fileToDataURL, formatBytes } from '../lib/imageUtils';

export interface ImageState {
  file: File | null;
  dataUrl: string;
  name: string;
  size: number;
  dimensions: { width: number; height: number } | null;
}

const initialState: ImageState = {
  file: null,
  dataUrl: '',
  name: '',
  size: 0,
  dimensions: null,
};

export function useImageState() {
  const [image, setImage] = useState<ImageState>(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadFile = useCallback(async (file: File) => {
    setIsLoading(true);
    setError(null);
    try {
      const dataUrl = await fileToDataURL(file);
      const img = new Image();
      img.src = dataUrl;
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });
      setImage({
        file,
        dataUrl,
        name: file.name,
        size: file.size,
        dimensions: { width: img.naturalWidth, height: img.naturalHeight },
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load image');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleFiles = useCallback((files: File[]) => {
    if (files.length > 0) {
      loadFile(files[0]);
    }
  }, [loadFile]);

  const reset = useCallback(() => {
    setImage(initialState);
    setError(null);
  }, []);

  return {
    image,
    isLoading,
    error,
    setError,
    handleFiles,
    loadFile,
    reset,
    formatSize: formatBytes,
    hasImage: !!image.file,
  };
}
