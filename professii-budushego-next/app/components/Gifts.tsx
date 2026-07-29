const gifts = [
  {
    icon: 'fi fi-rr-chart-line-up',
    eyebrow: 'Авторский материал «Зерокодер»',
    title: 'Как изменится обучение детей в ближайшие 5 лет',
    desc:
      'Аналитика на основе свежего всероссийского опроса ВЦИОМ: как родители смотрят на трансформацию школьного образования и профиль «Искусственный интеллект».',
  },
  {
    icon: 'fi fi-rr-briefcase',
    eyebrow: 'Авторский материал «Зерокодер»',
    title: 'Нейросети и профессии будущего',
    desc:
      'Обзор перспективных профессиональных направлений и востребованных навыков эпохи искусственного интеллекта, адаптированный для школьников и их родителей.',
  },
  {
    icon: 'fi fi-rr-clipboard-list-check',
    eyebrow: 'Методические материалы',
    title: 'Диагностика профессиональных склонностей по методике МГУ',
    desc:
      'Структурированный материал для самостоятельной оценки родителем и ребёнком предрасположенности к профессиям, которые будут востребованы через 5–7 лет.',
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
            <article key={i} className="gift-card">
              <span className="gift-icon" aria-hidden><i className={g.icon} /></span>
              <span className="gift-eyebrow">{g.eyebrow}</span>
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
          gap: 40px;
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
        @media (min-width: 768px) {
          .gifts-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
        }

        /* Gift cards — sticker design (matches lesson cards) */
        .gift-card {
          position: relative;
          background: #FFFFFF;
          border: 1px solid #E2E6EE;
          border-radius: 12px;
          padding: 26px 22px 24px;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 10px;
          height: 100%;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .gift-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 30px rgba(28, 63, 148, 0.12);
          border-color: #C6D2E6;
        }
        .gift-icon {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: #EAF0FA;
          color: #1C3F94;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
        }
        .gift-icon i { line-height: 1; }
        .gift-eyebrow {
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #7A8395;
          line-height: 1.3;
        }
        .gift-title {
          margin-top: 4px;
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
