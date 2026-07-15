// Блок 8: полоса доверия — Сколково + государственная образовательная лицензия (ссылка в реестр).
// Иконка-«verified» — зелёная (ядро бренда Зерокодер): вторичный бренд-штрих в нейтральной точке.
export function TrustBar() {
  return (
    <section className="bg-white py-10">
      <div className="container-x">
        <div
          className="flex flex-col items-center gap-4 rounded-lg border px-6 py-7 text-center md:flex-row md:justify-center md:gap-6 md:text-left"
          style={{ borderColor: 'var(--bord)', background: 'var(--paper)' }}
        >
          <span className="ico-chip-green h-12 w-12 flex-none text-[24px]">
            <i className="fi fi-rr-badge-check" aria-hidden />
          </span>
          <p className="max-w-[720px] text-[16px] leading-[1.6] text-ink/80">
            Зерокодер — резидент «Сколково». Работаем по государственной{' '}
            <a
              href="https://islod.obrnadzor.gov.ru/rlic/details/0c9b345a-fc50-43c8-7248-1dc5987f2d33/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-acc-dark underline decoration-acc/40 underline-offset-2 hover:decoration-acc"
            >
              образовательной лицензии
            </a>{' '}
            — её можно проверить в реестре Рособрнадзора.
          </p>
        </div>
      </div>
    </section>
  )
}
