import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        heliotrope: '#B15EFF',
        purple: '#9B51E0',
        emerald: '#00E48D',
        emeraldH: '#00C97A',
        ink: '#222222',
        ink2: '#323232',
        shark: '#262626',
        alabaster: '#FBFBFB',
        seashell: '#F1F1F1',
        bgTinted: '#F5F2FA',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        screen: '90rem',
      },
    },
  },
  plugins: [],
}

export default config
