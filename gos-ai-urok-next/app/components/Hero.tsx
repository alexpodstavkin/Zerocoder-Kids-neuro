import { Button } from '@/components/Button';
import { Photo } from '@/components/Photo';
import { BP } from '@/lib/basePath';

// Канон-Hero: текст 1.1fr + фото 0.9fr. Триколор собирается сверху вниз:
// белый фон → синяя плашка в H1 → красная кнопка.
export default function Hero() {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="container-x grid items-stretch gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-center">
          <span className="pill pill-live w-fit">
            <span className="pulse-dot" aria-hidden />
            Идёт регистрация
          </span>

          <h1 className="h1 my-5 max-w-[20ch] md:max-w-[20ch]">
            Всероссийская программа подготовки детей к&nbsp;школьному курсу{' '}
            <span className="hl-lines">«Искусственный интеллект»</span>
          </h1>

          <div
            className="mb-6 rounded-lg border bg-paper p-5 md:p-6"
            style={{ borderColor: 'var(--bord)' }}
          >
            <p className="lead">
              Программа рассчитана на&nbsp;школьников от&nbsp;10 до&nbsp;14&nbsp;лет.{' '}
              <span className="whitespace-nowrap">Старт: 1&nbsp;октября</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5">
            <Button href="#cta" arrow>
              Подать заявку
            </Button>
          </div>
        </div>

        <Photo
          src={`${BP}/hero-classroom.jpg`}
          alt="Школьники за компьютерами изучают нейросети на уроке информатики"
          aspect="auto"
          radius="xl"
          className="h-full min-h-[220px] shadow-hero md:min-h-[300px]"
        />
      </div>
    </section>
  );
}
