import type { Metadata } from 'next'
import Script from 'next/script'
import { Manrope } from 'next/font/google'
import FreshCheck from '@/components/FreshCheck'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Бесплатный индивидуальный профориентационный урок 1 на 1 с педагогом для детей 10–16 лет | Зерокодер',
  description:
    'Бесплатный индивидуальный профориентационный урок 1 на 1 с педагогом для детей 10–16 лет: ребёнок погружается в IT-профессии будущего и создаёт проект с нейросетями, а в конце вы получите первые рекомендации, к каким профессиям у вашего ребёнка талант. Онлайн, из дома, один час.',
  openGraph: {
    title: 'Бесплатный индивидуальный профориентационный урок 1 на 1 с педагогом для детей 10–16 лет',
    description:
      'Ребёнок сам создаёт проект с нейросетями, а педагог видит, что ему интересно и в чём он особенно силён. Онлайн, из дома, один час.',
    locale: 'ru_RU',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={manrope.variable}>
      <head>
        <FreshCheck />

        {/* Яндекс Метрика — общий счётчик лендов kids.zerocoder.ru */}
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

        {/* Пиксель VK (Top.Mail.Ru) */}
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
      <body className="font-sans text-ink antialiased">
        {children}

        <noscript>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://mc.yandex.ru/watch/72085663" style={{ position: 'absolute', left: '-9999px' }} alt="" />
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
