'use client'
import { SEATS_TOTAL, useSeats } from './seatsStore'

// Блок срочности под подзаголовком Hero: «Мест осталось / N из 100 / Торопитесь…».
// Число N живое — уменьшается синхронно со всплывающими плашками (см. seatsStore).
export function SeatUrgency() {
  const seats = useSeats()
  return (
    <div className="mt-6 flex flex-col items-center gap-2">
      <span className="text-[26px] font-semibold uppercase tracking-wide text-sub">
        Мест осталось
      </span>
      <span className="text-6xl font-extrabold leading-none md:text-7xl" style={{ color: 'var(--acc)' }}>
        {seats} <span className="text-5xl font-bold text-sub md:text-6xl">из {SEATS_TOTAL}</span>
      </span>
      <span className="mt-1 text-[26px] font-semibold" style={{ color: 'var(--acc)' }}>
        Торопитесь, места заканчиваются!
      </span>
    </div>
  )
}
