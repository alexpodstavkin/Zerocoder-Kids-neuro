import type { ReactNode } from 'react'

// Кнопки Зерокодера. Канон — два варианта формы: pill (по умолчанию) и flat (radius 10px).
// variant: primary (заливка акцентом, pill) | flat (заливка акцентом, radius 10) |
//          ghost (белая, акцентная обводка) | dark (тёмная #141413).
type Variant = 'primary' | 'flat' | 'ghost' | 'dark'
const cls: Record<Variant, string> = {
  primary: 'btn-primary',
  flat: 'btn-flat',
  ghost: 'btn-ghost',
  dark: 'btn-dark',
}

export function Button({
  children,
  href = '#',
  variant = 'primary',
  sm = false,
  arrow = false,
  className = '',
}: {
  children: ReactNode
  href?: string
  variant?: Variant
  sm?: boolean
  arrow?: boolean
  className?: string
}) {
  return (
    <a href={href} className={`${cls[variant]} ${sm ? 'btn-sm' : ''} ${className}`}>
      {children}
      {arrow && <span aria-hidden>→</span>}
    </a>
  )
}
