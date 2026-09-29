import { asset } from '@/lib/asset'
import Image from 'next/image'
import { Countdown } from '@/components/Countdown'
import { GetCourseWidget } from '@/components/GetCourseWidget'
import { Footer } from '@/components/Footer'

// Неразрывные пробелы после коротких слов (предлоги/союзы), чтобы они не висели в конце строки.
function t(s: string): string {
  return s.replace(/(?<=^|[\s(«\u00a0])([А-Яа-яЁёA-Za-z0-9]{1,2}) /g, '$1\u00a0').replace(/ —/g, '\u00a0—')
}

// Письмо: почему (боль + что такое профориентация в 8–14) → что получите.
const LETTER = [
  'Хочется понять, к чему у ребёнка лежит душа, а не водить его по кружкам наугад? Профориентация в 8–14 лет — это не выбор одной профессии, а поиск интересов и сильных сторон, пока есть такая возможность. Мы не гадаем по анкете, а лично смотрим на уроке, что интересно ребёнку: придумывать, рисовать, выстраивать логику или сочинять истории.',
  'В конце урока педагог расскажет вам, какие сильные стороны заметил, и даст первые рекомендации, в какую сторону развиваться дальше. О нашей программе тоже расскажем, но покупать ничего не нужно — рекомендации вы получите в любом случае. Нам важно, чтобы у вас был понятный следующий шаг, а не очередной кружок наугад.',
]

// Вёрстка повторяет zero-блок образца (zerocoder.ru/free-lesson-on-neural-networks-for-children):
// фиксированные размеры на брейкпоинтах Tilda 960+/640/480/320, без масштабирования. Стили — .zb-* в globals.css.
export default function Page() {
  return (
    <>
      <main className="zb-col">
        <Image src={asset('/logo.svg')} alt="Зерокодер" width={1365} height={430} priority className="zb-logo" />

        <div className="zb-content">
          <div className="zb-photo">
            <Image
              src={asset('/kids-orange.jpg')}
              alt="Девочка и мальчик улыбаются за столом с ноутбуком"
              fill
              priority
              sizes="(max-width: 479px) 95vw, 760px"
              className="object-cover"
            />
          </div>

          <div className="zb-hero-row">
            <Countdown />
            <a href="#form" className="zb-pill">
              Количество мест ограничено
            </a>
          </div>

          <h1 className="zb-h1">
            <span className="zb-hl">
              {t('Бесплатный индивидуальный профориентационный')} <span className="zb-mnw">урок</span>
            </span>
            <span className="zb-mnw">
              {' '}
              1&nbsp;на&nbsp;1 <span className="whitespace-nowrap">с&nbsp;педагогом</span>
            </span>{' '}
            <span className="zb-mnw">для&nbsp;детей 8–14&nbsp;лет</span>
          </h1>

          <div className="zb-blue">
            <Image src={asset('/rocket.svg')} alt="" width={50} height={50} className="zb-rocket" />
            <p>
              {t(
                'За один час ребёнок погружается в перспективные IT-профессии будущего и создаёт проект с нейросетями, а педагог направляет и видит, что ему интересно и в чём он особенно силён. В конце вы получите первые рекомендации, к каким профессиям у вашего ребёнка талант.',
              )}
            </p>
          </div>

          <div className="zb-letter">
            {LETTER.map((p, i) => (
              <p key={i}>{t(p)}</p>
            ))}
            <p className="italic">
              {t(
                'P.S. Проходите урок вместе: вы увидите своего ребёнка в деле — возможно, с неожиданной стороны. Онлайн, из дома, один час. Оставьте заявку ниже — мы свяжемся и подберём удобное время.',
              )}
            </p>
          </div>

          <div id="form" className="zb-form">
            <GetCourseWidget />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
