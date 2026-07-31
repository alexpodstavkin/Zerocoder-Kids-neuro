export function Hero() {
  return (
    <section className="hero">
      <div className="hero-card">
        <div className="heroimg">
          <div className="ph"></div>
        </div>
        <div className="hero-inner">
          <div className="hero-top">
            <h1>
              Бесплатный урок
              <br />
              цифровых технологий
              <br />
              для детей 8&ndash;17 лет
            </h1>
            <p className="lead">
              Лучший способ увлечь ребёнка технологиями &mdash; дать попробовать их своими руками.
              <br />
              За один урок он познакомится с современными технологиями и соберёт свой первый проект.
            </p>
          </div>
        </div>
      </div>
      <div className="hero-tab">
        <span className="nf nf-bl" style={{ left: '-36px', top: 0 }}></span>
        <span className="nf nf-br" style={{ right: '-36px', top: 0 }}></span>
        <a href="#zapis" className="btn btn-green">
          Записаться на урок <span className="arr">&#10230;</span>
        </a>
        <div className="set">
          <div className="k">Формат урока</div>
          <div className="v">Онлайн &middot; 60 минут &middot; бесплатно</div>
        </div>
      </div>
    </section>
  )
}
