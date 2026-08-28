import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { BP } from '@/lib/basePath'
import { Manrope, Fira_Sans } from 'next/font/google'
import './globals.css'
import { AutoScale } from '@/components/AutoScale'

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
  title: 'Бесплатный открытый урок по нейросетям для школьников 10–14 лет',
  description:
    'Онлайн, один на один с педагогом: за один открытый урок ребёнок создаст своего онлайн-помощника по учёбе на базе искусственного интеллекта. Бесплатно, запись открыта.',
}


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${manrope.variable} ${fira.variable}`}>
      <head>
        {/* Иконки Uicons by Flaticon (rounded — канон). Файлы лежат в /public/uicons. */}
        <link rel="stylesheet" href={`${BP}/uicons/regular/rounded.css`} />
        <link rel="stylesheet" href={`${BP}/uicons/solid/rounded.css`} />

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

        {/* Noscript fallbacks for both counters */}
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
