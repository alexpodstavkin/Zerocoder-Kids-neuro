import { hero } from '@/lib/content'
import { IconArrow, IconShield } from './icons'
import EventDatePill from './EventDatePill'

export default function Hero() {
  return (
    <section id="top" className="section section-dark">
      <div className="container-zc">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-5">
              <EventDatePill />
            </div>

            <div className="flex flex-wrap items-center gap-2 mb-6">
              {hero.badges.map((b) => (
                <span key={b} className="pill">{b}</span>
              ))}
            </div>

            <h1 className="h1 mb-5">
              {hero.title.pre}{' '}
              <span style={{ color: 'var(--accent-heliotrope)' }}>{hero.title.accent.replace(/ /g, ' ')}</span>
              {hero.title.mid}
              <span className="whitespace-nowrap">{hero.title.nowrap.replace(/ /g, ' ')}</span>
              {hero.title.post}
            </h1>

            <p className="lead max-w-2xl mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>
              {hero.lead}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a href="#register" data-open-register="" className="btn btn-cta">
                {hero.cta}
                <IconArrow />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="mock-chat max-w-md mx-auto lg:ml-auto">
              <div className="flex items-center gap-3 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                  style={{ background: 'var(--accent-heliotrope)' }}
                >
                  ИИ
                </div>
                <div>
                  <div className="font-semibold text-sm leading-tight text-white">ИИ-репетитор Маши</div>
                  <div className="text-xs flex items-center gap-1.5 mt-0.5" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--surface-cta)' }} />
                    На основе учебника алгебры, 7 класс
                  </div>
                </div>
              </div>
              <div className="space-y-3 mt-4">
                <div className="bubble-user max-w-[85%] ml-auto">не понимаю как раскладывать на множители</div>
                <div className="bubble-ai max-w-[90%]">
                  Покажи задачу, которую сейчас решаешь. Не давай мне просто пример из тетради — покажи фотографию или
                  перепиши условие. Так я пойму, на каком ты этапе.
                </div>
                <div className="bubble-user max-w-[85%] ml-auto">x²+5x+6</div>
                <div className="bubble-ai max-w-[90%]">
                  Ок. Сначала вопрос: какие два числа в сумме дают 5, а в произведении 6? Не подсказываю — попробуй сама.
                </div>
                <div className="flex items-center gap-2 pt-2 text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  <IconShield />
                  Не даёт готовый ответ. Ведёт к решению.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
