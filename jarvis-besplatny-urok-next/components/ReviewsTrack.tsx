'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

// Трек отзывов. Десктоп (>860px) — обычный masonry из globals.css, JS не работает.
// Мобильный (<=860px) — горизонтальная snap-карусель с точками-индикаторами.
//
// Единственная автоматика — возврат в начало: когда пользователь долистал до
// последней карточки и 10 секунд ничего не делает, трек мягко уезжает к первой.
// Автопрокрутки между карточками нет.
const RETURN_DELAY = 10000
const END_EPS = 4 // допуск в px: браузеры не всегда добирают scrollLeft до максимума

export function ReviewsTrack({ children, count }: { children: ReactNode; count: number }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<number | null>(null)
  const rafRef = useRef(0)
  const [isMobile, setIsMobile] = useState(false)
  const [active, setActive] = useState(0)

  // Следим за шириной отдельно: на десктопе вся логика карусели должна молчать.
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 860px)')
    const sync = () => setIsMobile(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (!isMobile) {
      setActive(0)
      return
    }
    const track = trackRef.current
    if (!track) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Таймер всегда ровно один: перед новой постановкой старый снимается.
    const clearTimer = () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current)
        timerRef.current = null
      }
    }

    const maxScroll = () => track.scrollWidth - track.clientWidth
    const atEnd = () => {
      const max = maxScroll()
      return max > 0 && track.scrollLeft >= max - END_EPS
    }

    const armReturn = () => {
      clearTimer()
      if (!atEnd()) return
      timerRef.current = window.setTimeout(() => {
        timerRef.current = null
        // За 10 секунд пользователь мог уйти с конца — проверяем ещё раз,
        // чтобы возврат не сработал внезапно посреди листания.
        if (!atEnd()) return
        track.scrollTo({ left: 0, behavior: reduced ? 'auto' : 'smooth' })
      }, RETURN_DELAY)
    }

    const sync = () => {
      const max = maxScroll()
      const idx = max > 0 ? Math.round((track.scrollLeft / max) * (count - 1)) : 0
      setActive(Math.min(count - 1, Math.max(0, idx)))
      armReturn()
    }

    // Любой скролл снимает таймер (через clearTimer внутри armReturn)
    // и заново ставит его, только если трек остановился на последней карточке.
    const onScroll = () => {
      if (rafRef.current) return
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = 0
        sync()
      })
    }
    // Палец на экране — возврат отменяется, пока пользователь держит трек.
    const onPointerDown = () => clearTimer()
    const onPointerUp = () => armReturn()

    track.addEventListener('scroll', onScroll, { passive: true })
    track.addEventListener('pointerdown', onPointerDown, { passive: true })
    track.addEventListener('pointerup', onPointerUp, { passive: true })
    track.addEventListener('pointercancel', onPointerUp, { passive: true })
    sync()

    return () => {
      track.removeEventListener('scroll', onScroll)
      track.removeEventListener('pointerdown', onPointerDown)
      track.removeEventListener('pointerup', onPointerUp)
      track.removeEventListener('pointercancel', onPointerUp)
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current)
        rafRef.current = 0
      }
      clearTimer()
    }
  }, [isMobile, count])

  const goTo = useCallback((index: number) => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[index] as HTMLElement | undefined
    if (!card) return
    const left = card.offsetLeft - (track.clientWidth - card.clientWidth) / 2
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    track.scrollTo({ left: Math.max(0, left), behavior: reduced ? 'auto' : 'smooth' })
  }, [])

  return (
    <>
      <div ref={trackRef} className="reviews mt-9 d:mt-10">
        {children}
      </div>

      <div className="reviews-dots" role="group" aria-label="Навигация по отзывам">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            type="button"
            className="reviews-dot"
            aria-current={i === active}
            aria-label={`Отзыв ${i + 1} из ${count}`}
            onClick={() => goTo(i)}
          >
            <span aria-hidden="true" />
          </button>
        ))}
      </div>
    </>
  )
}
