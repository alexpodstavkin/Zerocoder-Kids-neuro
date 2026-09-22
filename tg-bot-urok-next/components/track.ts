/**
 * Цели Яндекс.Метрики на кнопки экрана.
 *
 * На экране три кликабельных призыва — зелёная кнопка карточки, синяя
 * «Начать» и служебные значки хрома. Без целей после запуска нельзя узнать,
 * что из этого вообще нажимают, а проект заявлен как эксперимент: это и есть
 * главная обучающая информация.
 */
const COUNTER = 72085663;

export type Goal = 'cta_card' | 'cta_start' | 'chrome_icon' | 'chrome_close';

export function track(goal: Goal) {
  const ym = (window as unknown as { ym?: (id: number, m: string, g: string) => void }).ym;
  try {
    ym?.(COUNTER, 'reachGoal', goal);
  } catch {
    /* счётчик не загрузился (блокировщик) — на поведение экрана это не влияет */
  }
}
