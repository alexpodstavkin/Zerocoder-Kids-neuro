const questions = [
  'Ребёнок уже пользуется нейросетью — он с ней учится или списывает?',
  'Как понять, что нейросеть ответила неверно, и что с этим делать?',
  'Безопасно ли школьнику работать с нейросетями и что стоит запретить?',
  'Что именно вводят в школе в этом учебном году и потянет ли это мой ребёнок?',
  'Есть ли у ребёнка склонность к этому направлению — или это не его?',
  'Что делать дальше, если тема зашла, и что делать, если нет?',
];

export default function Questions() {
  const basePath = process.env.NODE_ENV === 'production' ? (process.env.BASEPATH ?? '/neyroseti-otkrytyy-urok') : '';
  return (
    <section className="sec questions-section">
      <div className="questions-inner">
        <header className="questions-head">
          <p className="questions-title">
            <span className="questions-title-pre">Бесплатный открытый урок нужен для&nbsp;того, чтобы</span>
            <span className="questions-title-emph">вы&nbsp;окончательно разобрались, помогает нейросеть ребёнку или мешает в&nbsp;учёбе, ведь более 71&nbsp;% детей школьного возраста уже используют ИИ в&nbsp;жизни</span>
          </p>
          <p className="questions-sub">
            После открытого урока у&nbsp;вас и&nbsp;ребёнка будут ответы на&nbsp;вопросы:
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
              alt="Родитель и ребёнок вместе разбираются, как пользоваться нейросетями"
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
          max-width: 68ch;
        }
        .questions-title-pre {
          font-size: clamp(1rem, 1.8vw, 1.25rem);
          font-weight: 500;
          color: #2A3160;
          line-height: 1.3;
          text-transform: none;
        }
        .questions-title-emph {
          font-size: clamp(1.125rem, 1.9vw, 1.5rem);
          font-weight: 800;
          text-transform: uppercase;
          color: #1B1F2A;
          line-height: 1.25;
          letter-spacing: 0;
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
        .question-item:hover { border-color: #515CB0; }
        .question-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 6px;
          background: #2A3160;
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
          background: #EDEEF7;
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
