/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#bae0ff',
          300: '#7cc6ff',
          400: '#36a6ff',
          500: '#0d87f5',
          600: '#0069d1',
          700: '#0154a8',
          800: '#06488a',
          900: '#0b3e72',
          950: '#072447',
        },
        surface: {
          light: '#f8fafc',
          card: '#ffffff',
          border: '#e2e8f0',
          muted: '#64748b',
        },
        dark: {
          bg: '#0b1220',
          card: '#111a2e',
          border: '#1e2a44',
          muted: '#94a3b8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'Tahoma', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(16,24,40,0.04), 0 1px 3px rgba(16,24,40,0.06)',
        'card': '0 4px 16px rgba(16,24,40,0.06)',
        'card-hover': '0 12px 32px rgba(16,24,40,0.10)',
      }
    },
  },
  plugins: [],
}
