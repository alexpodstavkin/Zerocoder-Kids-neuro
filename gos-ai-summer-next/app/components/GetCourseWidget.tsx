'use client';

import { useEffect, useRef } from 'react';

const SCRIPT_ID = 'a94e4797f7ca22c69cb9243054b13dd796b52cc3';
const SCRIPT_SRC = 'https://university.zerocoder.ru/pl/lite/widget/script?id=1623916';
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
