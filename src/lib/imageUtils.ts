export function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

export function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = url;
  });
}

export function fileToDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

export function dataURLtoFile(dataUrl: string, filename: string): File {
  const arr = dataUrl.split(',');
  const mimeMatch = arr[0].match(/:(.*?);/);
  const mime = mimeMatch ? mimeMatch[1] : 'image/png';
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}

export function dataURLtoBlob(dataUrl: string): Blob {
  const arr = dataUrl.split(',');
  const mimeMatch = arr[0].match(/:(.*?);/);
  const mime = mimeMatch ? mimeMatch[1] : 'image/png';
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

export function downloadDataURL(dataUrl: string, filename: string): void {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export interface CompressOptions {
  quality: number; // 0-1
  format?: 'image/jpeg' | 'image/webp';
}

export async function compressImage(src: string, options: CompressOptions): Promise<string> {
  const img = await loadImage(src);
  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas not supported');
  ctx.drawImage(img, 0, 0);
  const format = options.format || 'image/jpeg';
  return canvas.toDataURL(format, options.quality);
}

export interface ResizeOptions {
  width?: number;
  height?: number;
  maintainAspectRatio?: boolean;
}

export async function resizeImage(src: string, options: ResizeOptions): Promise<string> {
  const img = await loadImage(src);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas not supported');

  let targetWidth = options.width || img.naturalWidth;
  let targetHeight = options.height || img.naturalHeight;

  if (options.maintainAspectRatio) {
    const ratio = img.naturalWidth / img.naturalHeight;
    if (options.width && !options.height) {
      targetHeight = Math.round(options.width / ratio);
    } else if (options.height && !options.width) {
      targetWidth = Math.round(options.height * ratio);
    } else if (options.width && options.height) {
      const widthRatio = options.width / img.naturalWidth;
      const heightRatio = options.height / img.naturalHeight;
      const scale = Math.min(widthRatio, heightRatio);
      targetWidth = Math.round(img.naturalWidth * scale);
      targetHeight = Math.round(img.naturalHeight * scale);
    }
  }

  canvas.width = targetWidth;
  canvas.height = targetHeight;
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

  return canvas.toDataURL('image/png');
}

export interface ConvertOptions {
  format: 'image/jpeg' | 'image/png' | 'image/webp';
  quality?: number;
  background?: string; // for JPEG conversion from transparent PNG
}

export async function convertImage(src: string, options: ConvertOptions): Promise<string> {
  const img = await loadImage(src);
  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas not supported');

  if (options.format === 'image/jpeg') {
    ctx.fillStyle = options.background || '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  ctx.drawImage(img, 0, 0);

  const quality = options.format === 'image/png' ? undefined : (options.quality || 0.92);
  return canvas.toDataURL(options.format, quality);
}

export interface CropOptions {
  x: number;
  y: number;
  width: number;
  height: number;
}

export async function cropImage(src: string, options: CropOptions): Promise<string> {
  const img = await loadImage(src);
  const canvas = document.createElement('canvas');
  canvas.width = options.width;
  canvas.height = options.height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas not supported');
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(
    img,
    options.x, options.y, options.width, options.height,
    0, 0, options.width, options.height
  );
  return canvas.toDataURL('image/png');
}

export type RotationAngle = 90 | 180 | 270;

export async function rotateImage(src: string, angle: RotationAngle): Promise<string> {
  const img = await loadImage(src);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas not supported');

  if (angle === 90 || angle === 270) {
    canvas.width = img.naturalHeight;
    canvas.height = img.naturalWidth;
  } else {
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
  }

  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate((angle * Math.PI) / 180);
  ctx.drawImage(img, -img.naturalWidth / 2, -img.naturalHeight / 2);

  return canvas.toDataURL('image/png');
}

export type FlipDirection = 'horizontal' | 'vertical';

export async function flipImage(src: string, direction: FlipDirection): Promise<string> {
  const img = await loadImage(src);
  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas not supported');

  ctx.save();
  if (direction === 'horizontal') {
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
  } else {
    ctx.translate(0, canvas.height);
    ctx.scale(1, -1);
  }
  ctx.drawImage(img, 0, 0);
  ctx.restore();

  return canvas.toDataURL('image/png');
}

export async function getImageDimensions(src: string): Promise<{ width: number; height: number }> {
  const img = await loadImage(src);
  return { width: img.naturalWidth, height: img.naturalHeight };
}
