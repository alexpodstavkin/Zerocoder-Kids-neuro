export default function Hero() {
  return (
    <section className="sec hero-section">
      <div className="hero-inner">
        <div className="hero-cluster">
          <h1 className="h1 hero-h1">
            <span className="hero-h1-accent">Всероссийская программа подготовки школьников</span>
            {' '}к&nbsp;профессиям будущего.
            <span className="hero-h1-block">Блок: искусственный интеллект</span>
          </h1>
          <span className="hero-divider" aria-hidden>
            <span className="hero-divider-line" />
            <span className="hero-divider-mark" />
            <span className="hero-divider-line" />
          </span>
          <p className="hero-sub">Программа рассчитана на&nbsp;школьников от&nbsp;10 до&nbsp;14&nbsp;лет. Старт: 1&nbsp;октября</p>
        </div>

        <div className="hero-cta-row">
          <a href="#cta" className="btn-primary">
            Подать заявку
            <span aria-hidden style={{ fontWeight: 700 }}>→</span>
          </a>
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
        .hero-h1 { max-width: 22ch; text-wrap: balance; }
        .hero-h1-accent { color: #D62E2E; }
        /* Название блока — второй смысловой строкой, кеглем помельче,
           чтобы длинный заголовок не занимал пол-экрана. */
        .hero-h1-block {
          display: block;
          margin-top: 0.5em;
          font-size: 0.6em;
          line-height: 1.3;
        }
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
          background: #D62E2E;
        }
        .hero-divider-mark {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #D62E2E;
          box-shadow: 0 0 0 4px rgba(214, 46, 46, 0.12);
        }
        .hero-sub {
          font-size: 1.0625rem;
          font-weight: 500;
          color: #1C3F94;
          max-width: 46ch;
        }
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
