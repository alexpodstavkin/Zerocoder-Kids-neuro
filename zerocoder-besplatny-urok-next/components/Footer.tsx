export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-col">
            <div className="foot-brand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/zerocoder-besplatny-urok/logo-icon.png" alt="Зерокодер" className="foot-logo-img" />
              <span className="foot-word">Зерокодер</span>
            </div>
            <p className="foot-tag">Бесплатный урок цифровых технологий для детей 8&ndash;17 лет.</p>
            <a className="foot-contact" href="tel:+79393283812">+7 939 328-38-12</a>
            <a className="foot-contact" href="mailto:care@zerocoder.ru">care@zerocoder.ru</a>
          </div>
          <div className="foot-col">
            <h5>Направления</h5>
            <a>Нейросети</a>
            <a>Вайбкодинг</a>
            <a>Программирование в Roblox</a>
            <a>Программирование на Python</a>
          </div>
          <div className="foot-col">
            <h5>Родителям</h5>
            <a>Как проходит урок</a>
            <a>Профориентация</a>
            <a>Отзывы</a>
            <a>Частые вопросы</a>
          </div>
          <div className="foot-col">
            <h5>Документы</h5>
            <a href="https://zerocoder.ru/privacy">Политика конфиденциальности</a>
            <a href="https://zerocoder.ru/safety">Политика безопасности платежей</a>
            <a href="https://zerocoder.ru/terms">Оферта</a>
            <a href="https://islod.obrnadzor.gov.ru/rlic/details/0c9b345a-fc50-43c8-7248-1dc5987f2d33/">Лицензия на образовательную деятельность</a>
          </div>
          <div className="foot-col">
            <h5>Контакты</h5>
            <a href="tel:+79393283812">+7 939 328-38-12</a>
            <a href="mailto:care@zerocoder.ru">care@zerocoder.ru</a>
            <a>Telegram</a>
          </div>
        </div>
        <div className="foot-bottom">
          ООО «ЗЕРОКОДЕР» &middot; ИНН 9715401631 &middot; ОГРН 1217700246026 &middot; Образовательная лицензия, резидент «Сколково»<br />
          © 2026 ООО «ЗЕРОКОДЕР». Все права защищены.
        </div>
      </div>
    </footer>
  )
}
