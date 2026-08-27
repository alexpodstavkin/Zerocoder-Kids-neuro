import { asset } from '@/lib/basePath'

// Подвал — каноничные реквизиты Зерокодера. Никаких тематических приёмов:
// ни сетки, ни скобок, ни свечения — подвал читается как юридически строгий.
// Sticky-бар у подвала уже скрыт (IntersectionObserver гасит его на #zapis),
// поэтому запаса под него не нужно — хватает обычного нижнего паддинга.
const LEGAL = [
  { label: 'Политика конфиденциальности', href: 'https://zerocoder.ru/privacy' },
  { label: 'Политика безопасности платежей', href: 'https://zerocoder.ru/safety' },
  { label: 'Оферта', href: 'https://zerocoder.ru/terms' },
  {
    label: 'Лицензия на образовательную деятельность',
    href: 'https://islod.obrnadzor.gov.ru/rlic/details/0c9b345a-fc50-43c8-7248-1dc5987f2d33/',
  },
]

export function FooterDark() {
  return (
    <footer
      className="pb-16 pt-12 d:pb-12 d:pt-16"
      style={{ background: 'var(--footer)', borderTop: '1px solid var(--line)' }}
    >
      <div className="container-x">
        <div className="grid grid-cols-1 gap-7 d:grid-cols-3 d:gap-10">
          {/* Колонка 1 — бренд и контакты */}
          <div>
            <div className="flex items-center gap-2.5">
              <img src={asset('/logo-icon.png')} alt="Зерокодер" width={28} height={28} className="h-7 w-7" />
              <span className="text-[18px] font-extrabold tracking-[-0.02em] text-white">
                Зерокодер
              </span>
            </div>
            <address className="mt-4 not-italic">
              <a
                href="tel:+79393283812"
                className="flex h-11 items-center text-[15px] font-semibold text-[color:var(--fg-2)] transition-colors hover:text-[color:var(--fg)]"
              >
                +7 939 328-38-12
              </a>
              <a
                href="mailto:care@zerocoder.ru"
                className="flex h-11 items-center text-[15px] font-semibold text-[color:var(--fg-2)] transition-colors hover:text-[color:var(--fg)]"
              >
                care@zerocoder.ru
              </a>
            </address>
          </div>

          {/* Колонка 2 — правовые ссылки */}
          <nav aria-label="Правовые документы">
            <ul>
              {LEGAL.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[44px] items-center py-1 text-[14px] font-medium leading-[1.4] text-[color:var(--fg-3)] transition-colors hover:text-[color:var(--fg)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Колонка 3 — реквизиты */}
          <div className="text-[14px] font-medium leading-[1.6] text-[color:var(--fg-3)]">
            <p>ООО «ЗЕРОКОДЕР»</p>
            <p>ИНН 9715401631 · ОГРН 1217700246026</p>
            <p>Образовательная лицензия · Резидент Сколково</p>
          </div>
        </div>

        <div
          className="mt-10 flex flex-col gap-2 border-t pt-6 text-[12px] font-medium text-[color:var(--fg-3)] d:flex-row d:items-center d:justify-between"
          style={{ borderColor: 'var(--line)' }}
        >
          <p>© 2026 ООО «ЗЕРОКОДЕР». Все права защищены.</p>
          <p>
            Иконки —{' '}
            <a
              href="https://www.flaticon.com/uicons"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-[color:var(--fg)]"
            >
              Uicons by Flaticon
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
