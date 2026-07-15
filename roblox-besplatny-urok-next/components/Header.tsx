import Image from 'next/image'
import { Button } from './Button'

// Sticky-шапка с backdrop-blur (как на живых лендах). Логотип: иконка + «Зерокодер».
// Дефолтные ссылки ведут только на существующие секции страницы (#why/#result/#how/#faq/#cta).
type Link = { label: string; href: string }

export function Header({
  links = [
    { label: 'Зачем это', href: '#why' },
    { label: 'Что получит', href: '#result' },
    { label: 'Как проходит', href: '#how' },
    { label: 'Вопросы', href: '#faq' },
  ],
  cta = { label: 'Записаться на урок', href: '#cta' },
}: {
  links?: Link[]
  cta?: Link
}) {
  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur-md" style={{ borderColor: 'var(--bord)', background: 'rgba(255,255,255,.82)' }}>
      <div className="container-x flex h-[66px] items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <Image src="/logo-icon.png" alt="Зерокодер" width={30} height={30} priority />
          <span className="text-[20px] font-extrabold tracking-[-0.02em]">Зерокодер</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[15px] font-semibold text-ink transition-colors hover:text-acc">
              {l.label}
            </a>
          ))}
        </nav>
        {/* CTA на подложке --acc-dark: мелкий белый текст 13px на светлом оранже давал ~3:1;
            на --acc-dark контраст поднимается до ~AA для мелкого шрифта. */}
        <Button href={cta.href} sm className="bg-acc-dark">
          {cta.label}
        </Button>
      </div>
    </header>
  )
}
