import type { CSSProperties, ReactNode } from 'react'

// Мягкое появление на скролле: blur fade-in. Дозированно — на заголовках секций и карточках.
//
// ⚠️ Главное правило блока: БЕЗ JS содержимое обязано остаться ВИДИМЫМ.
// Раньше здесь был framer-motion с initial={{opacity:0}}, и это состояние
// запекалось прямо в статический HTML — на телефоне вся страница ниже Hero
// стояла чёрной пустотой, пока не доедет бандл (а по слабой сети он мог и не доехать).
// Теперь скрытое состояние включает не React, а инлайн-скрипт в <head>
// (см. app/layout.tsx): он вешает на <html> класс .reveal-js ДО первой отрисовки
// и сам ведёт IntersectionObserver. Ни один байт бандла для этого не нужен.
// При prefers-reduced-motion скрипт класс не вешает — блоки просто видны.
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <div
      className={className ? `reveal ${className}` : 'reveal'}
      style={delay ? ({ '--reveal-delay': `${delay}s` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  )
}
