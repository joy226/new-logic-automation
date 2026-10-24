/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#E8EDF2',
          100: '#C5D0DE',
          200: '#94A5BD',
          300: '#63769A',
          400: '#3D5278',
          500: '#1E3654',
          600: '#142840',
          700: '#0D1E33',
          800: '#081627',
          900: '#050F1B',
          950: '#030812',
        },
        teal: {
          50: '#FFF1F0',
          100: '#FFE0DD',
          200: '#FFC5C0',
          300: '#FF9B93',
          400: '#FF6B5E',
          500: '#E63946',
          600: '#C42F3B',
          700: '#A02530',
          800: '#7C1D26',
          900: '#5C1620',
        },
        accent: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        warm: {
          50: '#F7F8FA',
          100: '#EEF0F4',
          200: '#DDE1E9',
          300: '#C2C9D5',
          400: '#98A2B5',
          500: '#526174',
          600: '#3D4A5B',
          700: '#2E3847',
          800: '#1F2733',
          900: '#141923',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '700' }],
        'h1': ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['clamp(1.625rem, 3vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '700' }],
        'h3': ['clamp(1.25rem, 2vw, 1.625rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h4': ['1.125rem', { lineHeight: '1.3', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '38': '9.5rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.25rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(16, 36, 58, 0.06), 0 1px 2px -1px rgba(16, 36, 58, 0.06)',
        'card': '0 4px 12px -2px rgba(16, 36, 58, 0.08), 0 2px 6px -2px rgba(16, 36, 58, 0.06)',
        'elevated': '0 12px 28px -4px rgba(16, 36, 58, 0.12), 0 6px 12px -4px rgba(16, 36, 58, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'draw-line': 'drawLine 1.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
};
