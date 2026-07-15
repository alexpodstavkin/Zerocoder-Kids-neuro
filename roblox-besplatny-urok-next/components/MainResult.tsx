import { Button } from './Button'

const ITEMS = [
  'Построит свой уровень-платформер с лавой — по нему можно прыгать и не упасть в неё',
  'Создаст 3D-объекты и настроит их сам: размер, цвет, материал',
  'Научится закреплять объекты в мире, чтобы они не падали и не улетали',
  'Напишет первые строки настоящего кода на Lua — это язык, на котором работают игры в Roblox',
  'Запрограммирует поведение объектов — задаст им правила, что и когда делать',
  'Если останется время — добавит анимацию, чтобы объекты двигались',
]

// ГЛАВНЫЙ блок: что ребёнок сделает уже на первом уроке. Самый сильный визуально —
// тёмная панель с «лава»-свечением, крупный чек-лист из 6 пунктов и финальная строка-акцент.
// Галочки — зелёные (ядро бренда Зерокодер): вторичный бренд-штрих, доминанта остаётся оранж-«лава».
export function MainResult() {
  return (
    <section id="result" className="bg-paper py-14 md:py-24">
      <div className="container-x">
        <div className="mx-auto mb-10 max-w-[820px] text-center">
          <h2 className="h2 normal-case">Что ребёнок сделает уже на первом уроке</h2>
          <p className="lead mt-4 text-sub">
            Обычно на таких уроках обещают размытое — «первый проект», «знакомство с платформой».
            Мы скажем конкретно, что ваш ребёнок унесёт с одного бесплатного занятия. И делает он
            всё сам, а не смотрит, как работает преподаватель:
          </p>
        </div>

        <div className="grad-dark relative overflow-hidden rounded-xl p-6 text-white md:p-10">
          {/* «лава»-блоб для игрового мотива Roblox */}
          <div className="blob absolute -bottom-24 -right-16 h-80 w-80 opacity-40" style={{ background: 'var(--lava)' }} />
          <div className="blob absolute -left-20 -top-20 h-64 w-64 opacity-25" style={{ background: 'var(--acc)' }} />

          <ul className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {ITEMS.map((it, i) => (
              <li
                key={i}
                className="flex items-start gap-3.5 rounded-lg border p-5"
                style={{ background: 'rgba(255,255,255,.05)', borderColor: 'var(--bord-dark)' }}
              >
                <span className="ico-chip-green flex-none">
                  <i className="fi fi-sr-check text-[20px]" aria-hidden />
                </span>
                <span className="text-[16px] leading-[1.5] text-white/90">{it}</span>
              </li>
            ))}
          </ul>

          <div
            className="relative z-10 mt-6 flex items-start gap-3.5 rounded-lg p-6"
            style={{ background: 'color-mix(in srgb, var(--lava) 22%, transparent)', border: '1px solid color-mix(in srgb, var(--lava) 45%, transparent)' }}
          >
            <i className="fi fi-sr-play-circle mt-0.5 flex-none text-[26px]" style={{ color: 'var(--lava)' }} aria-hidden />
            <p className="text-[17px] font-semibold leading-[1.5] text-white">
              В конце урока ребёнок откроет свою игру и покажет её вам. Не рассказ о том, как
              было интересно, — а готовый результат на экране.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button href="#cta" variant="flat" arrow>
            Записаться на бесплатное занятие
          </Button>
        </div>
      </div>
    </section>
  )
}
