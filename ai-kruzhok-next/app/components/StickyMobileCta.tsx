'use client';

import { useEffect, useState } from 'react';

// Мобильный sticky-CTA: появляется после первого экрана и прячется,
// когда на экране любая из форм — чтобы её не перекрывать.
//
// Раньше наблюдалась только секция #cta (финальный блок). Из-за этого,
// пока человек заполнял форму на первом экране, кнопка висела поверх
// нижних 70px — ровно там, где галочки согласия и кнопка отправки.
// Замерено на 320/360/412px: накрытие 70px на всех.
// Теперь под наблюдением обе формы (.gc-host) плюс финальная секция,
// и кнопка прячется, если видно хотя бы одну.
export default function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let scrolled = false;
    // Держим множество видимых целей, а не один флаг: целей несколько,
    // и одна уходящая с экрана не должна гасить признак от другой.
    const onScreen = new Set<Element>();
    const sync = () => setVisible(scrolled && onScreen.size === 0);

    const onScroll = () => {
      scrolled = window.scrollY > 520;
      sync();
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const targets: Element[] = [
      ...Array.from(document.querySelectorAll('.gc-host')),
      ...(document.getElementById('cta') ? [document.getElementById('cta') as Element] : []),
    ];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) onScreen.add(e.target);
          else onScreen.delete(e.target);
        });
        sync();
      },
      { rootMargin: '-30% 0px 0px 0px' }
    );
    targets.forEach((t) => io.observe(t));

    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 px-4 pb-4 md:hidden ${
        visible ? 'pointer-events-auto opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      } transition-all duration-300`}
    >
      <a
        href="#cta"
        className="btn-r btn-r-solid btn-r-block sticky-cta"
        style={{ boxShadow: '0 10px 30px rgba(128,95,248,.35)' }}
      >
        Открыть доступ
      </a>
    </div>
  );
}
