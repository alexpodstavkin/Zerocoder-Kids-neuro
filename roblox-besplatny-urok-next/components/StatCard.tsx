import type { ReactNode } from 'react'

// Stat-ячейка: крупная цифра акцентом + подпись.
// light=false — тёмная секция (белый текст); light=true — светлая секция (ink-текст).
export function StatCard({
  num,
  children,
  light = false,
}: {
  num: ReactNode
  children: ReactNode
  light?: boolean
}) {
  return (
    <div
      className={
        light
          ? 'rounded-lg border bg-white p-8'
          : 'rounded-lg border border-bord-dark bg-dark-2 p-8'
      }
      style={light ? { borderColor: 'var(--bord)' } : undefined}
    >
      <div className="text-[clamp(40px,5vw,64px)] font-extrabold leading-none tracking-tightest text-acc">
        {num}
      </div>
      <div className={`mt-2.5 ${light ? 'text-ink/70' : 'text-white/65'}`}>{children}</div>
    </div>
  )
}

export function Stats({ children }: { children: ReactNode }) {
  return <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">{children}</div>
}
