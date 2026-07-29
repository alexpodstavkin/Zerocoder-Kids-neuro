export default function InvitationBanner() {
  return (
    <section className="sec invitation-section">
      <div className="invitation-inner">
        <h2 className="invitation-title">
          ПРИХОДИТЕ НА&nbsp;БЕСПЛАТНЫЙ УРОК!
        </h2>
        <p className="invitation-text">
          Чтобы подготовить своего ребёнка к&nbsp;новому направлению в&nbsp;школьной программе
          и&nbsp;дать ему необходимые навыки для учёбы и&nbsp;жизни.
        </p>
        <span className="invitation-badge">Только для 5–8&nbsp;классов</span>
        <a href="#cta" className="btn-primary invitation-cta">
          Записаться на урок
          <span aria-hidden style={{ fontWeight: 700 }}>→</span>
        </a>
      </div>

      <style>{`
        .invitation-section {
          background: #FFFFFF;
        }
        .invitation-inner {
          max-width: 1180px;
          margin: 0 auto;
          background: #F4F6FA;
          border: 1px solid #E2E6EE;
          border-left: 4px solid #D62E2E;
          border-radius: 6px;
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
        }
        .invitation-title {
          color: #D62E2E;
          font-weight: 800;
          font-size: clamp(1.4rem, 3.4vw, 2.1rem);
          line-height: 1.15;
          letter-spacing: -0.005em;
          max-width: 22ch;
        }
        .invitation-text {
          color: #1B1F2A;
          font-weight: 500;
          font-size: 1.0625rem;
          line-height: 1.55;
          max-width: 56ch;
        }
        .invitation-badge {
          display: inline-flex;
          align-items: center;
          padding: 6px 14px;
          background: #FFFFFF;
          border: 1px solid #1C3F94;
          color: #1C3F94;
          border-radius: 999px;
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .invitation-cta {
          margin-top: 8px;
        }
      `}</style>
    </section>
  );
}
