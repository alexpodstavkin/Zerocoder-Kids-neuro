'use client'
import { useEffect, useState } from 'react'

// Липкая кнопка внизу экрана на мобильных. Появляется после первого экрана.
// Ведёт к форме записи (#cta). На desktop скрыта (md:hidden). Светлая тема.
export function StickyCTA({ href = '#register', label = 'Записаться на бесплатное занятие' }: { href?: string; label?: string }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t p-3 backdrop-blur-md transition-transform duration-300 md:hidden ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ background: 'rgba(255,255,255,0.95)', borderColor: 'var(--bord)' }}
    >
      <a href={href} className="btn-flat w-full">
        {label}
      </a>
    </div>
  )
}
