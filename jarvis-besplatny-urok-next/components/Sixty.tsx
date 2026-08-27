import { Icon } from './Icon'
import { Reveal } from './Reveal'

// «За 1 урок под руководством преподавателя ваш ребёнок» — три ячейки.
// Текст владельца идёт одной крупной строкой, без пояснений-подзаголовков.
// Средняя ячейка акцентная: она несёт главное обещание страницы.
// Под ячейками — вывод блока с цифрой и атрибуцией источника.
type Slab = {
  num: string
  icon: string
  solid?: boolean
  main: string
  accent?: boolean
}

const SLABS: Slab[] = [
  {
    num: '01',
    icon: 'brain-circuit',
    main: 'Сделает первые шаги в работе с нейросетями',
  },
  {
    num: '02',
    icon: 'robot',
    solid: true,
    accent: true,
    main: 'Соберёт своего онлайн-помощника по учёбе на базе искусственного интеллекта и заберёт его',
  },
  {
    num: '03',
    icon: 'skill-user',
    main: 'Получит ценную информацию по развитию своих талантов',
  },
]

export function Sixty() {
  return (
    <section className="py-14 d:py-24" style={{ background: 'var(--bg-2)' }}>
      <div className="container-x">
        <Reveal>
          <h2 className="h2 mx-auto max-w-[820px] text-center">
            За <span style={{ color: 'var(--acc-hot)' }}>1 урок</span> под руководством
            преподавателя ваш ребёнок
          </h2>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 items-stretch gap-4 d:mt-11 d:grid-cols-3 d:gap-5">
          {SLABS.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.06} className="h-full">
              <article
                className={`card-hud brackets flex h-full flex-col p-[22px_20px] d:p-[28px_26px_30px] ${
                  s.accent ? 'card-hud--accent' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={s.solid ? 'ico-chip-solid' : 'ico-chip'}>
                    <Icon
                      name={s.icon}
                      style={s.solid ? 'solid' : 'regular'}
                      size={22}
                      color="currentColor"
                    />
                  </span>
                  <span className="mono">{s.num}</span>
                </div>

                <p className="mt-5 text-[20px] font-bold leading-[1.3] text-[color:var(--fg)] d:mt-[22px] d:text-[22px]">
                  {s.main}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Вывод блока: цифра + источник. Отдельной полосы фактов на странице больше нет. */}
        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 max-w-[760px] text-center text-[20px] font-semibold leading-[1.45] text-[color:var(--fg)] d:mt-12 d:text-[22px]">
            71% детей уже пользуются нейросетями. Вопрос один — как именно и кто покажет им другой
            способ.
          </p>
          <p className="mx-auto mt-3 max-w-[760px] text-center text-[13px] font-medium leading-[1.5] text-[color:var(--fg-3)]">
            По данным исследования «Лаборатории Касперского», май 2026
          </p>
        </Reveal>
      </div>
    </section>
  )
}
