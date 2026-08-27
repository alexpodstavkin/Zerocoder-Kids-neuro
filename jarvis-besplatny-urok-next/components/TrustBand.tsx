import { Icon } from './Icon'
import { Reveal } from './Reveal'

// Блок 6 — полоса доверия перед формой. Четыре пункта, без денежных цифр:
// прямо перед формой они подкармливают возражение «бесплатный урок ради продажи».
const ITEMS = [
  { icon: 'diploma', text: 'Образовательная лицензия' },
  { icon: 'badge-check', text: 'Резидент Сколково' },
  { icon: 'graduation-cap', text: 'Более 10 000 выпускников' },
  { icon: 'school', text: 'Преподаём в вузах' },
]

export function TrustBand() {
  return (
    <section className="py-10 d:py-14" style={{ background: 'var(--bg-2)' }}>
      <div className="container-x">
        <Reveal>
          <ul className="grid grid-cols-1 gap-4 d:grid-cols-4 d:gap-5">
            {ITEMS.map((it) => (
              <li
                key={it.text}
                className="flex items-center gap-3 rounded-[12px] border p-[14px_16px]"
                style={{ borderColor: 'var(--line)', background: 'var(--surf)' }}
              >
                <span className="flex-none" style={{ color: 'var(--acc-2)' }} aria-hidden="true">
                  <Icon name={it.icon} size={20} color="currentColor" />
                </span>
                <span className="text-[15px] font-semibold leading-[1.35] text-[color:var(--fg)]">
                  {it.text}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
