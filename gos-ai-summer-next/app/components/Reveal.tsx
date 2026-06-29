'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
};

export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !ref.current) return;
    const node = ref.current;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(node);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const TagAny = Tag as unknown as React.ElementType;
  return (
    <TagAny
      ref={ref as React.Ref<HTMLElement>}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </TagAny>
  );
}
