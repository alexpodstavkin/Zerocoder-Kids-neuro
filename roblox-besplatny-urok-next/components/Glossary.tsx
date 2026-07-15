const TERMS = [
  {
    icon: 'display-code',
    term: 'Roblox Studio',
    def: 'бесплатная программа, в которой создают игры для Roblox. Не «играть», а «строить».',
  },
  {
    icon: 'running',
    term: 'Платформер',
    def: 'тип игры, где герой прыгает по платформам и препятствиям (как Марио). Именно такой уровень ребёнок и соберёт.',
  },
  {
    icon: 'brackets-curly',
    term: 'Lua',
    def: 'язык программирования, на котором пишут игры в Roblox. Простой на старте — с него удобно начинать.',
  },
]

// Блок 10: глоссарий — 3 термина, которые встретятся на уроке.
export function Glossary() {
  return (
    <section className="bg-paper py-14 md:py-24">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-[760px] text-center">
          <h2 className="h2 normal-case">Пара слов, которые встретятся на уроке</h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {TERMS.map((t) => (
            <div
              key={t.term}
              className="rounded-lg border bg-white p-7"
              style={{ borderColor: 'var(--bord)' }}
            >
              <span className="ico-chip mb-4">
                <i className={`fi fi-rr-${t.icon}`} aria-hidden />
              </span>
              <h3 className="h3 mb-2.5">{t.term}</h3>
              <p className="text-[15px] leading-[1.6] text-sub">{t.def}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
