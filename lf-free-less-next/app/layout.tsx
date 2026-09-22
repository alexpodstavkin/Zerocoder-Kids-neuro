import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Manrope } from 'next/font/google';
import './globals.css';

// Manrope — канонный шрифт всех лендингов Зерокодера.
const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Бесплатный урок по нейросетям для школьника — Зерокодер',
  description:
    'Бесплатный онлайн-урок один на один: за час ребёнок сам сделает что-то с нейросетью, а вы увидите, тянет его к этому или нет.',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    title: 'Бесплатный урок по нейросетям для школьника — Зерокодер',
    description:
      'Бесплатный онлайн-урок один на один: за час ребёнок сам сделает что-то с нейросетью, а вы увидите, тянет его к этому или нет.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // Страница — один экран, поэтому пользовательский зум не нужен,
  // но запрещать его нельзя: это доступность. Только viewportFit под iOS.
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={manrope.variable} suppressHydrationWarning>
      <head>
        {/* Yandex.Metrika — счётчик репо Zerocoder-Kids-neuro */}
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

        {/* AdvCake: DATA-объект страницы (pageType 2 — не главная).
            Тот же набор, что на боевых лендах репозитория. */}
        <Script id="advcake-data" strategy="afterInteractive">
          {`
window.advcake_data = window.advcake_data || [];
window.advcake_data.push({
    pageType: 2,
});
          `}
        </Script>

        {/* AdvCake: основной JS-код */}
        <Script id="advcakeAsync" strategy="afterInteractive">
          {`
(function(a) {
    var b = a.createElement("script");
    b.async = 1;
    b.src = "//0gs25f.ru/";
    a = a.getElementsByTagName("script")[0];
    a.parentNode.insertBefore(b, a)
})(document);
          `}
        </Script>
      </head>
      <body className="font-sans text-ink antialiased">
        {children}

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
