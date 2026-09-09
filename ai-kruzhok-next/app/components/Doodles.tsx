import type { CSSProperties } from 'react';

// Рисованные каракули референса kvantastica: тонкие чёрные контуры поверх фона.
// Все — инлайновый SVG (не картинки), цвет наследуется через currentColor,
// позиционирование задаётся классом .doodle (position: absolute) снаружи.

type D = { className?: string; style?: CSSProperties; width?: number };

// Контурная пятиконечная звезда — главный «маркер» референса
export function StarOutline({ className = '', style, width = 46 }: D) {
  return (
    <svg
      className={className}
      style={style}
      width={width}
      height={width}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
    >
      <path
        d="M24 3.5 30 18.2 45.6 19.3 33.7 29.5 37.4 44.8 24 36.3 10.6 44.8 14.3 29.5 2.4 19.3 18 18.2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Мелкая четырёхлучевая звёздочка-искра (заливка)
export function Sparkle({ className = '', style, width = 18 }: D) {
  return (
    <svg className={className} style={style} width={width} height={width} viewBox="0 0 24 24" aria-hidden>
      <path
        d="M12 0c1.5 7 4 9.4 12 12-8 2.6-10.5 5-12 12-1.5-7-4-9.4-12-12 8-2.6 10.5-5 12-12Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Тройной завиток «еее» — рисуется от руки, идёт вдоль правого края секции
export function Curl({ className = '', style, width = 110 }: D) {
  return (
    <svg
      className={className}
      style={style}
      width={width}
      height={width * 0.3}
      viewBox="0 0 100 30"
      fill="none"
      aria-hidden
    >
      <path
        d="M2 22c8 0 20-6 18-14-1-5-8-5-9 1-1 7 5 15 17 13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M30 22c8 0 20-6 18-14-1-5-8-5-9 1-1 7 5 15 17 13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M58 22c8 0 20-6 18-14-1-5-8-5-9 1-1 7 6 16 21 10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Одиночный завиток-росчерк слева от фото
export function Swirl({ className = '', style, width = 96 }: D) {
  return (
    <svg
      className={className}
      style={style}
      width={width}
      height={width * 0.62}
      viewBox="0 0 96 60"
      fill="none"
      aria-hidden
    >
      <path
        d="M46 8c-14-8-32-2-38 12-5 12 3 26 15 30 11 4 22-3 21-13-1-9-12-13-18-7-6 5-3 15 5 18"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path d="M52 6c9 6 16 16 18 28" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M74 26l-4-11 11 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Стрелка-курсор: белая заливка, чёрный контур — как на референсе
export function CursorArrow({ className = '', style, width = 44 }: D) {
  return (
    <svg
      className={className}
      style={style}
      width={width}
      height={width * 1.2}
      viewBox="0 0 40 48"
      fill="none"
      aria-hidden
    >
      <path
        d="M5 3.5 34.5 27.5 20.5 29 26.5 43.5 20.5 46 14.5 31.5 5 40.5Z"
        fill="#fff"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Короткая стрелка между карточками-этапами
export function StepArrow({ className = '', style, width = 40 }: D) {
  return (
    <svg
      className={className}
      style={style}
      width={width}
      height={width * 0.52}
      viewBox="0 0 48 25"
      fill="none"
      aria-hidden
    >
      <path d="M2 6c9 10 23 13 43 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path
        d="M37 20.5 45.5 15l-6.5-5.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Длинная изогнутая стрелка, указывающая на форму
export function FormArrow({ className = '', style, width = 104 }: D) {
  return (
    <svg
      className={className}
      style={style}
      width={width}
      height={width * 0.87}
      viewBox="0 0 104 90"
      fill="none"
      aria-hidden
    >
      <path d="M2 3c39 4 66 29 85 76" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M70 63.5 88 79l-1-19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
