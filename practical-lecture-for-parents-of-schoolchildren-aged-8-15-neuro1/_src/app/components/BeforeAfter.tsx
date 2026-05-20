import { beforeAfter } from '@/lib/content'
import { IconCheck, IconX } from './icons'

export default function BeforeAfter() {
  return (
    <section className="section section-tinted">
      <div className="container-zc">
        <div className="max-w-3xl mb-8 md:mb-10">
          <span className="pill mb-4 inline-flex">{beforeAfter.badge}</span>
          <h2 className="h2 mt-4">
            {beforeAfter.title.pre}<span className="accent">{beforeAfter.title.accent}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          <div className="card">
            <div className="caption mb-5">Сейчас</div>
            <ul className="space-y-4">
              {beforeAfter.before.map((item, i) => (
                <li key={i} className="flex gap-3 body" style={{ color: 'var(--n-ink-2)' }}>
                  <span className="flex-shrink-0 mt-1" style={{ color: '#9F9F9F' }}>
                    <IconX />
                  </span>
                  <span>{item.replace(/ /g, ' ')}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card" style={{ background: 'var(--n-white)', border: '1px solid rgba(0,228,141,0.25)' }}>
            <div className="caption mb-5" style={{ color: '#00A862' }}>Через неделю после эфира</div>
            <ul className="space-y-4">
              {beforeAfter.after.map((item, i) => (
                <li key={i} className="flex gap-3 body" style={{ color: 'var(--n-ink)' }}>
                  <span className="flex-shrink-0 mt-1" style={{ color: 'var(--surface-cta)' }}>
                    <IconCheck />
                  </span>
                  <span>{item.replace(/ /g, ' ')}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
