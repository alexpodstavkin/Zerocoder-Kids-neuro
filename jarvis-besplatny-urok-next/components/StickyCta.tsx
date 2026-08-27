'use client'

import { useEffect, useState } from 'react'

// Мобильный sticky-бар (<=860px, там же, где выключен автомасштаб).
// Появляется, когда кнопка hero ушла из вьюпорта; прячется, когда в кадре форма.
export function StickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const heroCta = document.getElementById('hero-cta')
    const signup = document.getElementById('zapis')
    if (!heroCta || !signup) return

    let heroVisible = true
    let signupVisible = false

    const sync = () => setVisible(!heroVisible && !signupVisible)

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroVisible = entry.isIntersecting
        sync()
      },
      { threshold: 0 }
    )
    const signupObserver = new IntersectionObserver(
      ([entry]) => {
        signupVisible = entry.isIntersecting
        sync()
      },
      { threshold: 0 }
    )

    heroObserver.observe(heroCta)
    signupObserver.observe(signup)
    return () => {
      heroObserver.disconnect()
      signupObserver.disconnect()
    }
  }, [])

  return (
    <div className="sticky-cta" data-visible={visible ? 'true' : 'false'} aria-hidden={!visible}>
      <a href="#zapis" className="btn-primary btn-block !h-[52px]" tabIndex={visible ? 0 : -1}>
        Записаться на бесплатный урок
      </a>
    </div>
  )
}
