import { asset } from '@/lib/asset'
import Image from 'next/image'

// Узкий подвал по ширине колонки: логотип, название и юридические ссылки
// (решение владельца 29.09.2026 — телефон, почту и реквизиты не показываем).
const LEGAL_LINKS = [
  { label: 'Политика конфиденциальности', href: 'https://zerocoder.ru/privacy' },
  { label: 'Политика безопасности платежей', href: 'https://zerocoder.ru/safety' },
  { label: 'Оферта', href: 'https://zerocoder.ru/terms' },
  {
    label: 'Лицензия на образовательную деятельность',
    href: 'https://islod.obrnadzor.gov.ru/rlic/details/0c9b345a-fc50-43c8-7248-1dc5987f2d33/',
  },
]

export function Footer() {
  return (
    <footer className="zb-footer">
      <div className="zb-footer-brand">
        <Image src={asset('/logo-icon.png')} alt="" width={24} height={24} />
        <b>Зерокодер</b>
      </div>
      <nav className="zb-footer-links">
        {LEGAL_LINKS.map((l) => (
          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
            {l.label}
          </a>
        ))}
      </nav>
    </footer>
  )
}
