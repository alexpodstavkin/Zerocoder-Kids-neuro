'use client'
import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

// Мягкое появление на скролле: blur fade-in. Дозированно — на заголовках секций и карточках.
// При prefers-reduced-motion блок появляется сразу, без движения и блюра.
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const reduced = useReducedMotion()

  if (reduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.35, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
