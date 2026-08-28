import type { ReactNode } from 'react'
import { Button } from './Button'
import { Photo } from './Photo'

// Hero: сетка текст (1.1fr) + визуал (0.9fr). На живых лендах справа — фото/иллюстрация,
// слева — pill с датой/форматом, плотный H1 с акцентным выделением, lead в карточке, CTA.
export function Hero({
  badge,
  title,
  lead,
  primary = { label: 'Участвовать бесплатно', href: '#cta' },
  secondary,
  photoSrc,
  photoPlaceholder = '🧠',
}: {
  badge?: ReactNode
  title: ReactNode
  lead?: ReactNode
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string }
  photoSrc?: string
  photoPlaceholder?: string
}) {
  return (
    <section className="py-10 md:py-16">
      <div className="container-x grid items-stretch gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-center">
          {badge && <span className="pill w-fit">{badge}</span>}
          <h1 className="h1 my-5">{title}</h1>
          {lead && (
            <div className="mb-6 rounded-lg border bg-paper p-5 md:p-6" style={{ borderColor: 'var(--bord)' }}>
              <p className="lead">{lead}</p>
            </div>
          )}
          <div className="flex flex-wrap items-center gap-3.5">
            <Button href={primary.href} arrow>
              {primary.label}
            </Button>
            {secondary && (
              <Button href={secondary.href} variant="ghost">
                {secondary.label}
              </Button>
            )}
          </div>
        </div>
        <Photo
          src={photoSrc}
          aspect="auto"
          radius="xl"
          placeholder={photoPlaceholder}
          className="h-full min-h-[280px] shadow-hero"
        />
      </div>
    </section>
  )
}
