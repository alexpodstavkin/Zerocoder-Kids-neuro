import { trust } from '@/lib/content'

export default function Trust() {
  return (
    <section
      className="section"
      style={{ borderTop: '1px solid var(--n-seashell)', borderBottom: '1px solid var(--n-seashell)', paddingTop: '4rem', paddingBottom: '4rem' }}
    >
      <div className="container-zc">
        <div
          className="caption text-center mb-8"
          style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}
        >
          {trust.caption}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trust.items.map((item, i) => (
            <div key={i} className="text-center">
              <div
                className={'font-bold tracking-tight whitespace-nowrap ' + (item.accent ? 'accent' : '')}
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', lineHeight: 1.1, color: item.accent ? undefined : 'var(--n-ink)' }}
              >
                {item.stat.replace(/ /g, ' ')}
              </div>
              <div className="caption mt-2">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
