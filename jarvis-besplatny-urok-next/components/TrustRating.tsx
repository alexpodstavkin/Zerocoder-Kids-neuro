import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { Stars } from './Reviews'

// Блок 6 — рейтинг и доверие одной композицией (раньше были две отдельные полосы).
// Слева крупная средняя оценка, справа четыре пункта в два ряда, между ними hairline:
// вертикальный на десктопе, горизонтальный на мобиле.
// Логотипы и названия сторонних площадок не выводим — чужие товарные знаки.
// Денежных цифр здесь нет намеренно: прямо перед формой они подкармливают
// возражение «бесплатный урок ради продажи».
// Модификатор --static гасит hover-лифт: блок не кликабельный, подсветка дала бы
// ложную аффордансность.
const ITEMS = [
  { icon: 'diploma', text: 'Образовательная лицензия' },
  { icon: 'badge-check', text: 'Резидент Сколково' },
  { icon: 'graduation-cap', text: 'Более 10 000 выпускников' },
  { icon: 'school', text: 'Преподаём в вузах' },
]

export function TrustRating() {
  return (
    <section className="py-10 d:py-14" style={{ background: 'var(--bg-2)' }}>
      <div className="container-x">
        <Reveal>
          <div className="card-hud card-hud--static grid grid-cols-1 gap-6 p-6 d:grid-cols-[minmax(0,320px)_1fr] d:items-center d:gap-10 d:p-8">
            {/* Рейтинг */}
            <div className="text-center d:text-left">
              <p className="text-[34px] font-extrabold leading-none tracking-[-0.02em] text-[color:var(--fg)] d:text-[40px]">
                4,7
              </p>
              <div className="mt-2.5 flex justify-center d:justify-start">
                <Stars />
              </div>
              <p className="mt-2.5 text-[14px] font-medium leading-[1.45] text-[color:var(--fg-2)] d:text-[15px]">
                средняя оценка на независимых площадках · 403 отзыва
              </p>
            </div>

            {/* Пункты доверия. Разделитель: сверху на мобиле, слева на десктопе. */}
            <ul
              className="grid grid-cols-1 gap-4 border-t pt-6 d:grid-cols-2 d:gap-x-8 d:gap-y-5 d:border-l d:border-t-0 d:pl-10 d:pt-0"
              style={{ borderColor: 'var(--line)' }}
            >
              {ITEMS.map((it) => (
                <li key={it.text} className="flex items-center gap-3">
                  <span className="flex-none" style={{ color: 'var(--acc-2)' }} aria-hidden="true">
                    <Icon name={it.icon} size={20} color="currentColor" />
                  </span>
                  <span className="text-[15px] font-semibold leading-[1.35] text-[color:var(--fg)]">
                    {it.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
