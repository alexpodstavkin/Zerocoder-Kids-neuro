import FormCard from './FormCard';
import PhotoStub from './PhotoStub';
import { StarOutline, Sparkle, Swirl, CursorArrow } from './Doodles';

// Блок 2. Hero — две карточки в ряд: слева оффер с фото, справа форма.
export default function Hero() {
  return (
    <section className="wrap">
      <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2">
        {/* Левая карточка — оффер */}
        <div className="card-w flex flex-col overflow-hidden p-6 pb-0 md:p-8 md:pb-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="pill-r">До 30 сентября</span>
            <span className="text-[15px] leading-[1.3]">выдаётся доступ</span>
          </div>

          {/* H1 продиктован владельцем 09.09.2026 дословно, порядок слов не менять.
              Кегль снижен с 34px: строка выросла с 43 знаков до 90.
              whitespace-nowrap снят со всей второй строки (выдавливал вёрстку за карточку) —
              неразрывным остался только возраст.
              {' '} перед вложенным span обязателен: без него сборщик съедает пробел
              и получается «учеников10–14». */}
          {/* max-[360px]:text-[21px] — на узких телефонах в колонку карточки
              (ширина экрана минус 32px поля .wrap минус 48px padding карточки)
              не влезает «профориентационный»: на 320px слово занимает 265px
              при доступных 240. Замерено, не на глаз. */}
          <h1 className="mt-6 text-balance text-[24px] font-semibold leading-[1.12] tracking-[-0.02em] max-[360px]:text-[21px] sm:leading-[1.07] sm:text-[27px] md:text-[30px]">
            5 бесплатных практических онлайн-занятий{' '}
            {/* Жёсткий перенос — только от 640px. На телефоне колонка карточки
                ~280px, и после принудительной строки «и 1» повисало одно,
                а «профориентационный» уезжало вниз. Ниже 640px строки
                раскладывает text-balance — она выравнивает их по длине.
                {' '} перед <br> обязателен: без него при hidden сборщик
                склеивает «занятийи». */}
            <br className="hidden sm:inline" />
            <span className="text-sub">
              и 1 профориентационный урок для учеников{' '}
              <span className="whitespace-nowrap">10&ndash;14&nbsp;лет</span>
            </span>
          </h1>

          <p className="mt-5 max-w-[440px] text-[15px] leading-[1.5]">
            На занятиях ребёнок поработает с нейросетями, погрузится в программирование
            и познакомится с перспективными IT-направлениями будущего
          </p>

          {/* Фото с каракулями — прижато к нижнему краю карточки */}
          <div className="relative -mx-6 mt-8 flex flex-1 flex-col justify-end pt-9 md:-mx-8 md:mt-10 md:pt-12">
            <StarOutline className="doodle left-[18%] top-4 z-[2]" width={40} />
            <Sparkle className="doodle left-[32%] top-1 z-[2]" width={15} />
            <Swirl className="doodle bottom-16 left-3 z-[2]" width={92} />
            <CursorArrow className="doodle bottom-14 right-6 z-[2]" width={42} />
            <PhotoStub
              path="/photos/hero-kids-laptop.jpg"
              label="Фото: дети за ноутбуком"
              className="h-full min-h-[190px] w-full md:min-h-[220px]"
            />
          </div>
        </div>

        {/* Правая карточка — форма */}
        <FormCard
          title={
            <>
              Запишите ребёнка
              <br />на 5 бесплатных онлайн-занятий
            </>
          }
          note="Доступ к занятиям придёт на почту сразу после регистрации"
        />
      </div>
    </section>
  );
}
