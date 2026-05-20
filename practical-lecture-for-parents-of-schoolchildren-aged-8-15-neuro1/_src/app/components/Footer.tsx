import { footer } from '@/lib/content'
import { asset } from '@/lib/asset'

export default function Footer() {
  return (
    <footer
      className="section"
      style={{ background: 'var(--n-shark)', color: 'rgba(255,255,255,0.7)', paddingTop: '4rem', paddingBottom: '2.5rem' }}
    >
      <div className="container-zc">
        <div className="grid md:grid-cols-12 gap-8 mb-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span
                className="w-11 h-11 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0"
                style={{ background: 'var(--n-white)' }}
              >
                <img
                  src={asset('/zerocoder-logo.png')}
                  alt="Зерокодер"
                  className="w-9 h-9 object-contain"
                  loading="lazy"
                />
              </span>
              <span className="font-bold text-lg" style={{ color: 'var(--n-white)' }}>{footer.brand}</span>
            </div>
            <p className="body max-w-md" style={{ color: 'rgba(255,255,255,0.7)' }}>{footer.about}</p>
          </div>
          <div className="md:col-span-4">
            <div
              className="caption mb-4"
              style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}
            >
              {footer.legalCaption}
            </div>
            <div className="body space-y-1.5" style={{ color: 'rgba(255,255,255,0.7)' }}>
              {footer.legal.map((line, i) => (
                <div key={i}>{line.replace(/ /g, ' ')}</div>
              ))}
            </div>
          </div>
          <div className="md:col-span-3">
            <div
              className="caption mb-4"
              style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}
            >
              {footer.contactsCaption}
            </div>
            <div className="body space-y-1.5" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <div>
                <a href={'tel:' + footer.phone.tel} className="hover:text-white" style={{ transition: 'var(--transition-default)' }}>
                  {footer.phone.display.replace(/ /g, ' ')}
                </a>
              </div>
              <div>
                <a href={'mailto:' + footer.email} className="hover:text-white" style={{ transition: 'var(--transition-default)' }}>
                  {footer.email}
                </a>
              </div>
              <div className="caption mt-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{footer.hours}</div>
            </div>
          </div>
        </div>
        <hr className="hr-soft mb-5" style={{ background: 'rgba(255,255,255,0.10)' }} />
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between caption" style={{ color: 'rgba(255,255,255,0.45)' }}>
          <div>{footer.copyright}</div>
          <div className="flex gap-5">
            <a href={footer.policy} className="hover:text-white" style={{ transition: 'var(--transition-default)' }}>Политика конфиденциальности</a>
            <a href={footer.terms} className="hover:text-white" style={{ transition: 'var(--transition-default)' }}>Оферта</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
