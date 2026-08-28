'use client'
import { useEffect } from 'react'

// Автомасштаб «как в Tilda»: пропорциональный zoom от базовой ширины 1280,
// диапазон 0.70–1.40; ниже 860px выключается (телефоны идут на обычный адаптив).
const BASE = 1280
const MIN = 0.7
const MAX = 1.4
const OFF_BELOW = 860

export function AutoScale() {
  useEffect(() => {
    const el = document.documentElement as HTMLElement & { style: CSSStyleDeclaration }
    const apply = () => {
      const w = window.innerWidth
      if (w <= OFF_BELOW) {
        el.style.setProperty('zoom', '1')
        return
      }
      const scale = Math.min(MAX, Math.max(MIN, w / BASE))
      el.style.setProperty('zoom', String(scale))
    }
    apply()
    window.addEventListener('resize', apply)
    return () => window.removeEventListener('resize', apply)
  }, [])
  return null
}
