import { asset } from '@/lib/basePath'

// Sticky-шапка без навигации (лендинг в 5 экранов — якорное меню только шумит).
// Фон сплошной (не полупрозрачный и без backdrop-filter): сквозь rgba(7,9,14,.94)
// просвечивал контент секций, а blur на этом лендинге запрещён.
export function Header() {
  return (
    <header
      className="sticky top-0 z-50"
      style={{ background: 'var(--bg)', borderBottom: '1px solid var(--line)' }}
    >
      <div className="container-x flex h-[56px] items-center justify-between d:h-[66px]">
        <a
          href="#top"
          className="-mx-2 flex h-11 items-center gap-2.5 px-2"
          aria-label="Зерокодер — на начало страницы"
        >
          <img src={asset('/logo-icon.png')} alt="Зерокодер" width={30} height={30} className="h-[30px] w-[30px]" />
          <span className="text-[18px] font-extrabold tracking-[-0.02em] text-white d:text-[20px]">
            Зерокодер
          </span>
        </a>
        <a href="#zapis" className="btn-primary btn-sm h-11 d:h-10">
          Записаться
        </a>
      </div>
    </header>
  )
}
