/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e8eef2',
          100: '#c5d3dd',
          200: '#9ab0c0',
          300: '#6f8ca3',
          400: '#4a6a82',
          500: '#2d4d63',
          600: '#1a3a4e',
          700: '#102b3b',
          800: '#0c2230',
          900: '#091e2a',
          950: '#071827',
        },
        graphite: {
          50: '#f0f1f2',
          100: '#e2e4e6',
          200: '#c9ccd0',
          300: '#a8adb3',
          400: '#7d848b',
          500: '#5a6168',
          600: '#42484e',
          700: '#33383d',
          800: '#262a2e',
          900: '#1e252b',
          950: '#11151a',
        },
        gold: {
          50: '#faf8f3',
          100: '#f2ecdd',
          200: '#e5d7b8',
          300: '#d4be8a',
          400: '#c4a867',
          500: '#b89b5e',
          600: '#9a7e4b',
          700: '#7a643c',
          800: '#645234',
          900: '#53442e',
        },
        cream: '#F7F5F0',
        offwhite: '#f2f0eb',
        softgrey: '#D8DDE2',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-xl': ['clamp(2rem, 5vw, 3.75rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      animation: {
        'fade-up': 'fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1.2s ease forwards',
        'slide-in': 'slideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'marquee': 'marquee 60s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
      },
    },
  },
  plugins: [],
};
