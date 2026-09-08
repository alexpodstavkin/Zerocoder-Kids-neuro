'use client';

import { useEffect, useRef } from 'react';

// Форма регистрации мини-курса. Виджет выдан владельцем 08.09.2026:
// аккаунт school-genius.club, воронка 1653389 — собственная, не общая с gos-ai-urok.
const SCRIPT_ID = '601d16f3fec216e40acfbb3dd2f26177ad03144e';
const SCRIPT_SRC = 'https://school-genius.club/pl/lite/widget/script?id=1653389';
const START_EVENT = 'StartWidget' + SCRIPT_ID;
const START_FN = 'startWidget' + SCRIPT_ID;

export default function GetCourseWidget() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof document === 'undefined' || !ref.current) return;
    if (document.getElementById(SCRIPT_ID)) return;

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => {
      // DOMContentLoaded has already fired in our SPA — the widget's auto-init
      // listener won't run. Trigger the widget manually via its custom event
      // or by calling its global init function directly.
      try {
        document.dispatchEvent(new Event(START_EVENT));
      } catch {
        const w = window as unknown as Record<string, unknown>;
        const fn = w[START_FN];
        if (typeof fn === 'function') (fn as () => void)();
      }
    };
    ref.current.appendChild(script);
  }, []);

  return <div ref={ref} className="getcourse-widget" />;
}
