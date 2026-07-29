const modules = [
  {
    n: '01',
    verb: 'УЗНАЕТ',
    icon: 'fi fi-rr-brain-circuit',
    title: 'Что такое нейросети и как они устроены',
    text:
      'Принципы работы нейросетей на знакомых ребёнку примерах. Навык написания промптов и проверки ответов искусственного интеллекта.',
  },
  {
    n: '02',
    verb: 'СДЕЛАЕТ',
    icon: 'fi fi-rr-tools',
    title: 'Свой личный ИИ-проект',
    text:
      'Под руководством опытного наставника соберёт работающий проект. Научится самостоятельно находить неточности в работе нейросетей и исправлять их.',
  },
  {
    n: '03',
    verb: 'ПОЙМЁТ',
    icon: 'fi fi-rr-bulb',
    title: 'Как применять ИИ в школе и в жизни',
    text:
      'От школьной домашки до собственных проектов: ребёнок видит, где нейросеть становится реальным помощником, а где даёт поверхностный совет.',
  },
];

export default function Program() {
  const basePath = process.env.NODE_ENV === 'production' ? (process.env.BASEPATH ?? '/professii-budushego') : '';
  return (
    <section id="program" className="sec" style={{ background: '#FFFFFF' }}>
      <div className="program-inner">
        {/* Mission statement — heading + 3 stat points */}
        <div className="mission-block">
          <h2 className="h2 mission-heading">
            Всероссийская программа подходит детям 2–8 классов и&nbsp;призвана обеспечить ребёнку востребованные навыки и&nbsp;перспективное будущее
          </h2>
          <div className="mission-grid">
            <div className="mission-stat">
              <span className="mission-stat-num">85%</span>
              <p className="mission-stat-text"><b>профессий будущего</b> к&nbsp;2030 году будут связаны с&nbsp;технологиями, которых пока нет в&nbsp;школьной программе. Ребёнок осваивает их&nbsp;уже сейчас.</p>
            </div>
            <div className="mission-stat">
              <span className="mission-stat-num">×4</span>
              <p className="mission-stat-text">во&nbsp;столько вырастет российский рынок искусственного интеллекта. Специалисты с&nbsp;ИИ-навыками уже зарабатывают на&nbsp;<b>40% больше</b>.</p>
            </div>
            <div className="mission-stat">
              <span className="mission-stat-num">№1</span>
              <p className="mission-stat-text">нейросети — навык будущего по&nbsp;версии ВЭФ. Нейросети тренируют его: ребёнок ставит задачу, проверяет ответ ИИ и&nbsp;рассуждает структурно — это <b>повышает успеваемость</b> в&nbsp;школе.</p>
            </div>
          </div>
        </div>

        {/* Program section: red entry-plate + 3 modules as one cohesive block */}
        <div className="program-section">
          {/* Entry plate — frames the free lesson as the gateway */}
          <div className="entry-plate">
            <p className="entry-text">
              Чтобы стать участником, необходимо записаться на&nbsp;бесплатный вводный урок.
            </p>
            <p className="entry-sub">
              Он&nbsp;проходит онлайн, индивидуально с&nbsp;педагогом. По&nbsp;итогам урока подбирается программа обучения, которая лучше всего подойдёт вашему ребёнку.
            </p>
          </div>

          {/* Program — H2, cards, CTA row equidistant inside one block */}
          <div className="program-stack">
            <h2 className="h2 program-h2">Программа бесплатного урока</h2>

            <div className="program-grid">
              {modules.map((m) => (
                <article key={m.n} className="lesson-card">
                  <div className="lesson-card-head">
                    <span className="lesson-icon" aria-hidden><i className={m.icon} /></span>
                    <div className="lesson-tags">
                      <span className="lesson-step">Шаг {m.n}</span>
                      <span className="lesson-verb">{m.verb}</span>
                    </div>
                  </div>
                  <h3 className="lesson-title">{m.title}</h3>
                  <p className="lesson-text">{m.text}</p>
                </article>
              ))}
            </div>

            <div className="program-cta-row">
              <a href="#cta" className="program-cta-btn">
                Записаться на урок
                <span aria-hidden style={{ fontWeight: 700 }}>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .program-inner {
          max-width: 1180px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 64px;
        }

        /* Cohesive group: red plate + program cards stick together */
        .program-section {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* Mission statement — heading + stat points */
        .mission-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 36px;
        }
        .mission-heading {
          text-align: center;
          max-width: 34ch;
          color: #1B1F2A;
        }
        .mission-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          width: 100%;
        }
        @media (min-width: 768px) {
          .mission-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
        }
        .mission-stat {
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: #F4F6FA;
          border: 1px solid #E2E6EE;
          border-top: 3px solid #D62E2E;
          border-radius: 6px;
          padding: 28px 24px;
          text-align: left;
        }
        .mission-stat-num {
          font-size: clamp(2.25rem, 5vw, 3rem);
          font-weight: 800;
          color: #D62E2E;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .mission-stat-text {
          font-size: 0.9375rem;
          color: #4A5468;
          line-height: 1.5;
        }
        .mission-stat-text b { color: #1B1F2A; font-weight: 700; }

        /* Lesson cards — sticker design */
        .lesson-card {
          position: relative;
          background: #FFFFFF;
          border: 1px solid #E2E6EE;
          border-radius: 12px;
          padding: 26px 22px 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          text-align: left;
          height: 100%;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .lesson-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 30px rgba(28, 63, 148, 0.12);
          border-color: #C6D2E6;
        }
        .lesson-card-head {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 14px;
        }
        .lesson-icon {
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
        .lesson-icon i { line-height: 1; }
        .lesson-tags {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .lesson-step {
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #1C3F94;
          background: #EAF0FA;
          padding: 5px 11px;
          border-radius: 999px;
        }
        .lesson-verb {
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #D62E2E;
          background: #FDF2F2;
          border: 1px solid #F1C6C6;
          padding: 5px 11px;
          border-radius: 999px;
        }
        .lesson-title {
          margin-top: 4px;
          font-size: 1.0625rem;
          font-weight: 700;
          color: #1B1F2A;
          line-height: 1.3;
        }
        .lesson-text {
          font-size: 0.9375rem;
          color: #4A5468;
          line-height: 1.5;
        }

        /* News card */
        .news-card {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          border: 1px solid #E2E6EE;
          border-radius: 6px;
          overflow: hidden;
        }
        @media (min-width: 768px) {
          .news-card { grid-template-columns: 5fr 7fr; }
        }
        /* On mobile, news-text appears first, then photo + partner */
        .news-text { order: 1; }
        .news-left-col { order: 2; }
        @media (min-width: 768px) {
          .news-text { order: initial; }
          .news-left-col { order: initial; }
        }
        .news-left-col {
          display: flex;
          flex-direction: column;
          background: #EAF0FA;
        }
        .news-photo {
          background: #EAF0FA;
          min-height: 220px;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .news-photo svg {
          width: 100%;
          height: 100%;
          display: block;
        }
        .news-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .news-text {
          background: #F4F6FA;
          padding: 28px 28px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 14px;
          border-left: 4px solid #1C3F94;
        }
        @media (min-width: 768px) {
          .news-text { padding: 36px 40px; }
        }
        .news-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 12px 5px 10px;
          background: #FFFFFF;
          border: 1px solid #D62E2E;
          color: #D62E2E;
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          border-radius: 999px;
          align-self: flex-start;
        }
        .news-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #D62E2E;
        }
        .news-fact {
          font-size: 1.0625rem;
          font-weight: 600;
          color: #1B1F2A;
          line-height: 1.45;
        }
        .news-source {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #7A8395;
          margin-top: -4px;
        }
        /* Accordion: «Подробнее об инициативе» */
        .news-extra { margin: 0; }
        .news-extra-summary {
          list-style: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          background: #FFFFFF;
          border: 1px solid #1C3F94;
          border-radius: 6px;
          color: #1C3F94;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          user-select: none;
          transition: background 220ms cubic-bezier(0.32, 0.72, 0, 1);
        }
        .news-extra-summary::-webkit-details-marker { display: none; }
        .news-extra-summary::marker { display: none; }
        .news-extra-summary:hover { background: #F4F6FA; }
        .news-extra-chevron {
          display: inline-block;
          transition: transform 240ms cubic-bezier(0.32, 0.72, 0, 1);
        }
        .news-extra[open] .news-extra-chevron {
          transform: rotate(180deg);
        }
        .news-extra-body {
          margin: 14px 0 0;
          padding: 16px 18px;
          background: #FFFFFF;
          border: 1px solid #E2E6EE;
          border-left: 4px solid #1C3F94;
          border-radius: 0 6px 6px 0;
        }
        .news-extra-body p {
          font-size: 0.9375rem;
          color: #1B1F2A;
          line-height: 1.55;
          font-style: italic;
          font-family: Georgia, 'Times New Roman', serif;
        }
        .news-extra-body p + p { margin-top: 10px; }
        .news-conclusion {
          font-size: 0.9375rem;
          color: #4A5468;
          line-height: 1.55;
        }

        /* Partnership (nested under photo) — text + logo side by side */
        .partner-card {
          display: flex;
          align-items: center;
          gap: 16px;
          background: #FFFFFF;
          border-top: 1px solid #C6D2E6;
          padding: 18px 20px;
          text-align: left;
        }
        .partner-line {
          font-size: 0.9375rem;
          font-weight: 500;
          color: #1B1F2A;
          line-height: 1.5;
          margin: 0;
          flex: 1;
          min-width: 0;
        }
        .partner-logo {
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }
        .partner-logo-image {
          width: 64px;
          height: 64px;
          display: block;
          object-fit: contain;
        }

        /* Entry plate — red heading-style, attaches to program below */
        .entry-plate {
          background: #D62E2E;
          border: 1px solid #B82424;
          border-radius: 6px 6px 0 0;
          padding: 36px 40px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          text-align: center;
          align-items: center;
        }
        @media (min-width: 768px) {
          .entry-plate { padding: 48px 56px 40px; }
        }
        .entry-mark {
          display: inline-flex;
          align-items: center;
          padding: 5px 14px;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.35);
          color: #FFFFFF;
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          border-radius: 999px;
        }
        .entry-text {
          font-size: clamp(1.2rem, 2.4vw, 1.75rem);
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.3;
          max-width: 64ch;
          letter-spacing: -0.005em;
        }
        .entry-sub {
          font-size: clamp(0.9375rem, 1.3vw, 1.0625rem);
          font-weight: 500;
          color: rgba(255, 255, 255, 0.92);
          line-height: 1.5;
          max-width: 68ch;
        }

        /* Program — closing of unified block with equidistant rhythm */
        .program-stack {
          display: flex;
          flex-direction: column;
          gap: 32px;
          align-items: center;
          background: #FFFFFF;
          border: 1px solid #E2E6EE;
          border-top: none;
          border-radius: 0 0 6px 6px;
          padding: 32px 24px;
        }
        @media (min-width: 768px) {
          .program-stack {
            gap: 36px;
            padding: 36px 32px;
          }
        }
        .program-cta-row {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 768px) {
          .program-cta-row {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
        }
        .program-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 18px 24px;
          background: #D62E2E;
          color: #FFFFFF;
          font-weight: 700;
          font-size: 0.9375rem;
          border-radius: 6px;
          transition: background 400ms cubic-bezier(0.32, 0.72, 0, 1),
                      transform 220ms cubic-bezier(0.32, 0.72, 0, 1);
        }
        @media (min-width: 768px) {
          .program-cta-btn { grid-column: 2; }
        }
        .program-cta-btn:hover { background: #B82424; }
        .program-cta-btn:active { transform: scale(0.98); }

        /* Invitation plate — bottom of unified block, button only */
        .invitation-plate {
          background: #FFFFFF;
          border: 1px solid #E2E6EE;
          border-top: none;
          border-radius: 0 0 6px 6px;
          padding: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (min-width: 768px) {
          .invitation-plate { padding: 32px; }
        }
        .invitation-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: #D62E2E;
          color: #FFFFFF;
          font-weight: 700;
          font-size: 0.9375rem;
          border-radius: 6px;
          transition: background 400ms cubic-bezier(0.32, 0.72, 0, 1),
                      transform 220ms cubic-bezier(0.32, 0.72, 0, 1);
        }
        .invitation-cta:hover { background: #B82424; }
        .invitation-cta:active { transform: scale(0.98); }
        .program-h2 { text-align: center; }

        .program-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          width: 100%;
        }
        @media (min-width: 768px) {
          .program-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
        }
        .program-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          text-align: left;
          transition: border-color 0.2s ease-in-out;
        }
        .program-card:hover { border-color: #1C3F94; }
        .program-card-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }
        .program-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 6px;
          background: #1C3F94;
          color: #FFFFFF;
          font-weight: 700;
          font-size: 0.875rem;
          letter-spacing: 0.02em;
        }
        .program-verb {
          font-size: 0.75rem;
          font-weight: 700;
          color: #D62E2E;
          letter-spacing: 0.12em;
          padding: 6px 12px;
          background: #FFFFFF;
          border: 1px solid #D62E2E;
          border-radius: 999px;
        }
        .program-card-title {
          margin-top: 14px;
          font-size: 1.0625rem;
          line-height: 1.3;
        }
        .program-card-text { margin-top: 10px; font-size: 0.9375rem; color: #4A5468; }

      `}</style>
    </section>
  );
}
