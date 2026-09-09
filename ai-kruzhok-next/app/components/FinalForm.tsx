import FormCard from './FormCard';
import PhotoStub from './PhotoStub';
import { Sparkle, Swirl, CursorArrow } from './Doodles';

// Блок 9. Финальная форма — снова две карточки: слева оффер, справа форма.
// Правка владельца 09.09.2026: пункт про записи убран, пункт про кабинет
// заменён на выгоду. «погрузиться» — инфинитив после «возможность»,
// в диктовке было «погрузится» (как с «перспективые» в первой волне).
const gifts = [
  '5 практических онлайн-занятий',
  '5 собственных проектов: от картинки до игры',
  'профориентационный урок один на один',
  'возможность погрузиться в IT-профессии',
];

export default function FinalForm() {
  return (
    <section id="cta" className="wrap py-10 md:py-14">
      <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-[1.08fr_0.92fr]">
        {/* Левая карточка — оффер */}
        <div className="card-w flex flex-col overflow-hidden p-6 pb-0 md:p-8 md:pb-0">
          <p className="text-[15px] font-medium" style={{ color: 'var(--acc-ink)' }}>
            Подача заявки до 30 сентября
          </p>

          <h2 className="mt-3 text-[24px] font-semibold leading-[1.12] tracking-[-0.02em] sm:text-[30px] md:text-[34px]">
            Запишите ребёнка
            <br />на 5 бесплатных онлайн-занятий
          </h2>

          <p className="mt-5 text-[15px]">Сразу после регистрации ребёнок получит:</p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {gifts.map((g) => (
              <li key={g} className="pill-r pill-r-ink">
                {g}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-[15px] leading-[1.4]">
            После регистрации пришлём доступ на почту и в удобный мессенджер
          </p>

          {/* Фото забирает весь остаток карточки, а не сидит в фиксированных 200px:
              раньше при ширине 514 и высоте 200 пропорция была 2.57:1 против 1.78:1
              у оригинала, и кадр резало сверху — головам срезало макушки, а над
              фото пустовало белое поле. */}
          <div className="relative -mx-6 mt-8 flex flex-1 flex-col justify-end pt-8 md:-mx-8 md:mt-10 md:pt-10">
            <Sparkle className="doodle left-[30%] top-2 z-[2]" width={15} />
            <Swirl className="doodle bottom-16 left-3 z-[2]" width={88} />
            <CursorArrow className="doodle bottom-14 right-6 z-[2]" width={42} />
            <PhotoStub
              path="/photos/hero-kids-laptop.jpg"
              label="Фото: дети за ноутбуком (то же, что в Hero)"
              className="h-full min-h-[210px] w-full md:min-h-[260px]"
              // кроп от верха: при широкой рамке иначе срезает головы
              style={{ backgroundPosition: 'center top' }}
            />
          </div>
        </div>

        {/* Правая карточка — форма */}
        <FormCard
          title={
            <>
              Заполните форму,
              <br />
              чтобы открыть доступ к занятиям
            </>
          }
        />
      </div>
    </section>
  );
}
