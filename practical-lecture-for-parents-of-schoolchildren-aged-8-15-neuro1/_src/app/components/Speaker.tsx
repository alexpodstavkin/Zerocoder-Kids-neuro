import { speaker } from '@/lib/content'
import { asset } from '@/lib/asset'

export default function Speaker() {
  return (
    <section id="speaker" className="section">
      <div className="container-zc">
        <div className="max-w-3xl mb-8 md:mb-10">
          <h2 className="h2 mt-4">
            {speaker.title.pre}<span className="accent">{speaker.title.accent.replace(/ /g, ' ')}</span>{speaker.title.post}
          </h2>
        </div>

        <div className="card p-6 md:p-8 lg:p-10">
          <div className="grid md:grid-cols-12 gap-6 md:gap-10 md:items-stretch">
            <div className="md:col-span-4">
              <div className="aspect-[4/5] md:aspect-auto md:h-full md:min-h-[420px] rounded-2xl relative overflow-hidden bg-seashell">
                <img
                  src={asset('/zaitseva.jpg')}
                  alt={speaker.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: 'center top' }}
                  loading="lazy"
                />
                <div
                  className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 rounded-xl px-3 py-2.5"
                  style={{
                    background: 'rgba(34,34,34,0.62)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                  }}
                >
                  <div
                    className="caption"
                    style={{
                      color: 'rgba(255,255,255,0.9)',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      fontSize: '0.6875rem',
                    }}
                  >
                    {speaker.role}
                  </div>
                  <div className="font-bold text-white" style={{ fontSize: '0.9375rem' }}>{speaker.brand}</div>
                </div>
              </div>
            </div>
            <div className="md:col-span-8">
              <h3 className="font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1.1 }}>
                {speaker.name}
              </h3>

              <ul className="space-y-4">
                {speaker.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="accent font-bold flex-shrink-0" style={{ fontSize: '1rem', lineHeight: 1.5 }}>→</span>
                    <span className="body" style={{ color: 'var(--n-ink-2)' }}>
                      {b.strong && <strong style={{ color: 'var(--n-ink)' }}>{b.strong.replace(/ /g, ' ')}</strong>}
                      {b.text.replace(/ /g, ' ')}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
