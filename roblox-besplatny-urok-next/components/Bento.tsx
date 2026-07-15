import type { ReactNode } from 'react'
import { Icon } from './Icon'

// Бенто-сетка и ячейка. Сетка: 2/3/4 колонки на desktop → 1 на mobile, gap 20–24px.
export function Bento({ children, cols = 4, className = '' }: { children: ReactNode; cols?: 2 | 3 | 4; className?: string }) {
  const colMap = { 2: 'md:grid-cols-2', 3: 'md:grid-cols-3', 4: 'md:grid-cols-4' }
  return <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 ${colMap[cols]} ${className}`}>{children}</div>
}

// Ячейка. variant: plain (белая+обводка) | paper | accent (заливка акцентом) | dark (тёмная).
// span — на сколько колонок растянуть (визуальный ритм бенто). icon — имя Uicons.
type Variant = 'plain' | 'paper' | 'accent' | 'dark'
const vMap: Record<Variant, string> = {
  plain: 'bg-white border text-ink',
  paper: 'bg-paper border-transparent text-ink',
  accent: 'bg-acc border-transparent text-white',
  dark: 'bg-dark border-transparent text-white',
}

export function Cell({
  icon,
  title,
  children,
  variant = 'plain',
  span = 1,
  float = false,
  className = '',
}: {
  icon?: string
  title?: ReactNode
  children?: ReactNode
  variant?: Variant
  span?: 1 | 2
  float?: boolean
  className?: string
}) {
  const onColor = variant === 'accent' || variant === 'dark'
  return (
    <div
      className={`rounded-xl p-7 transition-all duration-200 hover:-translate-y-0.5 ${vMap[variant]} ${
        span === 2 ? 'md:col-span-2' : ''
      } ${float ? 'card-float' : ''} ${className}`}
      style={{ borderColor: variant === 'plain' ? 'var(--bord)' : undefined }}
    >
      {icon && (
        <span
          className="mb-4 flex h-[46px] w-[46px] items-center justify-center rounded-md text-[22px]"
          style={
            onColor
              ? { background: 'rgba(255,255,255,.18)', color: '#fff' }
              : { background: 'var(--acc-soft)', color: 'var(--acc)' }
          }
        >
          <Icon name={icon} size={22} color="currentColor" />
        </span>
      )}
      {title && <h3 className="h3 mb-2.5">{title}</h3>}
      {children && (
        <p className={`text-[15px] ${onColor ? 'text-white' : 'text-sub'}`}>{children}</p>
      )}
    </div>
  )
}
