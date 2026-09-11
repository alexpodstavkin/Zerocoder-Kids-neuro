'use client';

import { useEffect, useRef } from 'react';

// Форма регистрации мини-курса. Виджет выдан владельцем 08.09.2026:
// аккаунт school-genius.club, воронка 1653389 — собственная, не общая с gos-ai-urok.
// ID и src не меняются: скрипт виджета сам ищет себя по этому id в DOM.
const SCRIPT_ID = '601d16f3fec216e40acfbb3dd2f26177ad03144e';
const SCRIPT_SRC = 'https://school-genius.club/pl/lite/widget/script?id=1653389';
const START_EVENT = 'StartWidget' + SCRIPT_ID;
const START_FN = 'startWidget' + SCRIPT_ID;

// Защита от мусорных значений, если виджет пришлёт что-то невменяемое.
const MAX_H = 1400;

// На странице ДВЕ формы (Hero и финальный блок) — как на референсе.
// Скрипт виджета делает getElementById(SCRIPT_ID), вставляет <iframe> перед найденным
// тегом и удаляет сам тег. Поэтому каждый экземпляр кладёт в свой контейнер
// собственный <script> и запускает виджет ровно один раз.
//
// ⚠️ ВЫСОТУ ФОРМЫ ВЕДЁМ САМИ (правка владельца 11.09.2026: «нижний край формы
// то уменьшается, то увеличивается»). Замерено на боевом:
// - у обоих iframe виджет ставит ОДИНАКОВЫЕ id и name, поэтому его обработчик
//   не отличает формы: раз в секунду каждая форма шлёт свою высоту (например, 461 и 533),
//   и обе формы получают то одну, то другую — край карточки качается;
// - высоту iframe виджет пишет только первому найденному по id, у второй формы
//   iframe так и остаётся height: 0px;
// - прежняя защита через min-height по максимуму подтягивала короткую форму
//   до высоты длинной — отсюда пустота под полями.
// Решение: слушаем те же сообщения, но берём только свои — по e.source, это окно
// именно нашего iframe. Высоту кладём в --gc-h, а CSS (.getcourse-widget в globals.css)
// применяет её с !important, поэтому inline-записи виджета ни на что не влияют.
// Высота следует за формой в обе стороны: вырастет под ошибки полей или экран
// «спасибо» — карточка вырастет, но чужая высота её больше не дёргает.
export default function GetCourseWidget() {
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const host = ref.current;
    if (typeof document === 'undefined' || !host || started.current) return;
    started.current = true;

    let current = 0;
    const onMessage = (e: MessageEvent) => {
      const frame = host.querySelector('iframe');
      if (!frame || e.source !== frame.contentWindow) return;
      const h = Math.round(Number((e.data as { height?: unknown } | null)?.height));
      if (!Number.isFinite(h) || h <= 0 || h > MAX_H || h === current) return;
      current = h;
      host.style.setProperty('--gc-h', `${h}px`);
    };
    window.addEventListener('message', onMessage);

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => {
      // DOMContentLoaded в SPA уже прошёл — автозапуск виджета не сработает.
      // Зовём глобальную функцию напрямую: событие подняло бы всех слушателей
      // сразу (их столько, сколько форм на странице) и второй вызов упал бы.
      const w = window as unknown as Record<string, unknown>;
      const fn = w[START_FN];
      try {
        if (typeof fn === 'function') (fn as () => void)();
        else document.dispatchEvent(new Event(START_EVENT));
      } catch {
        /* контейнер уже разобран соседним экземпляром — это не ошибка */
      }
    };
    host.appendChild(script);

    return () => window.removeEventListener('message', onMessage);
  }, []);

  return <div ref={ref} className="getcourse-widget" />;
}
