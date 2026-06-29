const modules = [
  {
    n: '01',
    verb: 'УЗНАЕТ',
    title: 'Что такое нейросети и как они устроены',
    text:
      'Принципы работы нейросетей на знакомых ребёнку примерах. Навык написания промптов и проверки ответов искусственного интеллекта.',
  },
  {
    n: '02',
    verb: 'СДЕЛАЕТ',
    title: 'Свой личный ИИ-проект',
    text:
      'Под руководством опытного наставника соберёт работающий проект. Научится самостоятельно находить неточности в работе нейросетей и исправлять их.',
  },
  {
    n: '03',
    verb: 'ПОЙМЁТ',
    title: 'Как применять ИИ в школе и в жизни',
    text:
      'От школьной домашки до собственных проектов: ребёнок видит, где нейросеть становится реальным помощником, а где даёт поверхностный совет. Финальный диалог с педагогом — ответы на вопросы родителя и ребёнка, индивидуальные рекомендации, как развивать навык после урока.',
  },
];

export default function Program() {
  const basePath = process.env.NODE_ENV === 'production' ? (process.env.BASEPATH ?? '/Zerocoder-Kids-neuro/gos-ai-summer') : '';
  return (
    <section id="program" className="sec" style={{ background: '#FFFFFF' }}>
      <div className="program-inner">
        {/* News plate: left column (photo + partner) + text right */}
        <div className="news-card">
          <div className="news-left-col">
            <div className="news-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${basePath}/photos/initiative-it-class.png`}
                alt="Школьники изучают информатику и нейросети в IT-классе"
                className="news-photo-img"
                loading="lazy"
              />
            </div>

            {/* Partnership block (moved under photo) */}
            <div className="partner-card">
              <p className="partner-line">
                Всероссийская программа реализуется в&nbsp;сотрудничестве с&nbsp;ведущим университетом СНГ по&nbsp;обучению искусственному интеллекту — «Зерокодер»
              </p>
              <div className="partner-logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${basePath}/partners/zerocoder.png`}
                  alt="Логотип Университета Зерокодер"
                  className="partner-logo-image"
                  width={64}
                  height={64}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="news-text">
            <span className="news-eyebrow">
              <span className="news-eyebrow-dot" />
              Официальное сообщение
            </span>
            <p className="news-fact">
              По&nbsp;официальному заявлению министра просвещения Сергея Кравцова, с&nbsp;1&nbsp;сентября 2026&nbsp;года в&nbsp;школьную программу по&nbsp;информатике вводится новый профиль «Искусственный интеллект».
            </p>
            <span className="news-source">Источник: РИА&nbsp;Новости · 20&nbsp;мая&nbsp;2026</span>
            <details className="news-extra">
              <summary className="news-extra-summary">
                Подробнее об&nbsp;инициативе
                <span aria-hidden className="news-extra-chevron">▾</span>
              </summary>
              <blockquote className="news-extra-body">
                <p>
                  «Москва и&nbsp;Подмосковье уже запустили программы: школьники изучают нейросети в&nbsp;рамках уроков информатики. С&nbsp;1&nbsp;сентября 2026&nbsp;года инициатива распространяется на&nbsp;все школы России.
                </p>
                <p>
                  Цель — подготовить новое поколение к&nbsp;цифровой экономике: чтобы выпускник свободно владел нейросетями как базовым рабочим инструментом, понимал их&nbsp;возможности и&nbsp;ограничения, а&nbsp;страна сохраняла технологическое лидерство в&nbsp;ключевой отрасли».
                </p>
              </blockquote>
            </details>
          </div>
        </div>

        {/* Program section: red entry-plate + 3 modules as one cohesive block */}
        <div className="program-section">
          {/* Entry plate — frames the free lesson as the gateway */}
          <div className="entry-plate">
            <span className="entry-mark">Регламент участия</span>
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
                <article key={m.n} className="card program-card">
                  <div className="program-card-head">
                    <span className="program-num">{m.n}</span>
                    <span className="program-verb">{m.verb}</span>
                  </div>
                  <h3 className="h3 program-card-title">{m.title}</h3>
                  <p className="body program-card-text">{m.text}</p>
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
