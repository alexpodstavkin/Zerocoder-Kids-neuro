const questions = [
  'Какая цель нового профиля по искусственному интеллекту в школьной программе с 1 сентября?',
  'Не заменит ли искусственный интеллект необходимость учиться?',
  'Безопасно ли школьнику работать с нейросетями?',
  'Какие профессии будут востребованы через 5–10 лет и как искусственный интеллект к ним готовит?',
  'Когда лучше начинать готовить ребёнка к профессиям будущего?',
  'Как родителю отслеживать прогресс ребёнка после урока?',
];

export default function Questions() {
  const basePath = process.env.NODE_ENV === 'production' ? (process.env.BASEPATH ?? '/Zerocoder-Kids-neuro/gos-ai-summer') : '';
  return (
    <section className="sec questions-section">
      <div className="questions-inner">
        <header className="questions-head">
          <p className="questions-title">
            <span className="questions-title-pre">Всероссийская летняя программа призвана</span>
            <span className="questions-title-emph">обеспечить ребёнку востребованные навыки и&nbsp;перспективное будущее</span>
          </p>
          <p className="questions-sub">
            После урока у&nbsp;ребёнка и&nbsp;родителя будут ответы на&nbsp;следующие вопросы:
          </p>
        </header>

        <div className="questions-grid">
          <ul className="questions-list">
            {questions.map((q, i) => (
              <li key={i} className="question-item">
                <span className="question-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="question-text">{q}</span>
              </li>
            ))}
          </ul>

          <div className="questions-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${basePath}/photos/questions-parents-kids.png`}
              alt="Родители вместе с детьми готовятся к школьной программе по искусственному интеллекту"
              className="questions-photo-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <style>{`
        .questions-section {
          background: #FFFFFF;
        }
        .questions-inner {
          max-width: 1180px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .questions-head {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: center;
          text-align: center;
        }
        .questions-title {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 56ch;
        }
        .questions-title-pre {
          font-size: clamp(1rem, 1.8vw, 1.25rem);
          font-weight: 500;
          color: #1C3F94;
          line-height: 1.3;
          text-transform: none;
        }
        .questions-title-emph {
          font-size: clamp(1.5rem, 2.8vw, 2.2rem);
          font-weight: 800;
          text-transform: uppercase;
          color: #1B1F2A;
          line-height: 1.18;
          letter-spacing: -0.005em;
        }
        .questions-sub {
          font-size: 1.0625rem;
          color: #4A5468;
          font-weight: 500;
          max-width: 56ch;
        }

        .questions-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          align-items: stretch;
        }
        @media (min-width: 900px) {
          .questions-grid { grid-template-columns: 6fr 5fr; gap: 24px; }
        }

        .questions-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: #F4F6FA;
          border: 1px solid #E2E6EE;
          border-radius: 6px;
          padding: 20px;
        }
        @media (min-width: 768px) {
          .questions-list { padding: 28px; gap: 14px; }
        }
        .question-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 14px 16px;
          background: #FFFFFF;
          border: 1px solid #E2E6EE;
          border-radius: 6px;
          transition: border-color 0.2s ease-in-out;
        }
        .question-item:hover { border-color: #1C3F94; }
        .question-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 6px;
          background: #1C3F94;
          color: #FFFFFF;
          font-weight: 700;
          font-size: 0.8125rem;
          flex-shrink: 0;
          letter-spacing: 0.02em;
        }
        .question-text {
          font-size: 0.9375rem;
          color: #1B1F2A;
          font-weight: 500;
          line-height: 1.45;
        }

        .questions-photo {
          background: #EAF0FA;
          border: 1px solid #E2E6EE;
          border-radius: 6px;
          overflow: hidden;
          min-height: 320px;
          display: flex;
        }
        .questions-photo svg {
          width: 100%;
          height: 100%;
          display: block;
        }
        .questions-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>
    </section>
  );
}
