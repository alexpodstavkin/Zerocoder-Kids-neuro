'use client'
import { useEffect, useState } from 'react'
import { GetCourseWidget } from './GetCourseWidget'

// Всплывающая форма записи. Открывается по клику на любую кнопку-триггер
// (ссылка с href="#register") — Hero, «Как проходит урок», sticky-CTA.
// Закрывается по клику на затемнение, крестик или Escape. Блок CTA больше не нужен.
export function RegisterModal() {
  const [open, setOpen] = useState(false)

  // Глобальный перехват кликов по триггерам записи.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const trigger = (e.target as HTMLElement)?.closest('a[href="#register"]')
      if (trigger) {
        e.preventDefault()
        setOpen(true)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  // Escape + блокировка прокрутки фона, пока модалка открыта.
  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* затемнение фона — клик закрывает */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-[520px]">
        {/* крестик закрытия */}
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Закрыть"
          className="absolute -right-2 -top-2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink shadow-soft transition-colors hover:text-acc"
          style={{ border: '1px solid var(--bord)' }}
        >
          <i className="fi fi-rr-cross-small text-[18px]" aria-hidden />
        </button>

        {/* Форма записи GetCourse — заявки падают в CRM университета */}
        <div
          className="max-h-[85vh] overflow-y-auto rounded-xl border bg-white p-6 shadow-soft md:p-7"
          style={{ borderColor: 'var(--bord)' }}
        >
          <h3 className="h3 mb-4 text-center text-ink">Запишите ребёнка на бесплатное занятие</h3>
          <GetCourseWidget />
        </div>
      </div>
    </div>
  )
}
