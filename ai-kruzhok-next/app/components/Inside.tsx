import { BP } from '@/lib/basePath';

// Блок 6. Что внутри занятий — одна большая зелёная карточка,
// внутри четыре колонки-рубрики со списками, пункты разделены тонкими линиями.
const rubrics = [
  {
    title: 'Нейросети',
    items: [
      'Как устроен искусственный интеллект — простыми словами',
      'Как задавать нейросети задачу, чтобы она поняла',
      'Генерация изображений: первый проект за одно занятие',
      'Почему нейросеть иногда уверенно ошибается',
    ],
  },
  {
    title: 'Практика и проекты',
    items: [
      'Пять собственных проектов: от картинки до игры',
      'Своя игра — с персонажами, объектами и правилами',
      'Каждое занятие заканчивается результатом, который можно показать',
      'Всё делается на обычном компьютере с интернетом',
    ],
  },
  {
    title: 'Учёба и безопасность',
    items: [
      'Где ИИ помогает с домашним заданием, а где только мешает',
      'Как проверять то, что выдала нейросеть',
      'Правила безопасного поведения в интернете',
      'Что нельзя рассказывать о себе онлайн',
    ],
  },
  {
    title: 'Профессии и будущее',
    items: [
      'Кто и что делает в IT: разработка, дизайн, работа с данными',
      'Почему работа с ИИ сегодня — базовый навык, а не отдельная профессия',
      'Какие школьные предметы за этим стоят',
    ],
  },
];

export default function Inside() {
  return (
    <section className="wrap py-10 md:py-14">
      <div className="text-center">
        <h2 className="h2">
          Что ребёнок разберёт
          <br />
          на занятиях
        </h2>
        <p className="mt-4 text-[15px] leading-[1.5] text-sub">
          Пять занятий, пять готовых проектов и один разговор о будущем.
        </p>
      </div>

      <div className="card-acc relative mt-9 overflow-hidden p-6 md:mt-11 md:p-10">
        {/* Фото отдельным слоем над заливкой. object-contain — снимок виден целиком,
            без кропа; фон карточки равен фону снимка (--acc-card), поэтому стыка не
            видно и подросток стоит прямо на зелёном поле карточки.
            z-[1] против z-[2] у текста: если строка дотянется до фото, она пройдёт
            поверх него, а не будет обрезана.
            Сдвиг вправо на 170px: в кадре справа большое пустое зелёное поле, оно
            уезжает за край (и не видно, фон совпадает), а подросток отходит от текста
            и его лицо перестаёт попадать под строки правой колонки.
            h-full — верх снимка совпадает с верхом карточки, поэтому горизонтального
            стыка нет вовсе; правый и нижний края режет overflow карточки.
            Маска растворяет левую кромку на 190px: фон снимка неоднородный, плоской
            заливкой в него не попасть точно, а через градиент границы просто нет. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${BP}/photos/teen-portrait.jpg`}
          alt=""
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-[-170px] z-[1] hidden h-full w-auto select-none object-contain object-bottom [-webkit-mask-image:linear-gradient(to_right,transparent_0,#000_190px)] [mask-image:linear-gradient(to_right,transparent_0,#000_190px)] md:block"
        />

        <div className="relative z-[2] md:w-[62%]">
          <div className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
            {rubrics.map((r) => (
              <div key={r.title}>
                <h3 className="text-[19px] font-semibold leading-[1.2]">{r.title}</h3>
                <ul className="mt-3">
                  {r.items.map((it) => (
                    <li key={it} className="rubric-item">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <a href="#cta-form" className="btn-r btn-r-cta mt-8 md:mt-10">
            Получить доступ
          </a>
        </div>

        {/* На телефоне слой не работает — фото идёт обычным блоком под текстом. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${BP}/photos/teen-portrait.jpg`}
          alt="Подросток за ноутбуком"
          className="relative z-[2] mt-8 block w-full rounded-[16px] md:hidden"
        />
      </div>
    </section>
  );
}
