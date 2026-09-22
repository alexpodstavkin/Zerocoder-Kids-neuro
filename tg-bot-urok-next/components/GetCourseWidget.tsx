'use client';

import { useEffect, useRef } from 'react';

// Виджет взят с боевого ленда kids.zerocoder.ru/neyroseti-otkrytyy-urok/
// по указанию владельца 2026-09-22. Сверено с живой сборкой того ленда:
// chunks/app/page-94c2a96c01497b9e.js содержит ровно этот id и эту воронку.
// Обе константы меняются только вместе: SCRIPT_ID — якорь в DOM,
// SCRIPT_SRC — id воронки.
const SCRIPT_ID = 'a94e4797f7ca22c69cb9243054b13dd796b52cc3';
const SCRIPT_SRC = 'https://university.zerocoder.ru/pl/lite/widget/script?id=1623916';
const START_EVENT = 'StartWidget' + SCRIPT_ID;
const START_FN = 'startWidget' + SCRIPT_ID;

// Защита от мусорных значений, если виджет пришлёт что-то невменяемое.
const MAX_H = 1400;

// Высоту формы ведём сами (правка владельца 11.09.2026 на ai-kruzhok:
// «нижний край формы то уменьшается, то увеличивается»). Виджет раз в секунду
// шлёт высоту postMessage'ом; берём только СВОЁ сообщение — по e.source это окно
// именно нашего iframe. Высоту кладём в --gc-h, CSS применяет её с !important,
// поэтому inline-записи виджета ни на что не влияют.
// ⛔ Масштабирование через transform: scale запрещено (правка владельца).
export default function GetCourseWidget() {
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const host = ref.current;
    if (typeof document === 'undefined' || !host) return;

    // Слушатель вешается ВСЕГДА, а флагом закрыта только вставка скрипта.
    // Раньше ранний выход по флагу стоял выше слушателя: в режиме разработки
    // React прогоняет эффект дважды, уборка после первого прохода снимала
    // слушатель, а второй проход выходил по флагу и заново его не вешал.
    // Высота формы молча оставалась фолбэком.
    let current = 0;
    const onMessage = (e: MessageEvent) => {
      // Источник НЕ сверяем с contentWindow своего iframe: виджет шлёт высоту
      // из вложенного окна, и такая проверка отбрасывала все сообщения —
      // высота молча оставалась фолбэком (замерено 2026-09-22: виджет
      // присылает 557, а карточка держала 640). Сверка нужна, только когда
      // форм на странице несколько и их сообщения путаются; здесь форма одна.
      if (!host.querySelector('iframe')) return;
      const h = Math.round(Number((e.data as { height?: unknown } | null)?.height));
      if (!Number.isFinite(h) || h <= 0 || h > MAX_H || h === current) return;
      current = h;
      host.style.setProperty('--gc-h', `${h}px`);
    };
    window.addEventListener('message', onMessage);

    if (started.current) return () => window.removeEventListener('message', onMessage);
    started.current = true;

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => {
      // DOMContentLoaded в SPA уже прошёл — автозапуск виджета не сработает.
      const w = window as unknown as Record<string, unknown>;
      const fn = w[START_FN];
      try {
        if (typeof fn === 'function') (fn as () => void)();
        else document.dispatchEvent(new Event(START_EVENT));
      } catch {
        /* контейнер уже разобран — это не ошибка */
      }
    };
    host.appendChild(script);

    return () => window.removeEventListener('message', onMessage);
  }, []);

  return <div ref={ref} className="getcourse-widget" />;
}
