import type { ReactNode } from 'react'

// Stat-ячейка: крупная цифра акцентом + подпись. Чаще живёт на тёмной секции.
export function StatCard({ num, children }: { num: ReactNode; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-bord-dark bg-dark-2 p-8">
      <div className="text-[clamp(40px,5vw,64px)] font-extrabold leading-none tracking-tightest text-acc">
        {num}
      </div>
      <div className="mt-2.5 text-white/65">{children}</div>
    </div>
  )
}

export function Stats({ children }: { children: ReactNode }) {
  return <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">{children}</div>
}
