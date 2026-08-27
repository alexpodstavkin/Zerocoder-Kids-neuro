'use client'

import { useState } from 'react'
import { Icon } from './Icon'

// Ровно три поля: Имя / Телефон / E-mail. Возраст ребёнка убран сознательно —
// он отфильтрован pill'ом на первом экране и уточняется менеджером на звонке.
type FieldName = 'name' | 'phone' | 'email'
type Errors = Partial<Record<FieldName, string>>

const ERROR_TEXT: Record<FieldName, string> = {
  name: 'Введите имя',
  phone: 'Введите номер телефона',
  email: 'Проверьте адрес почты',
}

function validate(values: Record<FieldName, string>): Errors {
  const errors: Errors = {}
  if (values.name.trim().length < 2) errors.name = ERROR_TEXT.name
  // «номер есть» = не меньше 10 цифр (РФ-номер без учёта форматирования)
  if (values.phone.replace(/\D/g, '').length < 10) errors.phone = ERROR_TEXT.phone
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) errors.email = ERROR_TEXT.email
  return errors
}

const EMPTY: Record<FieldName, string> = { name: '', phone: '', email: '' }

export function SignupForm() {
  const [values, setValues] = useState<Record<FieldName, string>>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  function handleChange(field: FieldName, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      const first = (['name', 'phone', 'email'] as FieldName[]).find((f) => nextErrors[f])
      if (first) document.getElementById(`field-${first}`)?.focus()
      return
    }

    // TODO: интеграция с GetCourse — сюда подставить отправку заявки
    // (виджет GetCourse или POST на серверный роут-прокси школы).
    // Пока заявка никуда не уходит: внешних запросов на сторонние домены на лендинге нет.
    setSent(true)
  }

  if (sent) {
    return (
      <div
        className="form-panel rounded-[20px] border p-7 d:p-8"
        style={{ borderColor: 'var(--line-2)', background: 'var(--surf-2)' }}
        role="status"
        aria-live="polite"
      >
        <p className="text-[22px] font-bold leading-[1.25] tracking-[-0.01em] text-[color:var(--fg)]">
          Заявка отправлена
        </p>
        <p className="mt-3 text-[16px] font-normal leading-[1.6] text-[color:var(--fg-2)]">
          Спасибо! Мы позвоним в ближайшее время и подберём удобный день и час.
        </p>
      </div>
    )
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="form-panel rounded-[20px] border p-6 d:p-7"
      style={{ borderColor: 'var(--line-2)', background: 'var(--surf-2)' }}
    >
      <Field
        name="name"
        label="Ваше имя"
        placeholder="Как к вам обращаться"
        type="text"
        autoComplete="name"
        value={values.name}
        error={errors.name}
        onChange={handleChange}
      />
      <div className="mt-4">
        <Field
          name="phone"
          label="Телефон"
          placeholder="+7 900 000-00-00"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          value={values.phone}
          error={errors.phone}
          onChange={handleChange}
        />
      </div>
      <div className="mt-4">
        <Field
          name="email"
          label="E-mail"
          placeholder="Куда прислать подтверждение"
          type="email"
          autoComplete="email"
          inputMode="email"
          value={values.email}
          error={errors.email}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn-primary btn-block mt-6 !h-14">
        Записаться на бесплатный урок
      </button>

      <p className="mt-4 text-[12px] font-normal leading-[1.45] text-[color:var(--fg-3)]">
        Нажимая кнопку, вы соглашаетесь с{' '}
        <a
          href="https://zerocoder.ru/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline transition-colors hover:text-[color:var(--fg-2)]"
        >
          политикой конфиденциальности
        </a>{' '}
        и{' '}
        <a
          href="https://zerocoder.ru/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="underline transition-colors hover:text-[color:var(--fg-2)]"
        >
          офертой
        </a>
        .
      </p>
    </form>
  )
}

function Field({
  name,
  label,
  placeholder,
  type,
  autoComplete,
  inputMode,
  value,
  error,
  onChange,
}: {
  name: FieldName
  label: string
  placeholder: string
  type: 'text' | 'tel' | 'email'
  autoComplete: string
  inputMode?: 'tel' | 'email'
  value: string
  error?: string
  onChange: (field: FieldName, value: string) => void
}) {
  const id = `field-${name}`
  const errorId = `${id}-error`
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`input ${error ? 'input-error' : ''}`}
      />
      {error && (
        <p id={errorId} className="field-error">
          {/* цвет не единственный носитель смысла: иконка + текст */}
          <Icon name="exclamation" size={14} color="currentColor" />
          {error}
        </p>
      )}
    </div>
  )
}
