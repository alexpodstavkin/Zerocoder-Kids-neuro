'use client'
import { useState } from 'react'

// Форма записи на бесплатный урок (светлая тема). Поля: имя ребёнка, возраст, телефон родителя.
// Бэкенда нет — onSubmit валидирует required и логирует в консоль, показывает «спасибо».
export function RegisterForm({
  id,
  title = 'Запишите ребёнка на бесплатный урок',
  hideTitle = false,
  cta = 'Записаться на бесплатный урок',
  note = 'Перезвоним один раз, чтобы подобрать удобное время',
}: {
  id?: string
  title?: string
  hideTitle?: boolean
  cta?: string
  note?: string
}) {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      childName: (form.elements.namedItem('childName') as HTMLInputElement)?.value,
      age: (form.elements.namedItem('age') as HTMLInputElement)?.value,
      parentPhone: (form.elements.namedItem('parentPhone') as HTMLInputElement)?.value,
    }
    // Заглушка отправки: здесь будет интеграция с CRM/бэкендом.
    console.log('[Заявка на бесплатный урок]', data)
    setSent(true)
  }

  // Светлые поля ввода: белый фон, тёмный текст, серый placeholder, focus — акцентом.
  const fieldCls =
    'w-full rounded-md border bg-white px-4 py-3.5 text-[16px] text-ink outline-none transition-colors placeholder:text-sub focus:border-acc'
  const fieldStyle = {
    borderColor: 'var(--bord)',
  }

  return (
    <div
      id={id}
      className="rounded-xl border bg-white p-6 shadow-soft md:p-7"
      style={{ borderColor: 'var(--bord)' }}
    >
      {sent ? (
        <div className="flex flex-col items-center gap-3 py-8 text-center">
          <span className="ico-chip-green h-14 w-14 text-[28px]">
            <i className="fi fi-sr-check" aria-hidden />
          </span>
          <h3 className="h3 text-ink">Заявка принята!</h3>
          <p className="text-sub">
            Мы свяжемся с вами по указанному телефону и подберём удобное время урока
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
          {!hideTitle && <h3 className="h3 mb-1 text-ink">{title}</h3>}
          <input
            name="childName"
            type="text"
            required
            autoComplete="off"
            placeholder="Имя ребёнка"
            className={fieldCls}
            style={fieldStyle}
          />
          <input
            name="age"
            type="number"
            required
            min={8}
            max={14}
            inputMode="numeric"
            placeholder="Возраст"
            className={fieldCls}
            style={fieldStyle}
          />
          <input
            name="parentPhone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="Телефон родителя"
            className={fieldCls}
            style={fieldStyle}
          />
          <button type="submit" className="btn-flat w-full">
            {cta}
          </button>
          {note && <p className="text-center text-[13px] leading-snug text-sub">{note}</p>}
          <p className="text-center text-[12px] leading-snug text-sub">
            Нажимая кнопку, вы соглашаетесь с{' '}
            <a href="https://zerocoder.ru/privacy" className="underline hover:text-ink">
              политикой конфиденциальности
            </a>
          </p>
        </form>
      )}
    </div>
  )
}
