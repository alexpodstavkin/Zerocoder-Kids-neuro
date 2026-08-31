'use client'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import type { ReactNode } from 'react'

// Мягкое появление на скролле: blur fade-in.
// ВАЖНО: скрытое состояние живёт только при работающем JS (html.js), поэтому
// в статическом HTML и при выключенном JS контент виден сразу — страница
// никогда не остаётся пустой.
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div
      ref={ref}
      className={`rvl ${inView ? 'rvl-in' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
