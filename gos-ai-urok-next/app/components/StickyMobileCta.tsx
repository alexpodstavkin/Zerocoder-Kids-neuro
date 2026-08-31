'use client';

import { useEffect, useState } from 'react';

// Мобильный sticky-CTA: появляется после первого экрана, чтобы не дублировать hero-кнопку.
export default function StickyMobileCta() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      className="fixed inset-x-4 bottom-4 z-[60] md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <a
        href="#cta"
        aria-label="Подать заявку на бесплатный урок"
        aria-hidden={!shown}
        tabIndex={shown ? 0 : -1}
        className={`sticky-cta flex h-[52px] w-full items-center justify-center gap-2.5 rounded-pill text-[15px] font-extrabold uppercase tracking-[0.01em] text-white transition-opacity duration-200 ${
          shown ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        style={{
          background: 'var(--acc-red)',
          boxShadow: '0 8px 24px rgba(213,43,30,.28)',
        }}
      >
        Подать заявку
        <span aria-hidden>→</span>
      </a>
    </div>
  );
}
