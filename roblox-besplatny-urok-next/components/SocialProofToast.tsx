'use client'
import { useEffect, useRef, useState } from 'react'
import { decrementSeat } from './seatsStore'

// Имена с полом — для правильного «записался / записалась».
const PEOPLE: { name: string; f: boolean }[] = [
  { name: 'Артём', f: false },
  { name: 'Мария', f: true },
  { name: 'Кирилл', f: false },
  { name: 'София', f: true },
  { name: 'Максим', f: false },
  { name: 'Анна', f: true },
  { name: 'Егор', f: false },
  { name: 'Алиса', f: true },
  { name: 'Тимофей', f: false },
  { name: 'Варвара', f: true },
  { name: 'Матвей', f: false },
  { name: 'Ева', f: true },
  { name: 'Данил', f: false },
  { name: 'Полина', f: true },
  { name: 'Роман', f: false },
  { name: 'Виктория', f: true },
]

// «N минут назад» с правильным склонением.
function minutesAgo(n: number) {
  const mod10 = n % 10
  const mod100 = n % 100
  let word = 'минут'
  if (mod10 === 1 && mod100 !== 11) word = 'минуту'
  else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) word = 'минуты'
  return `${n} ${word} назад`
}

type Toast = { name: string; f: boolean; mins: number }

// Всплывающая плашка соц-доказательства. Появляется циклично: показывает случайное
// имя + «записался(ась) на пробное занятие» и «N минут назад». Каждое появление
// списывает одно свободное место (см. seatsStore, floor = 5).
export function SocialProofToast() {
  const [toast, setToast] = useState<Toast | null>(null)
  const [show, setShow] = useState(false)
  const timers = useRef<number[]>([])

  useEffect(() => {
    let cancelled = false
    const push = (fn: () => void, ms: number) => {
      const id = window.setTimeout(() => {
        if (!cancelled) fn()
      }, ms)
      timers.current.push(id)
    }

    const cycle = () => {
      if (cancelled) return
      const p = PEOPLE[Math.floor(Math.random() * PEOPLE.length)]
      const mins = 3 + Math.floor(Math.random() * 4) // 3–6 минут назад
      setToast({ name: p.name, f: p.f, mins })
      setShow(true)
      decrementSeat() // каждая плашка «съедает» место (не ниже 5)
      push(() => setShow(false), 6000) // держим видимой 6 секунд
      push(cycle, 6000 + 11000 + Math.floor(Math.random() * 9000)) // пауза 11–20 c, затем повтор
    }

    push(cycle, 4000) // первая плашка через 4 секунды после загрузки

    return () => {
      cancelled = true
      timers.current.forEach((id) => clearTimeout(id))
      timers.current = []
    }
  }, [])

  return (
    <div
      className={`fixed bottom-24 left-4 z-40 max-w-[300px] transition-all duration-500 md:bottom-6 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
      aria-live="polite"
      aria-hidden={!show}
    >
      {toast && (
        <div
          className="rounded-2xl border bg-white px-4 py-3 shadow-soft"
          style={{ borderColor: 'var(--bord)' }}
        >
          <div className="min-w-0">
            <p className="text-[14px] leading-snug text-ink">
              <span className="font-semibold">{toast.name}</span> записал{toast.f ? 'ась' : 'ся'} на пробное занятие
            </p>
            <p className="mt-0.5 text-[12px] text-sub">{minutesAgo(toast.mins)}</p>
          </div>
        </div>
      )}
    </div>
  )
}
