import CtaLink from './CtaLink';

export default function TopBar() {
  return (
    <div className="topbar-wrap">
      <header className="topbar-pill">
        <div className="topbar-left">
          <span className="topbar-mark" aria-hidden>
            <svg viewBox="0 0 32 32" className="topbar-mark-svg">
              <defs>
                <clipPath id="topbar-mark-clip">
                  <circle cx="16" cy="16" r="14" />
                </clipPath>
              </defs>
              <circle cx="16" cy="16" r="15" fill="#FFFFFF" stroke="#2A3160" strokeWidth="1.4" />
              <g clipPath="url(#topbar-mark-clip)">
                <rect x="2" y="2" width="28" height="9.33" fill="#FFFFFF" />
                <rect x="2" y="11.33" width="28" height="9.33" fill="#0039A6" />
                <rect x="2" y="20.67" width="28" height="9.33" fill="#D52B1E" />
              </g>
              <circle cx="16" cy="16" r="14" fill="none" stroke="rgba(42, 49, 96, 0.35)" strokeWidth="0.8" />
            </svg>
          </span>
          <span className="topbar-title">
            <span className="topbar-title-line">Открытый урок по&nbsp;нейросетям</span>
            <span className="topbar-title-line">для&nbsp;школьников <span style={{ whiteSpace: 'nowrap' }}>10–14 лет</span></span>
          </span>
        </div>
        <nav className="topbar-nav" aria-label="Разделы">
          <a href="#program">ПРОГРАММА</a>
        </nav>
        <span className="topbar-status" aria-label="Статус записи">
          <span className="topbar-status-dot" aria-hidden />
          ЗАПИСЬ ОТКРЫТА
        </span>
        <CtaLink goal="cta_topbar" className="topbar-cta">
          Записаться бесплатно
        </CtaLink>
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
          min-height: 86px;
          display: flex;
          align-items: center;
          gap: 20px;
          box-shadow: 0 8px 28px rgba(42, 49, 96, 0.10);
        }
        .topbar-left {
          display: flex;
          align-items: center;
          gap: 14px;
          flex: 1;
          min-width: 0;
        }
        .topbar-mark {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .topbar-mark-svg {
          width: 40px;
          height: 40px;
          display: block;
        }
        .topbar-title {
          display: flex;
          flex-direction: column;
          font-size: 16px;
          font-weight: 600;
          color: #1B1F2A;
          line-height: 1.3;
          letter-spacing: 0;
        }
        .topbar-title-line { display: block; }
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
          background: rgba(81, 92, 176, 0.08);
          border: 1px solid rgba(81, 92, 176, 0.26);
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #414A93;
          white-space: nowrap;
        }
        .topbar-status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #515CB0;
          box-shadow: 0 0 0 0 rgba(81, 92, 176, 0.6);
          animation: gov-pulse 2.4s cubic-bezier(0.32, 0.72, 0, 1) infinite;
        }
        @keyframes gov-pulse {
          0% { box-shadow: 0 0 0 0 rgba(81, 92, 176, 0.6); }
          70% { box-shadow: 0 0 0 8px rgba(81, 92, 176, 0); }
          100% { box-shadow: 0 0 0 0 rgba(81, 92, 176, 0); }
        }
        @media (min-width: 1100px) {
          .topbar-status { display: inline-flex; }
        }

        .topbar-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 28px;
          background: #515CB0;
          color: #FFFFFF;
          font-weight: 600;
          font-size: 15px;
          border-radius: 999px;
          flex-shrink: 0;
          transition: background 400ms cubic-bezier(0.32, 0.72, 0, 1), transform 200ms cubic-bezier(0.32, 0.72, 0, 1);
        }
        .topbar-cta:hover { background: #414A93; }
        .topbar-cta:active { transform: scale(0.98); }

        @media (min-width: 1000px) {
          .topbar-nav { display: inline-flex; }
        }
      `}</style>
    </div>
  );
}
