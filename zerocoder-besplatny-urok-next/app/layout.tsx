import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { AutoScale } from '@/components/AutoScale'

// Порт HTML-прототипа: шрифтовой стек как в прототипе (SB Sans Display → system),
// Manrope НЕ подключаем — сохраняем исходный вид.

export const metadata: Metadata = {
  title: 'Зерокодер — Бесплатный урок цифровых технологий для детей 8–17 лет',
  description:
    'Бесплатный онлайн-урок цифровых технологий для детей 8–17 лет: нейросети, вайбкодинг, Roblox и Python. За 60 минут ребёнок соберёт свой первый проект и пройдёт профориентацию.',
  icons: { icon: '/zerocoder-besplatny-urok/logo-icon.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
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

        {/* AdvCake */}
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
      <body>
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
