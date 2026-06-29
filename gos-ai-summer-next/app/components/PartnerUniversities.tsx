const partners = [
  {
    name: 'НИУ ВШЭ',
    full: 'Национальный исследовательский университет «Высшая школа экономики»',
    logo: '/partners/hse.png',
  },
  {
    name: 'МФТИ',
    full: 'Московский физико-технический институт',
    logo: '/partners/mipt.png',
  },
  {
    name: 'РАНХиГС',
    full: 'Российская академия народного хозяйства и государственной службы при Президенте РФ',
    logo: '/partners/ranepa.png',
    // PNG has heavy whitespace around the eagle — compensate with extra max-height
    logoMaxHeight: 130,
  },
  {
    name: 'Университет Иннополис',
    full: 'Университет Иннополис',
    logo: '/partners/innopolis.jpeg',
  },
];

export default function PartnerUniversities() {
  const basePath = process.env.NODE_ENV === 'production' ? (process.env.BASEPATH ?? '/Zerocoder-Kids-neuro/gos-ai-summer') : '';
  return (
    <section className="sec partners-section">
      <div className="partners-inner">
        <h2 className="h2 partners-h2">
          Всероссийская летняя программа подготовки детей реализуется совместно с&nbsp;ведущими университетами
        </h2>

        <div className="partners-grid">
          {partners.map((p) => (
            <div key={p.name} className="partner-cell" title={p.full}>
              <div className="partner-logo-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${basePath}${p.logo}`}
                  alt={p.full}
                  className="partner-logo-img"
                  loading="lazy"
                  style={'logoMaxHeight' in p ? { maxHeight: (p as { logoMaxHeight: number }).logoMaxHeight } : undefined}
                />
              </div>
              <span className="partner-cell-label">{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .partners-section { background: #FFFFFF; }
        .partners-inner {
          max-width: 1180px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 36px;
          text-align: center;
        }
        .partners-h2 {
          max-width: 32ch;
        }
        .partners-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          width: 100%;
        }
        @media (min-width: 768px) {
          .partners-grid { grid-template-columns: repeat(4, 1fr); gap: 20px; }
        }
        .partner-cell {
          background: #FFFFFF;
          border: 1px solid #E2E6EE;
          border-radius: 6px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          min-height: 200px;
          transition: border-color 220ms cubic-bezier(0.32, 0.72, 0, 1);
        }
        .partner-cell:hover { border-color: #1C3F94; }
        .partner-logo-wrap {
          flex: 1;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
        }
        .partner-logo-img {
          max-width: 100%;
          max-height: 88px;
          width: auto;
          height: auto;
          object-fit: contain;
        }
        .partner-cell-label {
          font-size: 0.8125rem;
          font-weight: 600;
          color: #1B1F2A;
          letter-spacing: 0.01em;
          line-height: 1.3;
          text-align: center;
        }
      `}</style>
    </section>
  );
}
