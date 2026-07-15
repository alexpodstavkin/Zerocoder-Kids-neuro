import type { Metadata } from 'next'
import Script from 'next/script'
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
  title: 'Программирование в Roblox — бесплатное занятие для детей 8–14 лет | Зерокодер',
  description:
    'За 60 минут один на один с преподавателем ребёнок соберёт свою игру в Roblox и напишет первый код на Lua. Онлайн, 8–14 лет. За запись — 2 курса в подарок.',
  openGraph: {
    title: 'Программирование в Roblox — бесплатное занятие | Зерокодер',
    description:
      'Ребёнок соберёт свою игру в Roblox и напишет первый код на Lua за 60 минут один на один с преподавателем.',
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

        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
(function(m,e,t,r,i,k,a){
  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');
ym(72085663, 'init', {clickmap:true, referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>

        {/* Top.Mail.Ru / VK pixel */}
        <Script id="top-mail-ru" strategy="afterInteractive">
          {`
var _tmr = window._tmr || (window._tmr = []);
_tmr.push({id: "3739769", type: "pageView", start: (new Date()).getTime()});
(function (d, w, id) {
  if (d.getElementById(id)) return;
  var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
  ts.src = "https://top-fwz1.mail.ru/js/code.js";
  var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
  if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
})(document, window, "tmr-code");
          `}
        </Script>
      </head>
      <body className="bg-white font-sans text-ink antialiased">
        <AutoScale />
        {children}

        {/* Счётчики без JS */}
        <noscript>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://mc.yandex.ru/watch/72085663"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://top-fwz1.mail.ru/counter?id=3739769;js=na"
              style={{ position: 'absolute', left: '-9999px' }}
              alt="Top.Mail.Ru"
            />
          </div>
        </noscript>
      </body>
    </html>
  )
}
