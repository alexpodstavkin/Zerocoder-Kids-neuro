import { research } from '@/lib/content'
import { IconArrow } from './icons'

export default function Research() {
  const c = research.conclusion
  return (
    <section className="section">
      <div className="container-zc">
        <div className="max-w-4xl mb-8 md:mb-10">
          <span className="pill mb-4 inline-flex">{research.badge}</span>
          <h2 className="h2 mt-4">
            {research.title.pre}
            <span className="accent whitespace-nowrap">{research.title.accent.replace(/ /g, ' ')}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {research.items.map((item, i) => (
            <div key={i} className="card">
              <div
                className={'font-bold tracking-tight whitespace-nowrap ' + (item.highlight ? 'accent' : '')}
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', lineHeight: 1, color: item.highlight ? undefined : 'var(--n-ink)' }}
              >
                {item.stat}
                {item.unit && (
                  <span
                    className="ml-1"
                    style={{ fontSize: '0.45em', color: 'var(--n-ink-2)', fontWeight: 500 }}
                  >
                    {item.unit}
                  </span>
                )}
              </div>
              <div className="body mt-4 mb-5" style={{ color: 'var(--n-ink-2)' }}>
                {item.desc.replace(/ /g, ' ')}
              </div>
              <hr className="hr-soft mb-3" />
              <div className="caption">{item.source.replace(/ /g, ' ')}</div>
            </div>
          ))}
        </div>

        {/* 5th conclusion bento — full width under the 4 stat cards */}
        <div className="mt-4 md:mt-5" id="researchConclusion">
          <div className="card card-dark p-6 md:p-8 lg:p-10">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              <div className="lg:col-span-8">
                <span
                  className="pill pill-emerald mb-4 inline-flex"
                >
                  {c.label}
                </span>
                <h3
                  className="h3 mt-3 mb-4"
                  style={{ color: 'var(--n-white)', fontSize: 'clamp(1.375rem, 2.2vw, 1.875rem)', lineHeight: 1.2 }}
                >
                  {c.title.replace(/ /g, ' ')}
                </h3>
                <p className="body" style={{ color: 'rgba(255,255,255,0.78)' }}>
                  {c.text.replace(/ /g, ' ')}
                </p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <a href="#register" data-open-register="" className="btn btn-cta">
                  {c.cta}
                  <IconArrow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
