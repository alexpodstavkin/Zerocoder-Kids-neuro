'use client';

import type { ComponentPropsWithoutRef, MouseEvent } from 'react';
import { trackGoal } from './analytics';

type CtaLinkProps = ComponentPropsWithoutRef<'a'> & {
  /** Идентификатор цели — список см. в analytics.ts */
  goal: string;
};

/**
 * Ссылка-CTA с отправкой цели в Яндекс.Метрику и Top.Mail.Ru.
 * Вынесена в отдельный клиентский компонент, чтобы секции
 * (TopBar, Hero, Program, StickyMobileCta) оставались серверными.
 */
export default function CtaLink({ goal, href = '#cta', onClick, ...props }: CtaLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    trackGoal(goal);
    onClick?.(event);
  };

  return <a href={href} onClick={handleClick} {...props} />;
}
