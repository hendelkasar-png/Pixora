# Pixora

**Professional Online Image Tools Platform**

A modern, professional image processing platform built with React, TypeScript, Vite, and Tailwind CSS. All tools run entirely in the browser using the Canvas API — no server uploads, complete privacy.

## ✨ Features

- **6 Real Image Tools**: Compressor, Resizer, Converter, Cropper, Rotator, Flipper
- **Browser-Based Processing**: All operations use the Canvas API. Your images never leave your device.
- **Bilingual**: Full English (LTR) and Arabic (RTL) support with a language switcher
- **Theme System**: Light, Dark, and System modes with localStorage persistence
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Modern UI**: Professional SaaS interface with a blue gradient brand identity

## 🛠️ Tech Stack

- **React 19** + **TypeScript 6**
- **Vite 8** (build tool)
- **React Router DOM 7** (routing)
- **Tailwind CSS 3.4** (styling)
- **lucide-react** (icons)
- **Canvas API** (image processing)

## 📁 Project Structure

```
src/
├── assets/          # Static assets
├── components/      # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   ├── LanguageSwitcher.tsx
│   ├── UploadZone.tsx
│   ├── ToolCard.tsx
│   ├── ImagePreview.tsx
│   ├── DownloadButton.tsx
│   ├── ErrorMessage.tsx
│   ├── LoadingState.tsx
│   └── ToolPageShell.tsx
├── contexts/        # React Context providers
│   ├── ThemeContext.tsx      # Light/Dark/System theme
│   └── LanguageContext.tsx   # English/Arabic + RTL
├── data/            # Static data and translations
│   ├── tools.ts
│   └── translations.ts
├── hooks/           # Custom React hooks
│   └── useImageState.ts
├── lib/             # Utility libraries
│   └── imageUtils.ts        # Canvas API image processing
├── pages/           # Route pages
│   ├── Home.tsx
│   ├── Tools.tsx
│   ├── ImageCompressor.tsx
│   ├── ImageResizer.tsx
│   ├── ImageConverter.tsx
│   ├── ImageCropper.tsx
│   ├── ImageRotator.tsx
│   ├── ImageFlipper.tsx
│   ├── About.tsx
│   ├── FAQ.tsx
│   └── NotFound.tsx
├── types/           # TypeScript type definitions
│   └── index.ts
├── App.tsx          # Root component with routes
├── main.tsx         # Entry point with providers
└── index.css        # Tailwind directives + global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (recommended 20+)
- npm or yarn or pnpm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start dev server
npm run dev
```

Open http://localhost:5173 in your browser.

### Build

```bash
# Type check + production build
npm run build

# Preview production build
npm run preview
```

### Type Checking

```bash
# Run TypeScript compiler check
npx tsc -b
```

## 🛣️ Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/tools` | All Tools |
| `/tools/compressor` | Image Compressor |
| `/tools/resizer` | Image Resizer |
| `/tools/converter` | Image Converter |
| `/tools/cropper` | Image Cropper |
| `/tools/rotator` | Image Rotator |
| `/tools/flipper` | Image Flipper |
| `/about` | About |
| `/faq` | FAQ |
| `*` | 404 Not Found |

## 🎨 Image Processing Library (`src/lib/imageUtils.ts`)

All functions are Promise-based and use the HTML Canvas API:

- `compressImage(src, { quality, format })` — Quality-based compression (JPEG/WebP)
- `resizeImage(src, { width, height, maintainAspectRatio })` — Resize with optional aspect ratio lock
- `convertImage(src, { format, quality, background })` — Convert between JPG/PNG/WebP
- `cropImage(src, { x, y, width, height })` — Crop to a specific region
- `rotateImage(src, angle)` — Rotate by 90°, 180°, or 270°
- `flipImage(src, direction)` — Flip horizontally or vertically
- `loadImage(url)`, `fileToDataURL(file)`, `dataURLtoFile(...)`, `downloadDataURL(...)`

## 🌍 Internationalization

- **LanguageContext** provides the current language, a toggle function, and a `t(key)` translation function
- All translations are centralized in `src/data/translations.ts`
- Arabic mode automatically sets `dir="rtl"` on `<html>` and switches to Cairo font
- Language preference is saved to `localStorage` under key `pixora-lang`

## 🌓 Theme System

- **ThemeContext** supports three modes: `light`, `dark`, and `system`
- Uses Tailwind's `class` dark mode strategy
- `system` mode listens to `prefers-color-scheme` changes
- Theme preference is saved to `localStorage` under key `pixora-theme`
- The `ThemeToggle` component cycles through light → dark → system

## 📝 Notes

- This is a completely new project created from scratch. No files or designs from previous Pixora projects were reused.
- The visual identity uses a blue gradient brand (`brand-500: #0d87f5`) to ensure distinction.
- All icons are imported from `lucide-react` and verified to exist. The compression tool uses `Archive` (not `Compress`, which is not exported by lucide-react).

## 📄 License

Built with care. Professional image tools for everyone.
