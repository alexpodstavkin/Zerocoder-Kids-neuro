import type { ReactNode } from 'react'
import { Button } from './Button'

// Финальный CTA — самая насыщенная секция: тёмная градиентная панель, pill, H2, lead, кнопка.
export function FinalCta({
  badge,
  title,
  lead,
  cta = { label: 'Участвовать бесплатно', href: '#' },
  id = 'cta',
}: {
  badge?: ReactNode
  title: ReactNode
  lead?: ReactNode
  cta?: { label: string; href: string }
  id?: string
}) {
  return (
    <section id={id} className="py-14 md:py-24">
      <div className="container-x">
        <div className="grad-dark relative overflow-hidden rounded-xl px-6 py-12 text-center text-white md:px-12 md:py-16">
          {/* мягкий акцентный блоб для глубины */}
          <div className="blob absolute -right-20 -top-24 h-72 w-72 opacity-40" style={{ background: 'var(--acc)' }} />
          <div className="relative z-10">
            {badge && <span className="pill-dark">{badge}</span>}
            <h2 className="h2 mt-4">{title}</h2>
            {lead && <p className="lead mx-auto mt-4 max-w-[620px] text-white/70">{lead}</p>}
            <div className="mt-8 flex justify-center">
              <Button href={cta.href} arrow>
                {cta.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
