import { Icon } from '@/components/Icon';
import { StarOutline, Curl } from './Doodles';

// Блок 7. Три направления внутри мини-курса из 5 занятий.
// Метка карточки — «Направление», не «Курс»: три отдельных продукта мы не обещаем.
const directions = [
  {
    num: '01',
    icon: 'microchip-ai',
    title: 'Нейросети и ИИ',
    text: 'Учит работать с информацией и проверять её — навык, который пригодится и в школе, и в любой будущей профессии, не только в IT.',
  },
  {
    num: '02',
    icon: 'display-code',
    title: 'Программирование и логика',
    text: 'Школьная математика и информатика перестают быть теорией: ребёнок использует их, чтобы получить работающий результат.',
  },
  {
    num: '03',
    icon: 'gamepad',
    title: 'Игры и игровые миры',
    text: 'Ребёнок собирает собственную игру — придумывает объекты, персонажей и правила мира, в котором они живут.',
  },
];

export default function Directions() {
  return (
    <section className="wrap py-10 md:py-14">
      <div className="relative text-center">
        <h2 className="h2">
          3 IT-направления будущего
          <br />
          за 5 занятий
        </h2>
        <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-[1.5] text-sub">
          Ребёнок попробует сразу несколько направлений и поймёт, где ему интереснее и что лучше
          получается.
        </p>

        <StarOutline className="doodle -left-2 bottom-0 hidden md:block" width={34} />
        <Curl className="doodle -right-4 bottom-2 hidden md:block" width={96} />
      </div>

      <ol className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-11 md:grid-cols-3 md:gap-5">
        {directions.map((d) => (
          <li key={d.num}>
            <article className="card-w relative flex h-full flex-col overflow-hidden p-6">
              <span className="step-num step-num-sm" aria-hidden>
                {d.num}
              </span>
              <span className="ico-box relative z-[1]">
                <Icon name={d.icon} size={24} color="currentColor" />
              </span>
              <p className="relative z-[1] mt-6 text-[14px] font-medium" style={{ color: 'var(--acc-ink)' }}>
                Направление
              </p>
              <h3 className="relative z-[1] mt-1.5 text-[21px] font-semibold leading-[1.2]">
                {d.title}
              </h3>
              <p className="relative z-[1] mt-3 text-[15px] leading-[1.5] text-sub">{d.text}</p>
            </article>
          </li>
        ))}
      </ol>

      <div className="mt-8 flex flex-col items-center md:mt-10">
        <a href="#cta" className="btn-r btn-r-solid">
          Открыть бесплатные занятия
        </a>
        <p className="mt-3 text-[13px] text-sub">Доступ открывается сразу после регистрации</p>
      </div>
    </section>
  );
}
