import type { ReactNode } from 'react'

// Обёртка секции. Ритм фонов с живых лендов: белый ↔ светлый тинт акцента ↔ тёмная секция.
type Bg = 'white' | 'paper' | 'warm' | 'soft' | 'dark'
const bgMap: Record<Bg, string> = {
  white: 'bg-white text-ink',
  paper: 'bg-paper text-ink',
  warm: 'bg-paper-warm text-ink',
  soft: 'bg-acc-soft text-ink', // светлый тинт акцента (зелёный→#eaf7ee и т.п.)
  dark: 'bg-dark text-white',
}

// Заголовок секции (по канону — БЕЗ eyebrow-надзаголовков, сразу H2).
export function SectionHead({
  title,
  lead,
  className = '',
}: {
  title: ReactNode
  lead?: ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto mb-12 max-w-[760px] text-center ${className}`}>
      <h2 className="h2 normal-case">{title}</h2>
      {lead && <p className="lead mt-4 text-sub">{lead}</p>}
    </div>
  )
}

export function Section({
  children,
  bg = 'white',
  className = '',
  id,
}: {
  children: ReactNode
  bg?: Bg
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={`${bgMap[bg]} py-14 md:py-24 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  )
}
