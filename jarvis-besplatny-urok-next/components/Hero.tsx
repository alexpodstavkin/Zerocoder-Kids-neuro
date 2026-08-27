import { Reactor } from './Reactor'

// Первый экран: F-паттерн слева (pill → H1 → lead → CTA → микроподпись),
// единственный очаг свечения справа. Высота — по контенту, не 100vh.
export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      <div className="hud-grid" aria-hidden="true" />

      <div className="container-x relative grid grid-cols-1 items-center gap-10 pb-14 pt-12 d:grid-cols-[1.15fr_0.85fr] d:gap-12 d:pb-[88px] d:pt-[96px]">
        {/* --- Текстовая колонка --- */}
        <div>
          <p className="pill">
            <span className="pill-dot" aria-hidden="true" />
            ОНЛАЙН · ОДИН НА ОДИН · 10–14 ЛЕТ
          </p>

          <h1 className="h1 mt-5">
            {/* Переносы только от 861px. Бюджет строки в левой колонке ~20 знаков
                при 46px/800 — отсюда разбивка 11 / 19 / 16 / 19. */}
            <span className="h1-main">
              Ваш ребёнок
              <br className="hidden d:inline" /> за 60 минут создаст
              <br className="hidden d:inline" /> своего помощника
              <br className="hidden d:inline" /> по учёбе — <span className="hl">Джарвиса</span>
            </span>
            <span className="h1-tail">
              на базе искусственного интеллекта.{' '}
              <strong className="font-bold text-[color:var(--fg)]">Бесплатно</strong>
            </span>
          </h1>

          <p className="lead mt-[22px] max-w-[520px]">
            Джарвис не выдаёт готовый ответ. Он объясняет и задаёт наводящие вопросы,{' '}
            <strong className="font-semibold text-[color:var(--fg)]">
              чтобы ребёнок дошёл до ответа сам
            </strong>
          </p>

          <div className="mt-8">
            <a id="hero-cta" href="#zapis" className="btn-primary w-full d:w-auto">
              Записаться
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* --- Реактор: единственная точка свечения первого экрана --- */}
        <div className="relative mx-auto w-full max-w-[460px]" aria-hidden="true">
          <div className="reactor scanlines">
            <Reactor />
          </div>

          {/* Две mono-подписи телеметрии (латиница — кириллица в моно запрещена) */}
          <span className="pointer-events-none absolute left-0 top-[16%] hidden items-center gap-2 d:flex">
            <span className="mono">SYS.ONLINE</span>
            <span className="block h-px w-5" style={{ background: 'var(--acc-2-dim)' }} />
          </span>
          <span className="pointer-events-none absolute bottom-[16%] right-0 hidden items-center gap-2 d:flex">
            <span className="block h-px w-5" style={{ background: 'var(--acc-2-dim)' }} />
            <span className="mono">AI-CORE</span>
          </span>
        </div>
      </div>
    </section>
  )
}
