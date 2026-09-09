import { BP } from '@/lib/basePath';

// Подвал. Данные сверены с ~/.claude/memory/zerocoder-footer.md.
// У референса подвала нет — визуально не спорим: тот же серый фон, мелкий текст,
// без крупных плашек. Номер лицензии выводится текстом — это доверие холодного трафика.
const legalLinks = [
  { label: 'Политика конфиденциальности', href: 'https://zerocoder.ru/privacy' },
  { label: 'Политика безопасности платежей', href: 'https://zerocoder.ru/safety' },
  { label: 'Оферта', href: 'https://zerocoder.ru/terms' },
  {
    label: 'Лицензия на образовательную деятельность № Л035-01298-77/00625369',
    href: 'https://islod.obrnadzor.gov.ru/rlic/details/0c9b345a-fc50-43c8-7248-1dc5987f2d33/',
  },
];

export default function Footer() {
  return (
    <footer className="wrap pb-12 pt-4 md:pb-14">
      <div className="border-t pt-8" style={{ borderColor: 'var(--bord)' }}>
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-12">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${BP}/logo-zerocoder.png`}
              alt="Зерокодер"
              width={112}
              height={28}
              className="h-7 w-auto"
            />

            <address className="mt-4 text-[13px] not-italic leading-[1.7] text-sub">
              ООО&nbsp;«ЗЕРОКОДЕР» · ИНН 9715401631 · ОГРН 1217700246026
              <br />
              <a href="tel:+79393283812" className="hover:text-ink">
                +7 939 328-38-12
              </a>{' '}
              ·{' '}
              <a href="mailto:care@zerocoder.ru" className="hover:text-ink">
                care@zerocoder.ru
              </a>
              <br />© 2026 ООО&nbsp;«ЗЕРОКОДЕР». Все права защищены.
            </address>
          </div>

          <nav aria-label="Юридические документы">
            <ul className="flex flex-col gap-2 text-[13px] leading-[1.5] text-sub md:text-right">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
