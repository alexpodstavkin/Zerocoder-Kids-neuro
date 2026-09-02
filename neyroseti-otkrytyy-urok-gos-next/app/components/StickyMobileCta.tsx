import CtaLink from './CtaLink';

export default function StickyMobileCta() {
  return (
    <CtaLink
      goal="cta_sticky"
      className="sticky-mobile-cta"
      aria-label="Записаться на бесплатный открытый урок по нейросетям"
    >
      Записаться бесплатно
      <span aria-hidden style={{ fontWeight: 700 }}>→</span>
      <style>{`
        .sticky-mobile-cta {
          display: none;
          position: fixed;
          left: 12px;
          right: 12px;
          bottom: 12px;
          z-index: 60;
          background: #515CB0;
          color: #FFFFFF;
          padding: 14px 18px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.9375rem;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 6px 24px rgba(42, 49, 96, 0.32);
          transition: background 0.2s ease-in-out;
        }
        .sticky-mobile-cta:hover { background: #414A93; }
        @media (max-width: 767px) {
          .sticky-mobile-cta { display: inline-flex; }
        }
      `}</style>
    </CtaLink>
  );
}
