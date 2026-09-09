import PhotoStub from './PhotoStub';

// Блок 4. Индивидуальная профориентация — сильнейший блок лендинга.
const bullets = [
  'Что ребёнку действительно интересно',
  'Какие задачи даются ему лучше',
  'В чём его сильные стороны',
  'Какие направления в IT стоит попробовать дальше',
];

export default function Proforientation() {
  return (
    <section className="wrap py-10 md:py-14">
      <div className="text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2">
          <span className="pill-r">Для каждого</span>
          <span className="text-[15px] leading-[1.3]">участника доступна</span>
        </div>
        <h2 className="h2 mt-5">Индивидуальная профориентация</h2>
        <p className="mt-3 text-[18px] leading-[1.3] text-sub md:text-[24px]">
          живой разговор со специалистом один на один
        </p>
      </div>

      <div className="card-w mt-9 grid grid-cols-1 overflow-hidden md:grid-cols-[1.02fr_1fr] md:mt-10">
        {/* На телефоне фото идёт НАД текстом (правка владельца 09.09.2026):
            в одну колонку снимок уезжал под длинный список и его никто не видел.
            На вебе порядок прежний — текст слева, фото справа. */}
        <div className="order-2 p-6 md:order-1 md:p-9">
          <p className="text-[15px] font-medium">Специалист поможет понять:</p>

          <ul className="mt-4 flex flex-col items-start gap-2.5">
            {bullets.map((b) => (
              <li key={b} className="pill-r pill-r-ink text-left">
                {b}
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-[430px] text-[15px] leading-[1.5]">
            Урок проходит онлайн: специалист вместе с ребёнком разбирает его проекты и тут же
            делает с ним новый, закрепляя полученные навыки. В конце &mdash; понятный вывод: что
            у ребёнка получается и какие направления стоит попробовать дальше.
          </p>

          <a href="#cta" className="btn-r btn-r-solid mt-7">
            Записаться на занятия
          </a>
        </div>

        <PhotoStub
          path="/photos/proforientation-specialist.jpg"
          label="Фото: специалист с подростком за ноутбуком, зелёный фон"
          className="order-1 min-h-[260px] w-full md:order-2 md:min-h-full"
        />
      </div>
    </section>
  );
}
