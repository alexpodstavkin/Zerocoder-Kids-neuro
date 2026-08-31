import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Manrope } from 'next/font/google';
import { BP } from '@/lib/basePath';
import { AutoScale } from '@/components/AutoScale';
import './globals.css';

// Manrope — основной шрифт всех лендингов Зерокодера (вес 300–800).
const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Всероссийская программа подготовки школьников 2026 — бесплатный урок по нейросетям',
  description:
    'С 2026 года российские школьники изучают профиль «Искусственный интеллект». Бесплатный вводный урок в партнёрстве с Университетом Зерокодер для школьников 5–8 классов. За один час подросток создаст своего личного ИИ-репетитора.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={manrope.variable} suppressHydrationWarning>
      <head>
        {/* Помечаем документ как «JS работает»: только тогда включается скрытое
            стартовое состояние Reveal. Без JS страница видна целиком. */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.setAttribute('data-js','1')" }}
        />

        {/* Иконки Uicons by Flaticon (rounded — канон). Файлы лежат в /public/uicons. */}
        <link rel="stylesheet" href={`${BP}/uicons/regular/rounded.css`} />
        <link rel="stylesheet" href={`${BP}/uicons/solid/rounded.css`} />
        <link rel="stylesheet" href={`${BP}/uicons/brands/all.css`} />

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
  );
}
