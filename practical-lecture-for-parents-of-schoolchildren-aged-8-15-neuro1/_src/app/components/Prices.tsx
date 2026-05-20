import { prices, altCta } from '@/lib/content'

export default function Prices() {
  return (
    <section className="section">
      <div className="container-zc">
        <div className="max-w-3xl mb-8 md:mb-10">
          <span className="pill mb-4 inline-flex">Сколько стоит средний репетитор</span>
          <h2 className="h2 mt-4">
            {prices.title.pre}
            <span className="accent">{prices.title.accent.replace(/ /g, ' ')}</span>
            {prices.title.post}
          </h2>
          <p className="lead mt-5 max-w-2xl">{prices.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {prices.items.map((item, i) => (
            <div key={i} className="card">
              <div className="caption mb-2">{item.subject}</div>
              <div
                className="font-bold tracking-tight whitespace-nowrap"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1 }}
              >
                {item.amount.replace(/ /g, ' ')}
              </div>
              <div className="caption mt-1 mb-5">в год</div>
              <hr className="hr-soft mb-4" />
              <div className="body" style={{ color: 'var(--n-ink-2)' }}>
                {item.detail.replace(/ /g, ' ')}
              </div>
            </div>
          ))}
        </div>

        {/* Counter offer */}
        <div className="mt-5" id="altCta">
          <div className="card card-dark p-6 md:p-8 lg:p-12">
            <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-center">
              <div className="md:col-span-7">
                <span className="pill-emerald pill mb-4 inline-flex">{altCta.badge}</span>
                <h3 className="h2 mt-4 mb-4" style={{ color: 'var(--n-white)' }}>
                  {altCta.title.replace(/ /g, ' ')}
                </h3>
                <p className="lead" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  {altCta.text.replace(/ /g, ' ')}
                </p>
              </div>
              <div className="md:col-span-5 flex flex-col items-center justify-center text-center">
                <div
                  className="font-bold tracking-tight whitespace-nowrap mb-6"
                  style={{ fontSize: 'clamp(4rem, 9vw, 7rem)', lineHeight: 1, color: 'var(--surface-cta)' }}
                >
                  {altCta.price.replace(/ /g, ' ')}
                </div>
                <a href="#register" data-open-register="" className="btn btn-cta">{altCta.cta}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
