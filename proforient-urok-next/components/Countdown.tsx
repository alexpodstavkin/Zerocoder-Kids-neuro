'use client'
import { useEffect, useState } from 'react'

// Evergreen-таймер: дедлайн = первый визит + 12 часов (localStorage).
// По истечении дедлайн перезапускается от текущего момента.
const KEY = 'zc-proforient-deadline-12h'
const SPAN = 12 * 60 * 60 * 1000

function getDeadline(): number {
  const now = Date.now()
  let d = 0
  try {
    d = Number(window.localStorage.getItem(KEY)) || 0
  } catch {}
  if (!d || d <= now) {
    d = now + SPAN
    try {
      window.localStorage.setItem(KEY, String(d))
    } catch {}
  }
  return d
}

type Parts = { h: number; m: number; s: number }

function split(ms: number): Parts {
  const t = Math.max(0, Math.floor(ms / 1000))
  return { h: Math.floor(t / 3600), m: Math.floor((t % 3600) / 60), s: t % 60 }
}

// Плитки как у megatimer в образце: 30×44, две половинки по 22px, Arial 32, подпись Arial 14.
function Tile({ ch }: { ch: string }) {
  return (
    <span className="zb-tile">
      {ch}
      <span aria-hidden className="zb-tile-split" />
    </span>
  )
}

function Unit({ value, pad, label }: { value: number; pad: number; label: string }) {
  const digits = String(value).padStart(pad, '0').split('')
  return (
    <div className="zb-unit">
      <div className="zb-digits">
        {digits.map((c, i) => (
          <Tile key={i} ch={c} />
        ))}
      </div>
      <span className="zb-unit-label">{label}</span>
    </div>
  )
}

export function Countdown() {
  const [p, setP] = useState<Parts>({ h: 12, m: 0, s: 0 })

  useEffect(() => {
    let deadline = getDeadline()
    const tick = () => {
      if (deadline <= Date.now()) deadline = getDeadline()
      setP(split(deadline - Date.now()))
    }
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="zb-card">
      <p className="zb-card-title">До конца записи:</p>
      <div className="zb-timer">
        <Unit value={p.h} pad={2} label="часов" />
        <span className="zb-sep" />
        <Unit value={p.m} pad={2} label="минут" />
        <span className="zb-sep" />
        <Unit value={p.s} pad={2} label="секунд" />
      </div>
    </div>
  )
}
