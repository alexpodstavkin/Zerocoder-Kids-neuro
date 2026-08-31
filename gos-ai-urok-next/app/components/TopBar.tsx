import { Button } from '@/components/Button';

// Канон-шапка Зерокодера: sticky, blur, плоская полоса.
// Государственная деталь — триколорная лента 4px по нижней кромке (1-е из 2 использований).
export default function TopBar() {
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{ background: 'rgba(255,255,255,.86)' }}
    >
      <div className="container-x flex h-[58px] items-center justify-between gap-4 md:h-[66px]">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex-none" aria-label="Флаг Российской Федерации" role="img">
            <svg width="32" height="32" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="flagClip">
                  <circle cx="28" cy="28" r="24" />
                </clipPath>
              </defs>
              <circle cx="28" cy="28" r="26.5" fill="#FFFFFF" stroke="#0039A6" strokeWidth="2" />
              <g clipPath="url(#flagClip)">
                <rect x="4" y="4" width="48" height="16" fill="#FFFFFF" />
                <rect x="4" y="20" width="48" height="16" fill="#0039A6" />
                <rect x="4" y="36" width="48" height="16" fill="#D52B1E" />
              </g>
              <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(0,57,166,0.25)" strokeWidth="1" />
            </svg>
          </span>
          <span className="hidden max-w-[420px] text-[13px] font-bold leading-[1.25] text-ink min-[1200px]:block">
            Всероссийская программа подготовки детей к&nbsp;школьному курсу «Искусственный интеллект» — 2026
          </span>
        </div>

        <nav className="hidden items-center gap-7 min-[1000px]:flex" aria-label="Разделы">
          <a
            href="#program"
            className="inline-flex min-h-[44px] items-center text-[15px] font-semibold text-ink transition-colors duration-200 hover:text-acc"
          >
            Программа
          </a>
          <a
            href="#gifts"
            className="inline-flex min-h-[44px] items-center text-[15px] font-semibold text-ink transition-colors duration-200 hover:text-acc"
          >
            Подарки
          </a>
        </nav>

        <span className="pill pill-live hidden min-[1100px]:inline-flex" aria-label="Статус регистрации">
          <span className="pulse-dot" aria-hidden />
          Идёт регистрация
        </span>

        <Button href="#cta" sm className="flex-none">
          Подать заявку
        </Button>
      </div>
      <div className="tricolor-rule" aria-hidden />
    </header>
  );
}
