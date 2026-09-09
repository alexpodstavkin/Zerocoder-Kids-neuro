import { Icon } from '@/components/Icon';
import { StarOutline, Sparkle, Curl, StepArrow } from './Doodles';

// Блок 5. Четыре этапа — путь ребёнка по занятиям.
// Гигантские номера 01–04 лежат за содержимым карточки, между карточками — рисованные стрелки.
const steps = [
  {
    num: '01',
    icon: 'palette',
    text: 'Уже на первом занятии ребёнок делает свою картинку в нейросети — и видит, что технологии ему по силам',
  },
  {
    num: '02',
    icon: 'brain-circuit',
    text: 'Дальше разбирается, как устроен искусственный интеллект и где он помогает в учёбе, а где мешает',
  },
  {
    num: '03',
    icon: 'gamepad',
    text: 'К пятому занятию собирает собственную игру — с персонажами, объектами и правилами, которые придумал сам',
  },
  {
    num: '04',
    icon: 'bullseye-arrow',
    text: 'А на уроке один на один со специалистом впервые всерьёз обсуждает вопрос «кем я хочу стать» — не в 11 классе, когда решать уже поздно',
    accent: true,
  },
];

export default function Path() {
  return (
    <section className="wrap py-10 md:py-14">
      <div className="relative">
        <h2 className="h2 max-w-[520px]">
          Путь ребёнка
          <br />
          за пять занятий
        </h2>
        <p className="mt-5 max-w-[520px] text-[15px] leading-[1.5] text-sub">
          Занятия идут по порядку, каждый день &mdash; новый урок, от простого к сложному.
          Смотреть можно когда удобно &mdash;
          расписание подстраивается под вас, а не наоборот.
        </p>

        <StarOutline className="doodle right-[24%] top-0 hidden md:block" width={48} />
        <Curl className="doodle right-2 top-14 hidden md:block" width={104} />
        <Sparkle className="doodle bottom-1 right-[34%] hidden md:block" width={16} />
      </div>

      <ol className="relative mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-11 md:grid-cols-4 md:gap-5">
        {steps.map((s, i) => (
          <li key={s.num} className="relative">
            <article
              className="card-w relative flex h-full flex-col overflow-hidden p-5 md:min-h-[210px]"
              style={s.accent ? { background: 'var(--acc-soft)' } : undefined}
            >
              <span className={`step-num ${s.accent ? 'step-num-on-soft' : ''}`} aria-hidden>
                {s.num}
              </span>
              <span className="ico-box relative z-[1]">
                <Icon name={s.icon} size={24} color="currentColor" />
              </span>
              <p
                className={`relative z-[1] mt-5 text-[14px] leading-[1.45] md:mt-auto md:pt-7 ${
                  s.accent ? 'font-medium' : ''
                }`}
              >
                {s.text}
              </p>
            </article>

            {i < steps.length - 1 && (
              <StepArrow
                className="doodle -right-[26px] top-1/2 z-10 hidden -translate-y-1/2 md:block"
                width={38}
              />
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
