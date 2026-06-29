const navLinks = [
  { label: 'Преподаватели', href: 'https://zerocoder.ru/teachers' },
  { label: 'Новости и события', href: 'https://zerocoder.ru/news' },
  { label: 'Корпоративное обучение', href: 'https://zerocoder.ru/corporate' },
  { label: 'Партнёрство', href: 'https://zerocoder.ru/partnership' },
];

const legalLinks = [
  { label: 'Политика конфиденциальности', href: 'https://zerocoder.ru/privacy' },
  { label: 'Политика безопасности платежей', href: 'https://zerocoder.ru/safety' },
  { label: 'Оферта', href: 'https://zerocoder.ru/terms' },
  {
    label: 'Лицензия на образовательную деятельность',
    href: 'https://islod.obrnadzor.gov.ru/rlic/details/0c9b345a-fc50-43c8-7248-1dc5987f2d33/',
  },
];

const socials = [
  {
    label: 'Telegram',
    href: 'https://t.me/zerocoder',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M21.5 4.5 2.7 11.6c-1.3.5-1.3 1.2-.2 1.6l4.8 1.5 1.9 5.7c.2.6.5.7 1 .7.4 0 .6-.2.9-.5l2.7-2.6 5.6 4.1c1 .6 1.7.3 2-1l3.7-17.4c.3-1.6-.7-2.3-2-1.7l-.6.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/79393283812',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.6 1.4 5.1L2 22l5-1.3A10 10 0 0 0 22 12c0-5.5-4.5-10-10-10Zm5.6 14.2c-.2.6-1.2 1.2-1.7 1.3-.5.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.5-2.7-1.2-4.5-3.9-4.6-4.1-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-1.9 1-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2c.1.2.1.4 0 .6-.1.2-.2.3-.3.5l-.5.5c-.2.2-.3.3-.1.6.2.3.8 1.4 1.7 2.3 1.2 1.1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.3.6-.2.3.1 1.8.8 2.1.9.3.1.5.2.6.3.1.2.1.7-.1 1.4Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@zerocoder',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 0 0 .5 6.5C.1 8.4.1 12 .1 12s0 3.6.4 5.5A3 3 0 0 0 2.6 19.6C4.5 20 12 20 12 20s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1c.4-1.9.4-5.5.4-5.5s0-3.6-.4-5.5ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: 'Дзен',
    href: 'https://dzen.ru/zerocoder',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 2c0 5.5-4.5 10-10 10 5.5 0 10 4.5 10 10 0-5.5 4.5-10 10-10-5.5 0-10-4.5-10-10Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  const basePath = process.env.NODE_ENV === 'production' ? (process.env.BASEPATH ?? '/Zerocoder-Kids-neuro/gos-ai-summer') : '';
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Col 1: Brand + address */}
          <div className="footer-brand">
            <a href="#top" className="footer-brand-link" aria-label="Зерокодер — на главную">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${basePath}/partners/zerocoder.png`}
                alt="Зерокодер"
                width={44}
                height={44}
                className="footer-brand-logo"
              />
              <span className="footer-brand-text">
                <span className="footer-brand-name">Зерокодер</span>
                <span className="footer-brand-sub">Детское направление</span>
              </span>
            </a>
            <p className="footer-address">
              г.&nbsp;Москва, ул.&nbsp;Большая Новодмитровская&nbsp;23,
              <br />
              этаж&nbsp;2, каб.&nbsp;46
            </p>
          </div>

          {/* Col 2: Nav */}
          <nav aria-label="Основная навигация" className="footer-nav">
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3: Legal */}
          <nav aria-label="Юридические документы" className="footer-nav">
            <ul>
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 4: Contacts + socials */}
          <div className="footer-contacts">
            <div className="footer-contacts-primary">
              <a href="mailto:care@zerocoder.ru">care@zerocoder.ru</a>
              <a href="tel:+79393283812">+7&nbsp;(939) 328-38-12</a>
            </div>
            <ul className="footer-socials" aria-label="Социальные сети">
              {socials.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 ООО&nbsp;«Зерокодер». Все права защищены.</span>
          <span className="footer-bottom-legal">
            <span>ИНН&nbsp;9715401631</span>
            <span>ОГРН&nbsp;1217700246026</span>
            <span>Лицензия&nbsp;№&nbsp;Л035-01298-77/00625369</span>
          </span>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: #F4F6FA;
          border-top: 1px solid #E2E6EE;
          padding: 56px 16px 40px;
        }
        @media (min-width: 768px) {
          .site-footer { padding: 72px 24px 48px; }
        }
        .footer-inner {
          max-width: 1180px;
          margin: 0 auto;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        @media (min-width: 900px) {
          .footer-grid { grid-template-columns: 1.1fr 1fr 1.2fr 1fr; gap: 36px; }
        }

        /* Col 1: Brand */
        .footer-brand-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: inherit;
          text-decoration: none;
        }
        .footer-brand-logo {
          border-radius: 12px;
          display: block;
        }
        .footer-brand-text { display: flex; flex-direction: column; line-height: 1.15; }
        .footer-brand-name {
          font-weight: 800;
          font-size: 1.125rem;
          color: #1B1F2A;
        }
        .footer-brand-sub {
          font-size: 0.6875rem;
          color: #7A8395;
          margin-top: 2px;
        }
        .footer-address {
          margin-top: 20px;
          font-size: 0.875rem;
          color: #4A5468;
          line-height: 1.55;
        }

        /* Col 2, 3: Nav lists */
        .footer-nav ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-nav a {
          font-size: 0.875rem;
          color: #1B1F2A;
          text-decoration: none;
          transition: color 240ms cubic-bezier(0.32, 0.72, 0, 1);
        }
        .footer-nav a:hover { color: #1C3F94; }

        /* Col 4: Contacts */
        .footer-contacts {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .footer-contacts-primary {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .footer-contacts-primary a {
          font-size: 1rem;
          font-weight: 800;
          color: #1B1F2A;
          text-decoration: none;
          letter-spacing: -0.005em;
          transition: color 240ms cubic-bezier(0.32, 0.72, 0, 1);
        }
        .footer-contacts-primary a:hover { color: #1C3F94; }

        .footer-socials {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .footer-socials a {
          width: 40px;
          height: 40px;
          border-radius: 6px;
          background: #FFFFFF;
          border: 1px solid #E2E6EE;
          color: #4A5468;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: color 240ms cubic-bezier(0.32, 0.72, 0, 1),
                      border-color 240ms cubic-bezier(0.32, 0.72, 0, 1);
        }
        .footer-socials a:hover { color: #1C3F94; border-color: #1C3F94; }

        /* Bottom strip */
        .footer-bottom {
          margin-top: 40px;
          padding-top: 24px;
          border-top: 1px solid #E2E6EE;
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 0.75rem;
          color: #7A8395;
        }
        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
          }
        }
        .footer-bottom-legal {
          display: flex;
          flex-wrap: wrap;
          gap: 4px 20px;
        }
      `}</style>
    </footer>
  );
}
