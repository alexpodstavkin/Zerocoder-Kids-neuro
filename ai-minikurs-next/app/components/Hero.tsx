import { Button } from '@/components/Button';
import { Photo } from '@/components/Photo';
import { BP } from '@/lib/basePath';

// Канон-Hero: текст 1.1fr + фото 0.9fr. Триколор собирается сверху вниз:
// белый фон → синяя плашка в H1 → красная кнопка.
export default function Hero() {
  return (
    <section className="bg-white pb-10 pt-12 md:pb-16 md:pt-20">
      <div className="container-x grid items-stretch gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-center">
          <span className="pill pill-live w-fit">
            <span className="pulse-dot" aria-hidden />
            Идёт регистрация
          </span>

          <h1 className="h1 h1-hero my-5 max-w-none md:max-w-[21ch]">
            <span className="hl-lines">Федеральная программа</span>{' '}
            подготовки школьников к&nbsp;профессиям будущего
          </h1>

          {/* Плашка как в hero донора gos-ai-urok: светлый фон paper, hairline-обводка,
              радиус lg. Внутри — оффер и пояснение. */}
          <div
            className="mb-6 flex flex-col gap-4 rounded-lg border bg-paper p-5 md:p-6"
            style={{ borderColor: 'var(--bord)' }}
          >
            <p className="lead">
              <span className="hl">
                5&nbsp;бесплатных практических онлайн-занятий и&nbsp;1&nbsp;профориентационный
                урок
              </span>{' '}
              для&nbsp;учеников <span className="whitespace-nowrap">10–14&nbsp;лет</span>.
            </p>
            <p className="lead">
              На&nbsp;занятиях ребёнок поработает с&nbsp;нейросетями и&nbsp;узнает,
              что ИИ&nbsp;— это не&nbsp;способ списать, а&nbsp;возможность создавать.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5">
            <Button href="#cta" arrow>
              Получить доступ
            </Button>
          </div>
        </div>

        <Photo
          src={`${BP}/hero-it-class.jpg`}
          alt="Школьники в кабинете информатики работают с нейросетями за компьютерами"
          aspect="auto"
          radius="xl"
          className="h-full min-h-[220px] shadow-hero md:min-h-[300px]"
        />
      </div>
    </section>
  );
}
