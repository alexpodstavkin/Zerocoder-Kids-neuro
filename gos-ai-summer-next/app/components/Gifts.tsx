const gifts = [
  {
    eyebrow: 'Авторский материал «Зерокодер»',
    title: 'Как изменится обучение детей в ближайшие 5 лет. Материал построен на свежем опросе ВЦИОМ',
    desc:
      'Аналитика по результатам всероссийского исследования общественного мнения родителей о трансформации школьного образования в связи с внедрением профиля «Искусственный интеллект».',
  },
  {
    eyebrow: 'Авторский материал «Зерокодер»',
    title: 'Нейросети и профессии будущего',
    desc:
      'Обзор перспективных профессиональных направлений и востребованных навыков эпохи искусственного интеллекта, адаптированный для школьников 5–8 классов и их родителей.',
  },
  {
    eyebrow: 'Методические материалы',
    title:
      'Материал по методике МГУ имени М. В. Ломоносова для выявления профессиональных склонностей ребёнка',
    desc:
      'Структурированный диагностический материал для самостоятельной оценки родителем и ребёнком предрасположенности к профессиям, которые будут востребованы через 5–7 лет.',
  },
];

export default function Gifts() {
  return (
    <section id="gifts" className="sec" style={{ background: '#FFFFFF' }}>
      <div className="gifts-inner">
        <div className="gifts-head">
          <div className="gifts-head-plate">
            <h2 className="h2 gifts-h2">Каждый зарегистрированный участник получает три информационных материала от&nbsp;партнёра программы</h2>
          </div>
        </div>

        <div className="gifts-grid">
          {gifts.map((g, i) => (
            <article key={i} className={`gift-card${i === 0 ? ' gift-card--featured' : ''}`}>
              <div className="gift-badge">
                <span className="gift-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="gift-eyebrow">{g.eyebrow}</span>
                <span className="gift-icon" aria-hidden>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                    <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                    <path d="M8.5 13.5h7M8.5 16.5h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
              <h3 className="gift-title">{g.title}</h3>
              <p className="gift-desc">{g.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .gifts-inner {
          max-width: 1180px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          text-align: center;
        }
        .gifts-head { display: flex; flex-direction: column; gap: 10px; align-items: stretch; width: 100%; }
        .gifts-head-plate {
          background: #1C3F94;
          border: 1px solid #15306F;
          border-radius: 6px;
          padding: 36px 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        @media (min-width: 768px) {
          .gifts-head-plate { padding: 48px 56px; }
        }
        .gifts-eyebrow {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #D62E2E;
        }
        .gifts-h2 {
          color: #FFFFFF;
          max-width: 38ch;
        }

        .gifts-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          width: 100%;
        }
        @media (min-width: 900px) {
          /* Featured top card + 2 supporting below */
          .gifts-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-areas:
              "f f"
              "a b";
            gap: 20px;
          }
          .gift-card--featured { grid-area: f; }
        }
        .gift-card {
          background: #FFFFFF;
          border: 1px solid #E2E6EE;
          border-radius: 6px;
          padding: 24px;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 12px;
          height: 100%;
          transition: border-color 0.2s ease-in-out;
        }
        .gift-card:hover { border-color: #1C3F94; }

        /* Featured first card — larger title, more padding, accent border */
        .gift-card--featured {
          padding: 32px 36px;
          border-color: #C6D2E6;
          background: linear-gradient(180deg, #FFFFFF 0%, #F7F9FD 100%);
          border-left: 4px solid #D62E2E;
        }
        .gift-card--featured .gift-title {
          font-size: 1.375rem;
          line-height: 1.25;
        }
        .gift-card--featured .gift-desc {
          font-size: 1rem;
          max-width: 100%;
        }

        .gift-badge {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .gift-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background: #1C3F94;
          color: #FFFFFF;
          font-weight: 700;
          font-size: 0.8125rem;
        }
        .gift-eyebrow {
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #7A8395;
        }
        .gift-icon {
          margin-left: auto;
          display: inline-flex;
          color: #1C3F94;
        }
        .gift-card--featured .gift-icon { color: #D62E2E; }
        .gift-title {
          font-size: 1.0625rem;
          font-weight: 700;
          color: #1B1F2A;
          line-height: 1.3;
        }
        .gift-desc {
          font-size: 0.9375rem;
          color: #4A5468;
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
}
