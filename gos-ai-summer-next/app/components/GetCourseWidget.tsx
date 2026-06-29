'use client';

import { useEffect, useRef } from 'react';

const SCRIPT_ID = 'a94e4797f7ca22c69cb9243054b13dd796b52cc3';
const SCRIPT_SRC = 'https://university.zerocoder.ru/pl/lite/widget/script?id=1623916';

export default function GetCourseWidget() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof document === 'undefined' || !ref.current) return;
    if (document.getElementById(SCRIPT_ID)) return;

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = SCRIPT_SRC;
    script.async = true;
    ref.current.appendChild(script);
  }, []);

  return <div ref={ref} className="getcourse-widget" />;
}
