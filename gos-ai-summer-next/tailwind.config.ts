import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['var(--font-inter)', 'sans-serif'] },
      colors: {
        navy: '#1C3F94',
        navyDark: '#15306F',
        accentRed: '#D62E2E',
        accentRedHover: '#B82424',
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
