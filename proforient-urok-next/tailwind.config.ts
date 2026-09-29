import type { Config } from 'tailwindcss'

// ДИЗАЙН-ТОКЕНЫ ЗЕРОКОДЕРА — выведены из живого аудита 8 боевых лендингов (2026-06).
// Принцип: нейтрали + типографика + радиусы + тени ПОСТОЯННЫ.
// Меняется только АКЦЕНТ — он подаётся через CSS-переменные (см. app/globals.css :root),
// поэтому переключение цвета проекта = правка 4 строк в одном месте.
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Акцент — из CSS-переменных (--acc и т.д.). Меняется под проект в globals.css.
        acc: {
          DEFAULT: 'var(--acc)',
          dark: 'var(--acc-dark)',
          soft: 'var(--acc-soft)',
          2: 'var(--acc-2)',
        },
        // Нейтрали — постоянны (тоже через переменные, но трогать не нужно).
        ink: 'var(--ink)',
        sub: 'var(--sub)',
        paper: { DEFAULT: 'var(--paper)', warm: 'var(--paper-warm)' },
        dark: { DEFAULT: 'var(--dark)', 2: 'var(--dark-2)' },
        bord: { DEFAULT: 'var(--bord)', dark: 'var(--bord-dark)' },
        white: '#ffffff',
      },
      fontFamily: {
        // Manrope — основной (на всех 8 лендах). Fira Sans — акцентный курсив.
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        accent: ['var(--font-fira)', 'var(--font-manrope)', 'sans-serif'],
      },
      borderRadius: {
        // Шкала из живых лендов: 5 / 10 / 12 / 15 / 20 / 28 / pill.
        sm: '5px',
        flat: '10px',
        md: '12px',
        card: '15px',
        lg: '20px',
        xl: '28px',
        pill: '100px',
      },
      boxShadow: {
        // По умолчанию дизайн плоский. Тени — дозированно.
        sm: '0 2px 8px rgba(0,0,0,.04)',
        soft: '0 12px 32px rgba(0,0,0,.10), 0 2px 4px rgba(0,0,0,.04)',
        md: '0 20px 60px rgba(0,0,0,.18)',
        hero: '0 40px 100px rgba(0,0,0,.45)',
      },
      maxWidth: { content: '1200px' },
      letterSpacing: {
        tightest: '-0.03em', // плотный трекинг заголовков Зерокодера
      },
    },
  },
  plugins: [],
}
export default config
