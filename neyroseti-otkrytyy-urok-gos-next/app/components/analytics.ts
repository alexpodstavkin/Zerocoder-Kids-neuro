'use client';

/**
 * Цели аналитики лендинга «Бесплатный открытый урок по нейросетям».
 *
 * Счётчики подключены в `app/layout.tsx`:
 *   — Яндекс.Метрика: 72085663
 *   — Top.Mail.Ru (VK Ads): 3739769
 *
 * ВЛАДЕЛЬЦУ: цели с этими идентификаторами нужно один раз создать вручную
 * в обоих интерфейсах (Метрика → «Цели» → тип «JavaScript-событие»;
 * Top.Mail.Ru → «Цели» → «Произвольное событие»). До создания целей
 * события уходят, но не считаются — обучать кампании будет нечем.
 *
 *   cta_topbar   — клик по кнопке «Записаться бесплатно» в шапке (desktop, ≥768px)
 *   cta_hero     — клик по кнопке «Записаться на бесплатный урок» в первом экране
 *   cta_program  — клик по кнопке «Записаться на бесплатный урок» под карточками программы
 *   cta_sticky   — клик по закреплённой кнопке «Записаться бесплатно» (mobile, ≤767px)
 *
 * Все четыре — точки конверсии на одну и ту же форму `#cta`.
 * Отправка заявки считается средствами GetCourse и здесь не трекается.
 */

const YM_COUNTER_ID = 72085663;
const TMR_COUNTER_ID = '3739769';

type YandexMetrika = (counterId: number, action: string, goal: string) => void;
type TopMailRuEvent = { id: string; type: string; goal?: string; start?: number };

declare global {
  interface Window {
    ym?: YandexMetrika;
    _tmr?: TopMailRuEvent[];
  }
}

/**
 * Безопасно отправляет цель в оба счётчика.
 * Если счётчик не загрузился (блокировщик, медленная сеть, SSR) —
 * молча ничего не делает и не мешает переходу по ссылке.
 */
export function trackGoal(goal: string): void {
  if (typeof window === 'undefined') return;

  try {
    window.ym?.(YM_COUNTER_ID, 'reachGoal', goal);
  } catch {
    /* счётчик недоступен — навигацию не ломаем */
  }

  try {
    window._tmr?.push({ id: TMR_COUNTER_ID, type: 'reachGoal', goal });
  } catch {
    /* счётчик недоступен — навигацию не ломаем */
  }
}
