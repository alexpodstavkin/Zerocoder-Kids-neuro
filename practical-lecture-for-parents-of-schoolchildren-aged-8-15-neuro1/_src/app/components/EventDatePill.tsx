'use client'

import { useEffect, useState } from 'react'
import { IconCalendar } from './icons'

const MONTHS = [
  'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
]

function nextWebinarDate(): string {
  const now = new Date()
  const moscowMs = now.getTime() + (now.getTimezoneOffset() + 180) * 60_000
  const m = new Date(moscowMs)
  if (m.getHours() >= 13) {
    m.setDate(m.getDate() + 1)
  }
  return `${m.getDate()} ${MONTHS[m.getMonth()]} · 13:00 МСК`
}

export default function EventDatePill() {
  const [label, setLabel] = useState<string>('Ближайший вебинар · 13:00 МСК')

  useEffect(() => {
    const update = () => setLabel(nextWebinarDate())
    update()
    const id = setInterval(update, 60_000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="pill pill-emerald" suppressHydrationWarning>
      <IconCalendar /> {label}
    </span>
  )
}
