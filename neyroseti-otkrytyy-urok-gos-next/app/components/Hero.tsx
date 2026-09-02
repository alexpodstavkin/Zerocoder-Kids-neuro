import CtaLink from './CtaLink';

export default function Hero() {
  return (
    <section className="sec hero-section">
      <div className="hero-inner">
        <div className="hero-cluster">
          <h1 className="h1 hero-h1">
            <span className="hero-h1-accent">Бесплатный открытый урок по&nbsp;нейросетям.</span>
            <span className="hero-h1-line">Ребёнок создаст своего онлайн-помощника по&nbsp;учёбе на&nbsp;базе искусственного интеллекта</span>
          </h1>
          <span className="hero-divider" aria-hidden>
            <span className="hero-divider-line" />
            <span className="hero-divider-mark" />
            <span className="hero-divider-line" />
          </span>
          <p className="hero-sub">
            <span className="hero-sub-line">Для&nbsp;школьников 10–14&nbsp;лет.</span>
          </p>
        </div>

        <div className="hero-cta-row">
          <CtaLink goal="cta_hero" className="btn-primary">
            Записаться на&nbsp;бесплатный открытый урок
            <span aria-hidden style={{ fontWeight: 700 }}>→</span>
          </CtaLink>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          background: transparent;
        }
        .hero-inner {
          position: relative;
          max-width: 1180px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 40px;
        }
        .hero-cluster {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .hero-h1 { max-width: 26ch; }
        .hero-h1-accent { color: #515CB0; display: block; }
        .hero-h1-line { display: block; margin-top: 10px; }
        @media (max-width: 640px) {
          .hero-h1 { max-width: 100%; }
        }
        .hero-divider {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .hero-divider-line {
          display: inline-block;
          width: 40px;
          height: 1px;
          background: #515CB0;
        }
        .hero-divider-mark {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #515CB0;
          box-shadow: 0 0 0 4px rgba(81, 92, 176, 0.16);
        }
        .hero-sub {
          font-size: 1.0625rem;
          font-weight: 500;
          color: #2A3160;
          max-width: 64ch;
        }
        .hero-sub-line { display: block; }
        .hero-cta-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </section>
  );
}
