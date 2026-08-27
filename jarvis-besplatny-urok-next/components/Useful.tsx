import { Icon } from './Icon'
import { Reveal } from './Reveal'

// Блок 3 — заголовок и четыре ячейки в ряд, без раскрытий.
// Скобок здесь нет: лимит §3.7 (4 объекта) уже выбран тремя ячейками блока 2
// и панелью формы. Чип холодный, cyan — блок сознательно без красных пятен,
// иначе он читался бы близнецом блока «За 1 урок».
type Item = { icon: string; verb: string; rest: string }

const ITEMS: Item[] = [
  {
    icon: 'microchip-ai',
    verb: 'Понимал,',
    rest: ' что современные технологии не «магия», а инструмент',
  },
  {
    icon: 'chatbot',
    verb: 'Научился',
    rest: ' использовать нейросети не как ГДЗ, а как помощника',
  },
  {
    icon: 'rocket',
    verb: 'Шёл',
    rest: ' в ногу со временем и получал необходимые навыки для будущей карьеры уже сейчас',
  },
  {
    icon: 'users-class',
    verb: 'Получил',
    rest: ' ценные навыки в коммуникации, критическом мышлении и сотрудничестве',
  },
]

export function Useful() {
  return (
    <section className="py-14 d:py-24" style={{ background: 'var(--bg)' }}>
      <div className="container-x">
        <Reveal>
          <h2 className="h2 max-w-[900px]">
            Бесплатный урок будет <span style={{ color: 'var(--acc-hot)' }}>полезен</span> вашему
            ребёнку, если вы хотите, чтобы он:
          </h2>
        </Reveal>

        <ul className="mt-9 grid grid-cols-1 items-stretch gap-4 d:mt-11 d:grid-cols-4 d:gap-5">
          {ITEMS.map((it, i) => (
            <li key={it.verb} className="h-full">
              <Reveal delay={i * 0.05} className="h-full">
                <div className="card-hud flex h-full flex-col p-[22px_20px] d:p-[26px_24px_28px]">
                  <span className="ico-chip-cool" aria-hidden="true">
                    <Icon name={it.icon} size={22} color="currentColor" />
                  </span>
                  <p className="mt-5 text-[17px] font-medium leading-[1.45] text-[color:var(--fg-2)] d:text-[18px]">
                    <span className="font-bold text-[color:var(--fg)]">{it.verb}</span>
                    {it.rest}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
