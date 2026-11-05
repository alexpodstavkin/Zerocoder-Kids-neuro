import { asset } from '@/lib/asset'
import Image from 'next/image'
import { Countdown } from '@/components/Countdown'
import { GetCourseWidget } from '@/components/GetCourseWidget'
import { Footer } from '@/components/Footer'

// Неразрывные пробелы после коротких слов (предлоги/союзы), чтобы они не висели в конце строки.
function t(s: string): string {
  return s.replace(/(?<=^|[\s(«\u00a0])([А-Яа-яЁёA-Za-z0-9]{1,2}) /g, '$1\u00a0').replace(/ —/g, '\u00a0—')
}

// Письмо: почему (вопросы каждый вечер) → как устроен помощник → честная граница.
const LETTER = [
  'Вечер, домашка. Вы сами уже не помните, как её решать, а репетитор — через пять дней, если он у вас есть. Ребёнок переписывает ответ из нейросети. И так по кругу.',
  'Этот круг может разорвать ИИ-помощник. На уроке ребёнок обучает его на школьном учебнике, и помощник сам выдаёт задачи, чтобы закрепить тему. Готовых ответов он не даёт: объясняет другими словами, подбирает похожий пример и подводит к решению, до которого ребёнок доходит сам. Переспросить у него не стыдно.',
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
              src={asset('/kids-green.jpg')}
              alt="Подростки смеются у ноутбука с чатом, рядом учебник и зелёная тетрадь"
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
              Создаем бесплатного <span className="whitespace-nowrap">ИИ-помощника</span> по&nbsp;учебе
            </span>
            {t(', который не даст списать')}
          </h1>

          <div className="zb-blue">
            <Image src={asset('/rocket.svg')} alt="" width={50} height={50} className="zb-rocket" />
            <p>
              {t('Бесплатный онлайн-урок 1 на 1')}{' '}
              <span className="whitespace-nowrap">с&nbsp;педагогом</span>{' '}
              <span className="whitespace-nowrap">для&nbsp;детей 10–15&nbsp;лет.</span>{' '}
              {t('За один час ребёнок сам создаёт своего ИИ-помощника под руководством опытного преподавателя.')}
            </p>
          </div>

          <div className="zb-letter">
            {LETTER.map((p, i) => (
              <p key={i}>{t(p)}</p>
            ))}
            <p className="italic">
              {t(
                'P.S. Можно пройти урок вместе с ребёнком, разбираться в нейросетях вам не нужно. Онлайн, из дома, для урока нужен компьютер, телефон не подойдёт. В конце расскажем о нашей программе, где учим работать с нейросетями, а покупать или нет — решать вам. ИИ-помощник в любом случае останется у вас. Оставьте заявку ниже — мы свяжемся и подберём удобное время.',
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
