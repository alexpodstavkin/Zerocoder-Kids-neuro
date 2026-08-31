const legalLinks = [
  { label: 'Политика конфиденциальности', href: 'https://zerocoder.ru/privacy' },
  { label: 'Политика безопасности платежей', href: 'https://zerocoder.ru/safety' },
  { label: 'Оферта', href: 'https://zerocoder.ru/terms' },
];

// Тонкий подвал: одна строка — копирайт + три юридических документа.
// Сверху — вторая (и последняя) триколорная лента.
export default function Footer() {
  return (
    <footer className="bg-dark text-[13px] text-white/45">
      <div className="tricolor-rule" aria-hidden />
      <div className="container-x flex flex-col items-center gap-3 py-6 text-center md:flex-row md:justify-between md:gap-6 md:text-left">
        <span>© 2026 ООО&nbsp;«Зерокодер»</span>

        <nav aria-label="Юридические документы">
          <ul className="flex list-none flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
