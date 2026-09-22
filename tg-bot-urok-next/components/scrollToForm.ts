/**
 * Действия «интерфейсных» элементов экрана.
 *
 * Имитация Telegram создаёт ложные аффордансы: крестик, три точки, стрелка
 * «развернуть», синяя кнопка «Начать». Нажмёт на них самый мотивированный
 * человек на странице — поэтому мёртвых элементов быть не должно.
 * Но и сводить их все к одному действию нельзя: ✕ обязан вести вверх,
 * иначе человек жмёт «закрыть» и его проталкивает в форму. Жмёт ✕ как раз
 * сомневающийся — и в ответ на попытку выйти получает давление.
 *
 * Прокрутку анимируем сами через requestAnimationFrame. Почему не штатными
 * средствами (замерено в браузере 2026-09-22 на этой самой карточке):
 * - `scrollIntoView` во вложенном скроллере с iframe внутри прокручивал
 *   на 12 px вместо 486;
 * - CSS `scroll-behavior: smooth` на контейнере глушил `scrollTo` целиком;
 * - `scrollTo({behavior:'smooth'})` не двигал контейнер вообще, тогда как
 *   `behavior:'auto'` отрабатывал мгновенно.
 * Собственный твин работает одинаково везде и не зависит от этих особенностей.
 */

const GAP = 8; // немного воздуха над первым полем формы
const DURATION = 420;

/** easeOutCubic — быстрый старт, мягкая остановка */
const ease = (t: number) => 1 - Math.pow(1 - t, 3);

const body = () => document.querySelector<HTMLElement>('.card-scroll');

function animateTo(box: HTMLElement, target: number) {
  const from = box.scrollTop;
  const to = Math.min(Math.max(0, target), box.scrollHeight - box.clientHeight);
  if (Math.abs(to - from) < 1) return;

  // Без анимации: когда её просили не делать и когда кадров всё равно нет —
  // в скрытой вкладке браузер замораживает и requestAnimationFrame, и таймеры.
  if (document.hidden || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    box.scrollTop = to;
    return;
  }

  const start = performance.now();
  let framed = false;
  const step = (now: number) => {
    framed = true;
    const t = Math.min(1, (now - start) / DURATION);
    box.scrollTop = from + (to - from) * ease(t);
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);

  // Страховка: если кадры не идут (вкладка неактивна, экономия батареи,
  // автоматизация) — анимации не будет, но действие обязано сработать.
  window.setTimeout(() => {
    if (!framed) box.scrollTop = to;
  }, 120);
}

/** Цель зелёной кнопки, «Начать» и служебных значков карточки */
export function scrollToForm() {
  const form = document.getElementById('lead-form');
  const box = body();
  if (!form || !box) return;
  animateTo(box, form.offsetTop - GAP);
}

/** Цель крестика: честный аналог «свернуть» — возврат к офферу, а не к форме */
export function scrollToTop() {
  const box = body();
  if (box) animateTo(box, 0);
}
