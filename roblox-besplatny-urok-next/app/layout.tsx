import type { Metadata } from 'next'
import { Manrope, Fira_Sans } from 'next/font/google'
import './globals.css'
import { AutoScale } from '@/components/AutoScale'

// Префикс пути ассетов под GitHub Pages (пусто в dev).
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''

// Manrope — основной шрифт всех лендингов Зерокодера (вес 300–800).
const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})
// Fira Sans — для акцентного курсива в выделенных словах (класс .accent-italic).
const fira = Fira_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600'],
  style: ['italic', 'normal'],
  variable: '--font-fira',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Программирование в Roblox — бесплатный урок для детей 8–14 лет | Зерокодер',
  description:
    'За один бесплатный урок один на один с преподавателем ребёнок соберёт свою игру в Roblox и напишет первый код на Lua. Онлайн, 8–14 лет. За запись — 2 курса в подарок.',
  openGraph: {
    title: 'Программирование в Roblox — бесплатный урок | Зерокодер',
    description:
      'Ребёнок соберёт свою игру в Roblox и напишет первый код на Lua за один бесплатный урок один на один с преподавателем.',
    type: 'website',
    locale: 'ru_RU',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${manrope.variable} ${fira.variable}`}>
      <head>
        {/* Иконки Uicons by Flaticon (rounded — канон). Файлы лежат в /public/uicons.
            BASE — префикс под GitHub Pages (пусто в dev); <link href> basePath не переписывает. */}
        <link rel="stylesheet" href={`${BASE}/uicons/regular/rounded.css`} />
        <link rel="stylesheet" href={`${BASE}/uicons/solid/rounded.css`} />
        <link rel="stylesheet" href={`${BASE}/uicons/bold/rounded.css`} />
      </head>
      <body className="bg-white font-sans text-ink antialiased">
        <AutoScale />
        {children}
      </body>
    </html>
  )
}
