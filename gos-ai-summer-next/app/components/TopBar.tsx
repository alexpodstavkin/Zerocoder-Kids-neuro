export default function TopBar() {
  return (
    <div className="topbar-wrap">
      <header className="topbar-pill">
        <div className="topbar-left">
          <span className="topbar-emblem" aria-label="Флаг Российской Федерации">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="flagClip">
                  <circle cx="28" cy="28" r="24" />
                </clipPath>
              </defs>
              <circle cx="28" cy="28" r="26.5" fill="#FFFFFF" stroke="#1C3F94" strokeWidth="2" />
              <g clipPath="url(#flagClip)">
                <rect x="4" y="4" width="48" height="16" fill="#FFFFFF" />
                <rect x="4" y="20" width="48" height="16" fill="#0039A6" />
                <rect x="4" y="36" width="48" height="16" fill="#D52B1E" />
              </g>
              <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(28,63,148,0.25)" strokeWidth="1" />
            </svg>
          </span>
          <span className="topbar-title">
            Всероссийская летняя программа подготовки детей к&nbsp;школьному курсу «Искусственный интеллект» — 2026
          </span>
        </div>
        <nav className="topbar-nav" aria-label="Разделы">
          <a href="#program">ПРОГРАММА</a>
          <a href="#gifts">ПОДАРКИ</a>
        </nav>
        <span className="topbar-status" aria-label="Статус регистрации">
          <span className="topbar-status-dot" aria-hidden />
          ИДЁТ РЕГИСТРАЦИЯ
        </span>
        <a href="#cta" className="topbar-cta">
          Записаться
        </a>
      </header>

      <style>{`
        .topbar-wrap {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background: transparent;
          padding: 18px 16px 18px;
          width: 100%;
          display: block;
        }
        @media (max-width: 767px) {
          .topbar-wrap { display: none; }
        }
        .topbar-pill {
          max-width: 1180px;
          margin: 0 auto;
          background: #FFFFFF;
          border: 1px solid #E2E6EE;
          border-radius: 999px;
          padding: 14px 18px 14px 22px;
          display: flex;
          align-items: center;
          gap: 20px;
          box-shadow: 0 8px 28px rgba(28, 63, 148, 0.08);
        }
        .topbar-left {
          display: flex;
          align-items: center;
          gap: 18px;
          flex: 1;
          min-width: 0;
        }
        .topbar-emblem { display: inline-flex; flex-shrink: 0; }
        .topbar-title {
          font-size: 16px;
          font-weight: 600;
          color: #1B1F2A;
          line-height: 1.3;
          letter-spacing: 0;
        }
        .topbar-nav {
          display: none;
          align-items: center;
          gap: 28px;
        }
        .topbar-nav a {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: #1B1F2A;
          text-transform: uppercase;
          transition: opacity 0.2s ease-in-out;
        }
        .topbar-nav a:hover { opacity: 0.65; }
        .topbar-status {
          display: none;
          align-items: center;
          gap: 8px;
          padding: 6px 12px 6px 10px;
          background: rgba(214, 46, 46, 0.08);
          border: 1px solid rgba(214, 46, 46, 0.22);
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #B82424;
          white-space: nowrap;
        }
        .topbar-status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #D62E2E;
          box-shadow: 0 0 0 0 rgba(214, 46, 46, 0.6);
          animation: gov-pulse 2.4s cubic-bezier(0.32, 0.72, 0, 1) infinite;
        }
        @keyframes gov-pulse {
          0% { box-shadow: 0 0 0 0 rgba(214, 46, 46, 0.6); }
          70% { box-shadow: 0 0 0 8px rgba(214, 46, 46, 0); }
          100% { box-shadow: 0 0 0 0 rgba(214, 46, 46, 0); }
        }
        @media (min-width: 1100px) {
          .topbar-status { display: inline-flex; }
        }

        .topbar-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 28px;
          background: #D62E2E;
          color: #FFFFFF;
          font-weight: 600;
          font-size: 15px;
          border-radius: 999px;
          flex-shrink: 0;
          transition: background 400ms cubic-bezier(0.32, 0.72, 0, 1), transform 200ms cubic-bezier(0.32, 0.72, 0, 1);
        }
        .topbar-cta:hover { background: #B82424; }
        .topbar-cta:active { transform: scale(0.98); }

        @media (min-width: 1000px) {
          .topbar-nav { display: inline-flex; }
        }
        @media (max-width: 640px) {
          .topbar-pill { padding: 10px 10px 10px 16px; border-radius: 28px; gap: 12px; }
          .topbar-title { font-size: 13px; line-height: 1.25; }
          .topbar-emblem svg { width: 40px; height: 40px; }
          .topbar-cta { padding: 11px 18px; font-size: 13px; }
        }
      `}</style>
    </div>
  );
}
