import GetCourseWidget from './GetCourseWidget';

export default function CtaForm() {
  return (
    <section id="cta" className="sec" style={{ background: '#F4F6FA' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        <div className="cta-grid">
          {/* Left: dark navy panel */}
          <div className="cta-left">
            <h2 className="h2" style={{ color: '#FFFFFF', lineHeight: 1.2 }}>
              Всероссийская летняя программа подготовки детей к&nbsp;школьному курсу «Искусственный интеллект»
            </h2>
            <div className="cta-meta">
              <span className="cta-meta-item">
                <span className="cta-meta-dot" />
                Старт программы: 22&nbsp;июля
              </span>
              <span className="cta-meta-item">
                <span className="cta-meta-dot" />
                Количество мест ограничено
              </span>
            </div>
          </div>

          {/* Right: GetCourse widget */}
          <div className="cta-right">
            <GetCourseWidget />
          </div>
        </div>
      </div>

      <style>{`
        .cta-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4px;
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid #E2E6EE;
        }
        @media (min-width: 900px) {
          .cta-grid { grid-template-columns: 7fr 5fr; gap: 0; }
        }
        .cta-left {
          background: #1C3F94;
          padding: 36px 28px;
          color: #FFFFFF;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        @media (min-width: 900px) {
          .cta-left { padding: 48px 44px; }
        }
        .cta-right {
          background: #FFFFFF;
          padding: 24px 20px;
          min-height: 320px;
          display: flex;
          flex-direction: column;
        }
        @media (min-width: 900px) {
          .cta-right { padding: 32px 28px; }
        }
        .cta-right .getcourse-widget {
          width: 100%;
          flex: 1;
        }

        /* Meta info inside navy panel */
        .cta-meta {
          margin-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .cta-meta-item {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9375rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.92);
          line-height: 1.4;
        }
        .cta-meta-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #D62E2E;
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
}
