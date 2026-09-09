'use client';

import { useEffect, useRef } from 'react';

// Форма регистрации мини-курса. Виджет выдан владельцем 08.09.2026:
// аккаунт school-genius.club, воронка 1653389 — собственная, не общая с gos-ai-urok.
// ID и src не меняются: скрипт виджета сам ищет себя по этому id в DOM.
const SCRIPT_ID = '601d16f3fec216e40acfbb3dd2f26177ad03144e';
const SCRIPT_SRC = 'https://school-genius.club/pl/lite/widget/script?id=1653389';
const START_EVENT = 'StartWidget' + SCRIPT_ID;
const START_FN = 'startWidget' + SCRIPT_ID;

// Через сколько перестаём слушать виджет: к этому моменту высота уже устоялась.
const SETTLE_MS = 12000;
// Защита от мусорных значений, если виджет пришлёт что-то невменяемое.
const MAX_H = 1400;

// На странице ДВЕ формы (Hero и финальный блок) — как на референсе.
// Скрипт виджета делает getElementById(SCRIPT_ID), вставляет <iframe> перед найденным
// тегом и удаляет сам тег. Поэтому каждый экземпляр кладёт в свой контейнер
// собственный <script> и запускает виджет ровно один раз.
//
// ⚠️ ПОЧЕМУ ЗДЕСЬ MIN-HEIGHT, А НЕ HEIGHT (правка владельца: «форма скачет туда-сюда»).
// Виджет шлёт высоту через postMessage, НЕ различая, какой из двух форм она
// адресована. Формы разной высоты, поэтому сообщения перезаписывали друг друга:
// высота колбасилась между 561 и 599 пикселями.
//
// Первая попытка — «возвращать максимум записью» — сделала только хуже: виджет
// ставил 561, мы писали 599 обратно, виджет снова 561. Половину скачков давал
// наш собственный код. Драться с виджетом записями нельзя, он всё равно последний.
//
// Рабочее решение: мы вообще не трогаем height. Ставим на контейнер и на iframe
// min-height по максимальной виденной высоте. Виджет продолжает писать свой
// inline height, но при height < min-height по правилам CSS побеждает min-height —
// сжаться форма уже не может, а вырасти (например, под экран «спасибо» после
// отправки) по-прежнему свободно может. Монотонность обеспечивает CSS, а не JS,
// поэтому ответных записей нет и петля не заводится.
export default function GetCourseWidget() {
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const host = ref.current;
    if (typeof document === 'undefined' || !host || started.current) return;
    started.current = true;

    let maxH = 0;

    const onMutate = () => {
      const h = parseInt(host.style.height, 10);
      if (!Number.isFinite(h) || h <= 0 || h > MAX_H || h <= maxH) return;
      maxH = h;
      // Только пол высоты. height не пишем — иначе снова получим петлю.
      host.style.minHeight = `${maxH}px`;
      const frame = host.querySelector('iframe');
      if (frame) frame.style.minHeight = `${maxH}px`;
    };

    const observer = new MutationObserver(onMutate);
    observer.observe(host, { attributes: true, attributeFilter: ['style'], childList: true });

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
      onMutate();
    };
    host.appendChild(script);

    // Высота устоялась — перестаём слушать, чтобы поздние сообщения виджета
    // (например, после ресайза соседней формы) уже ничего не двигали.
    const stop = window.setTimeout(() => observer.disconnect(), SETTLE_MS);

    return () => {
      window.clearTimeout(stop);
      observer.disconnect();
    };
  }, []);

  return <div ref={ref} className="getcourse-widget" />;
}
