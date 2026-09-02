import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['var(--font-inter)', 'sans-serif'] },
      colors: {
        navy: '#2A3160',
        navyDark: '#1E2547',
        accent: '#515CB0',
        accentHover: '#414A93',
        accentTint: '#F1F2F9',
        accentOnDark: '#9AA1D0',
        surface: '#FFFFFF',
        neutral: '#F4F6FA',
        border: '#E2E6EE',
        inkPrimary: '#1B1F2A',
        inkSecondary: '#4A5468',
        inkCaption: '#7A8395',
        success: '#2E7D5B',
      },
      borderRadius: {
        gov: '6px',
      },
    },
  },
  plugins: [],
};

export default config;
