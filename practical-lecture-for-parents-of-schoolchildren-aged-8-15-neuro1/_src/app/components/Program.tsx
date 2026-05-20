import { program } from '@/lib/content'

export default function Program() {
  return (
    <section id="program" className="section section-tinted">
      <div className="container-zc">
        <div className="max-w-4xl mb-8 md:mb-10">
          <h2 className="h2 mt-4">
            {program.title.pre}<span className="accent">{program.title.accent.replace(/ /g, ' ')}</span>
          </h2>
        </div>

        <div className="space-y-4">
          {program.steps.map((step) => (
            <div key={step.n} className={'card ' + (step.accent ? 'card-accent' : '')}>
              <div className="grid md:grid-cols-12 gap-5 md:gap-6 items-start">
                <div className="md:col-span-2">
                  <div
                    className={'font-bold tracking-tight ' + (step.accent ? 'text-white' : 'accent')}
                    style={{ fontSize: '2rem', lineHeight: 1 }}
                  >
                    {step.n}
                  </div>
                  <div
                    className="caption mt-1"
                    style={step.accent ? { color: 'rgba(255,255,255,0.85)' } : undefined}
                  >
                    {step.label}
                  </div>
                </div>
                <div className="md:col-span-10">
                  <h3 className={'h3 ' + (step.text ? 'mb-3' : '')} style={step.accent ? { color: 'var(--n-white)' } : undefined}>
                    {step.title.replace(/ /g, ' ')}
                  </h3>
                  {step.text && (
                    <p
                      className="body"
                      style={step.accent ? { color: 'rgba(255,255,255,0.85)' } : { color: 'var(--n-ink-2)' }}
                    >
                      {step.text.replace(/ /g, ' ')}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
