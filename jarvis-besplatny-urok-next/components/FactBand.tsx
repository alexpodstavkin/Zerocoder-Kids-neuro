import { Reveal } from './Reveal'

// Полоса фактов: три цифры → вывод → атрибуция источников.
// Цифры набраны Manrope (не mono): лимит mono-подписей на странице уже выбран.
// Цифры белые, не красные: красный на странице закреплён за действием (CTA),
// три красных пятна в одной полосе увели бы взгляд от единственной точки входа.
const FACTS = [
  { num: '71 %', note: 'школьников 12–17 лет пользуются нейросетями' },
  { num: '53 %', note: 'из тех, кто использует ИИ в учёбе, полностью отдают ему домашнее задание' },
  { num: '×2,7', note: 'во столько раз за год выросло число вакансий, где нужно умение работать с нейросетями' },
]

export function FactBand() {
  return (
    <section className="py-10 d:py-16" style={{ background: 'var(--bg)' }}>
      <div className="container-x">
        <Reveal>
          <div
            className="grid grid-cols-1 gap-6 rounded-[20px] border p-5 d:grid-cols-3 d:gap-0 d:p-7"
            style={{ borderColor: 'var(--line)', background: 'var(--surf)' }}
          >
            {FACTS.map((f, i) => (
              <div
                key={f.num}
                className={i === 0 ? 'd:pr-8' : 'd:border-l d:pl-8 d:pr-8'}
                style={i === 0 ? undefined : { borderColor: 'var(--line)' }}
              >
                <span
                  className="block h-px w-6"
                  style={{ background: 'var(--acc-2-dim)' }}
                  aria-hidden="true"
                />
                <p className="mt-4 text-[34px] font-extrabold leading-none tracking-[-0.03em] text-[color:var(--fg)] d:text-[40px]">
                  {f.num}
                </p>
                <p className="mt-3 text-[15px] font-normal leading-[1.55] text-[color:var(--fg-2)]">
                  {f.note}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-[760px] text-center text-[18px] font-semibold leading-[1.45] text-[color:var(--fg)] d:text-[20px]">
            Половина школьников уже отдаёт домашку нейросети. Покажем вашему ребёнку другой способ.
          </p>
          <p className="mx-auto mt-3 max-w-[760px] text-center text-[13px] font-medium leading-[1.5] text-[color:var(--fg-3)]">
            71 % и 53 % — исследование «Лаборатории Касперского», май 2026. ×2,7 — данные hh.ru за I
            квартал 2026 года.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
