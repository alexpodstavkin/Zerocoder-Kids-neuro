import CtaLink from './CtaLink';

const modules = [
  {
    n: '01',
    verb: 'Узнает',
    tail: ', как устроены нейросети',
    text:
      'Разбираем знакомые примеры: поиск, рекомендации, голосовые помощники. Учим ставить задачу словами. Начинаем с\u00A0нуля.',
  },
  {
    n: '02',
    verb: 'Сделает',
    tail: ' своего нейро-помощника для учёбы',
    text:
      'Помощник не\u00A0даёт готовые ответы, а\u00A0объясняет тему своими словами и\u00A0разбирает решение по\u00A0шагам. Это не\u00A0решебник для\u00A0ребёнка, а\u00A0дополнительный бесплатный учитель.',
  },
  {
    n: '03',
    verb: 'Поймёт',
    tail: ' разницу между работой и списыванием',
    text:
      'Нейросеть — не\u00A0способ списать, а\u00A0способ создавать. Ребёнок видит разницу между «сделал сам» и «сдал чужое».',
  },
];


export default function Program() {
  const basePath = process.env.NODE_ENV === 'production' ? (process.env.BASEPATH ?? '/neyroseti-otkrytyy-urok') : '';
  return (
    <section className="sec" style={{ background: '#FFFFFF' }}>
      <div className="program-inner">
        {/* News plate: left column (photo + partner) + text right */}
        <div className="news-card">
          <div className="news-left-col">
            <div className="news-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${basePath}/photos/initiative-it-class.png`}
                alt="Школьники на занятии по информатике изучают нейросети"
                className="news-photo-img"
                loading="lazy"
              />
            </div>

            {/* Partnership block (moved under photo) */}
            <div className="partner-card">
              <p className="partner-line">
                Бесплатный открытый урок проводится совместно с&nbsp;Университетом Зерокодер
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
              Для&nbsp;школьников введут курс по&nbsp;ИИ и&nbsp;информационной безопасности со&nbsp;второй четверти 2026/27&nbsp;учебного года.
            </p>
            <p className="news-fact-body">
              Новый курс будет внеурочным. Школьников планируют знакомить с&nbsp;технологиями искусственного интеллекта и&nbsp;основами безопасной работы с&nbsp;информацией.
            </p>
            <span className="news-source">Источник: Минпросвещения России</span>
            <span className="news-subhead">Как это будет реализовано в&nbsp;2026 году</span>
            <p className="news-conclusion">
              Курс в&nbsp;школе будет. Но&nbsp;учитель в&nbsp;классе один, а&nbsp;урок ограничен по&nbsp;времени — разобрать индивидуально тему с&nbsp;каждым ребёнком он&nbsp;просто не&nbsp;успеет. Оставаться после уроков и&nbsp;объяснять заново никто не&nbsp;будет, а&nbsp;результат курса будут оценивать.
            </p>
            <p className="news-conclusion">
              Поэтому, если вы&nbsp;хотите, чтобы ребёнок разобрался, а&nbsp;не&nbsp;просто прошёл курс, лучше посетить бесплатный открытый урок.
            </p>
          </div>
        </div>

        {/* Program section: accent entry-plate + 3 modules as one cohesive block */}
        <div id="program" className="program-section">
          {/* Entry plate — frames the free lesson as the gateway */}
          <div className="entry-plate">
            <p className="entry-text">
              Открытый урок проходит онлайн — один на&nbsp;один с&nbsp;педагогом, <span style={{ whiteSpace: 'nowrap' }}>45–60&nbsp;минут</span>, под&nbsp;уровень вашего ребёнка. Удобное время подберём вместе.
            </p>
          </div>

          {/* Program — H2, typographic 3-column grid, CTA row inside one block */}
          <div className="program-stack">
            <h2 className="h2 program-h2">Программа бесплатного открытого урока</h2>

            <div className="program-grid">
              {modules.map((m) => (
                <article key={m.n} className="program-item">
                  <h3 className="program-item-title">
                    <span className="program-item-num">{m.n}</span>
                    <span className="program-item-verb">{m.verb}</span>{m.tail}
                  </h3>
                  <p className="program-item-text">{m.text}</p>
                </article>
              ))}
            </div>

            <div className="program-cta-row">
              <CtaLink goal="cta_program" className="program-cta-btn">
                Записаться на&nbsp;бесплатный открытый урок
                <span aria-hidden style={{ fontWeight: 700 }}>→</span>
              </CtaLink>
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

        /* Cohesive group: accent plate + program grid stick together */
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
          background: #EDEEF7;
        }
        .news-photo {
          background: #EDEEF7;
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
          border-left: 4px solid #2A3160;
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
          border: 1px solid #515CB0;
          color: #414A93;
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
          background: #515CB0;
        }
        .news-fact {
          font-size: 1.0625rem;
          font-weight: 600;
          color: #1B1F2A;
          line-height: 1.45;
        }
        .news-fact-body {
          font-size: 0.9375rem;
          color: #4A5468;
          line-height: 1.55;
          margin-top: -4px;
        }
        .news-source {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #7A8395;
          margin-top: -4px;
          align-self: flex-start;
        }
        .news-subhead {
          display: block;
          margin-top: 4px;
          padding: 10px 16px;
          background: #E7E8F4;
          border-left: 3px solid #515CB0;
          border-radius: 0 6px 6px 0;
          color: #2A3160;
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          line-height: 1.35;
        }
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
          border-top: 1px solid #CBCEE6;
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

        /* Entry plate — accent heading-style, attaches to program below */
        .entry-plate {
          background: #515CB0;
          border: 1px solid #414A93;
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
        .entry-text {
          font-size: clamp(1.2rem, 2.4vw, 1.75rem);
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.3;
          max-width: 64ch;
          letter-spacing: -0.005em;
        }

        /* Program — closing of unified block with equidistant rhythm */
        .program-stack {
          display: flex;
          flex-direction: column;
          gap: 28px;
          align-items: center;
          background: #FFFFFF;
          border: 1px solid #E2E6EE;
          border-top: none;
          border-radius: 0 0 6px 6px;
          padding: 28px 20px 32px;
        }
        @media (min-width: 768px) {
          .program-stack {
            gap: 40px;
            padding: 48px 40px 40px;
          }
        }
        .program-cta-row {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .program-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 18px 32px;
          white-space: nowrap;
          background: #515CB0;
          color: #FFFFFF;
          font-weight: 700;
          font-size: 0.9375rem;
          border-radius: 6px;
          transition: background 400ms cubic-bezier(0.32, 0.72, 0, 1),
                      transform 220ms cubic-bezier(0.32, 0.72, 0, 1);
        }
        @media (max-width: 767px) {
          .program-cta-btn { width: 100%; white-space: normal; }
        }
        .program-cta-btn:hover { background: #414A93; }
        .program-cta-btn:active { transform: scale(0.98); }

        .program-h2 { text-align: center; }

        .program-grid {
          display: grid;
          grid-template-columns: 1fr;
          row-gap: 28px;
          width: 100%;
          align-items: start;
        }
        @media (min-width: 768px) {
          .program-grid {
            grid-template-columns: repeat(3, 1fr);
            column-gap: 40px;
            row-gap: 0;
          }
        }

        .program-item {
          display: flex;
          flex-direction: column;
          text-align: left;
          border-top: 2px solid #2A3160;
          padding-top: 18px;
        }
        .program-item-title {
          font-size: 1.25rem;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: -0.005em;
          color: #1B1F2A;
          margin: 0;
        }
        .program-item-num {
          font-weight: 800;
          color: #515CB0;
          letter-spacing: 0.04em;
          font-variant-numeric: tabular-nums;
          margin-right: 10px;
        }
        .program-item-verb {
          font-weight: 800;
          color: #515CB0;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .program-item-text {
          margin-top: 12px;
          font-size: 0.9375rem;
          line-height: 1.55;
          color: #4A5468;
        }
        @media (min-width: 768px) {
          /* без рамок рваный низ колонок виден сразу — держим единую высоту абзаца */
          .program-item-text { min-height: calc(5 * 1.55em); }
        }

      `}</style>
    </section>
  );
}
