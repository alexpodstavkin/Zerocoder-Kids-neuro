import Image from 'next/image'

// Префикс пути ассетов под GitHub Pages (пусто в dev). next/image при unoptimized basePath не добавляет.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''

// Подвал Зерокодера — каноничные реквизиты (см. ~/.claude/memory/zerocoder-footer.md).
// Менять не нужно — только проверять актуальность ИНН/ОГРН/ссылок и год.
const LEGAL_LINKS = [
  { label: 'Политика конфиденциальности', href: 'https://zerocoder.ru/privacy' },
  { label: 'Политика безопасности платежей', href: 'https://zerocoder.ru/safety' },
  { label: 'Оферта', href: 'https://zerocoder.ru/terms' },
  {
    label: 'Лицензия на образовательную деятельность',
    href: 'https://islod.obrnadzor.gov.ru/rlic/details/0c9b345a-fc50-43c8-7248-1dc5987f2d33/',
  },
]

export function Footer({ year = 2026 }: { year?: number }) {
  return (
    <footer className="bg-dark py-12 text-[14px] text-white/55">
      <div className="container-x flex flex-wrap justify-between gap-8">
        <div className="max-w-[280px]">
          <div className="mb-3 flex items-center gap-2.5">
            <Image src={`${BASE}/logo-icon.png`} alt="Зерокодер" width={28} height={28} />
            <b className="text-white">Зерокодер</b>
          </div>
          <div>
            <a href="tel:+79393283812" className="hover:text-white">
              +7 939 328-38-12
            </a>
            <br />
            <a href="mailto:care@zerocoder.ru" className="hover:text-white">
              care@zerocoder.ru
            </a>
          </div>
        </div>

        <nav className="flex flex-col gap-2.5">
          {LEGAL_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="max-w-[300px]">
          <b className="text-white">ООО «ЗЕРОКОДЕР»</b>
          <br />
          ИНН 9715401631 · ОГРН 1217700246026
          <br />
          Образовательная лицензия · резидент Сколково
          <br />
          <br />© {year} ООО «ЗЕРОКОДЕР». Все права защищены
          <br />
          <span className="text-white/35">
            Иконки:{' '}
            <a href="https://www.flaticon.com/uicons" className="underline hover:text-white/60">
              Uicons by Flaticon
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
