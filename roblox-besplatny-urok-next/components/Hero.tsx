import { Button } from './Button'
import { SeatUrgency } from './SeatUrgency'

// Префикс пути ассетов под GitHub Pages (пусто в dev). basePath не переписывает inline url().
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''

// Чипы формата (по правке владельца: без «1-на-1 с преподавателем»).
const CHIPS = ['Онлайн', '8–14 лет', 'Бесплатно']

// Hero лендинга «Программирование в Roblox» (светлая тема, акценты Roblox).
// Фон — картинка roblox-hero.jpg на весь блок (opacity 50%) + белый скрим под текстом,
// чтобы тёмный H1/подзаголовок/чипы читались чётко на светлой теме.
// H1 = оффер владельца дословно (акцент на «+ 2 курса в подарок»).
export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Фон-изображение Roblox на весь блок, без прозрачности (правка владельца) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-100"
        style={{ backgroundImage: `url(${BASE}/roblox-hero.jpg)` }}
        aria-hidden
      />
      {/* декоративные блобы «лава»: красный Roblox + оранж — игровой мотив */}
      <div className="blob absolute -left-24 -top-20 z-0 h-72 w-72 opacity-25" style={{ background: 'var(--acc)' }} />
      <div className="blob absolute -right-16 top-24 z-0 h-64 w-64 opacity-20" style={{ background: 'var(--lava)' }} />

      <div className="container-x relative z-10 flex flex-col items-center">
        {/* Матовая подложка только под текстом: фото остаётся ярким вокруг,
            а тёмный H1/подзаголовок садятся на читаемый полупрозрачный фон. */}
        <div
          className="flex w-full max-w-[920px] flex-col items-center rounded-3xl px-6 py-10 text-center shadow-soft md:px-14 md:py-14"
          style={{
            background: 'rgba(255,255,255,0.78)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid var(--bord)',
          }}
        >
        {/* Чипы формата — над заголовком HERO (правка владельца) */}
        <ul className="mb-6 flex flex-wrap justify-center gap-2.5">
          {CHIPS.map((c) => (
            <li
              key={c}
              className="inline-flex items-center gap-2 rounded-pill border bg-white px-3.5 py-2 text-[13px] font-semibold text-ink shadow-sm"
              style={{ borderColor: 'var(--bord)' }}
            >
              {/* красная точка — акцент Roblox */}
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--acc)' }} />
              {c}
            </li>
          ))}
        </ul>

        <h1 className="h1 normal-case mb-5 max-w-[940px] text-ink">
          Успейте записать ребёнка на&nbsp;<span className="hl">бесплатное индивидуальное занятие</span> <span className="hl">программирования в&nbsp;Roblox</span> с&nbsp;преподавателем
        </h1>

        <p className="lead mx-auto max-w-[640px] text-sub">
          За один бесплатный урок ребёнок соберёт <span className="hl">свою игру в&nbsp;Roblox</span> — <span className="hl">платформер с&nbsp;лавой</span> и напишет первые строки настоящего кода
        </p>

        {/* Блок срочности с живым счётчиком мест */}
        <SeatUrgency />

        <div className="mt-8 w-full">
          <Button
            href="#register"
            variant="flat"
            arrow
            className="w-full whitespace-normal px-6 text-center sm:w-auto sm:px-9"
          >
            Записаться на бесплатный урок
          </Button>
        </div>
        </div>
      </div>
    </section>
  )
}
