'use client'
import { useEffect } from 'react'

// Автомасштаб «как в Tilda»: пропорциональный zoom от базовой ширины 1280,
// диапазон 0.70–1.40; ниже 860px выключается (телефоны идут на обычный адаптив).
const BASE = 1280
const MIN = 0.7
const MAX = 1.4
const OFF_BELOW = 860

// Правка владельца 11.09.2026: форма регистрации не масштабируется.
// 1) Компьютер. zoom на <html> проваливается и внутрь iframe виджета GetCourse —
//    поля и кнопка раздувались до 140% на широком мониторе и сжимались до 70% на узком.
//    Отдаём обратный множитель в --form-zoom, .gc-host гасит им zoom страницы:
//    итог 1, форма всегда в родном размере, ширину колонки занимает целиком.
// 2) iPhone. У полей виджета кегль меньше 16px, и Safari при тапе приближает
//    всю страницу — форма уезжает за край. Стили iframe нам недоступны, поэтому
//    на iOS дописываем maximum-scale=1: автоприближение пропадает, а щипок
//    iOS с 10-й версии всё равно разрешает. На Android не трогаем — там
//    maximum-scale запретил бы увеличивать страницу пальцами.
export function AutoScale() {
  useEffect(() => {
    const el = document.documentElement as HTMLElement & { style: CSSStyleDeclaration }
    const apply = () => {
      const w = window.innerWidth
      const scale = w <= OFF_BELOW ? 1 : Math.min(MAX, Math.max(MIN, w / BASE))
      el.style.setProperty('zoom', String(scale))
      el.style.setProperty('--page-zoom', String(scale))
      el.style.setProperty('--form-zoom', String(1 / scale))
    }
    apply()
    window.addEventListener('resize', apply)

    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    const meta = document.querySelector<HTMLMetaElement>('meta[name="viewport"]')
    if (isIOS && meta && !/maximum-scale/.test(meta.content)) {
      meta.content = `${meta.content}, maximum-scale=1`
    }

    return () => window.removeEventListener('resize', apply)
  }, [])
  return null
}
