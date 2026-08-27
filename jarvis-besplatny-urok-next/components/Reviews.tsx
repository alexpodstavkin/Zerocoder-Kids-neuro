import { asset } from '@/lib/basePath'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { ReviewsTrack } from './ReviewsTrack'

// Блок 5 — четыре реальных отзыва. Десктоп — masonry (columns: 2):
// отзывы очень разной длины, сетка равных колонок дала бы рваные пустоты.
// Мобильный (<=860px) — snap-карусель, см. ReviewsTrack.tsx.
// Скобок на карточках нет (лимит §3.7), hover без лифта — карточки не кликабельны.
// Полоса рейтинга уехала в объединённый блок TrustRating.
type Review = {
  name: string
  role: string
  avatar: string
  title: string
  paragraphs: string[]
}

const REVIEWS: Review[] = [
  {
    name: 'Мария',
    role: 'Мама ученика',
    avatar: '/reviews/maria.png',
    title: 'Заставила сына заниматься, а он в итоге вошёл во вкус',
    paragraphs: [
      'Семья Чистовых поздравляет команду Зерокодера с наступающим Новым Годом! Благодарим за интересную подачу материала и нового преподавателя Романа Маркевича, которому удалось увлечь занятиями, которому удаётся максимально просто объяснять непонятные темы. Мы были на грани «бросить всё это программирование», но профессиональный педагогический подход Романа помог нам отказаться от этих намерений. Желаем команде Зерокодера увлечённых благодарных учеников, которыми будут в равной степени гордиться как преподаватели, так и родители. Спасибо и до новых встреч в новом году!',
    ],
  },
  {
    name: 'Евгения',
    role: 'Мама ученика',
    avatar: '/reviews/evgeniya.png',
    title: 'Отличное обучение, ребёнок получил знания',
    paragraphs: [
      'Обучение проходило в удобном формате, а также время и дни. Ребёнок занимался с удовольствием. Информации по курсу было предоставлено много, познавательно и интересно. Возникающие вопросы решались быстро и понятно. Спасибо большое всей команде и преподавателю!',
    ],
  },
  {
    name: 'Ксения',
    role: 'Мама ученика',
    avatar: '/reviews/kseniya.png',
    title: 'Курс очень понравился',
    paragraphs: [
      'Занятия проходили в приятной атмосфере и удобном графике, ребёнок погружался в учебный процесс легко и с большим интересом. Программа курса насыщенная, увлекательная и познавательная.',
      'Любые возникшие трудности мгновенно устранялись специалистами в телеграме.',
      'Искренне признательны каждому сотруднику команды и лично нашему замечательному преподавателю Илье Зуеву за профессионализм, терпение и заботливое отношение к детям.',
    ],
  },
  {
    name: 'Ольга',
    role: 'Мама ученика',
    avatar: '/reviews/olga2.png',
    title: 'Все проходит хорошо',
    paragraphs: [
      'С университетом Зерокодер познакомились ещё когда ребёнку было 8 лет. Увидели у ребёнка тягу к Ит, созвонившись с менеджером школы мы взяли лёгкое программирование в Scratch, через мультики, анимацию, игры. Позже после Scratch мы перешли на Python, но уже групповой, чтобы был соревновательный момент.',
      'Кураторы поддержки всегда были на связи, по Scratch помогли подобрать преподавателя, а позже как раз к Диане мы и перешли в группу Python. Сейчас занимаемся.',
    ],
  },
]

export function Stars() {
  return (
    <span className="flex items-center gap-[3px]" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <Icon key={i} name="star" style="solid" size={14} color="var(--acc)" />
      ))}
    </span>
  )
}

export function Reviews() {
  return (
    <section className="pb-12 pt-14 d:pb-16 d:pt-24" style={{ background: 'var(--bg-2)' }}>
      <div className="container-x">
        <Reveal>
          <h2 className="h2 text-center">
            Что говорят <span style={{ color: 'var(--acc-hot)' }}>родители</span> наших учеников
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-center text-[16px] font-normal leading-[1.6] text-[color:var(--fg-2)] d:text-[17px]">
            Родители пишут о разных программах Зерокодера — от первых занятий до больших курсов.
          </p>
        </Reveal>

        <ReviewsTrack count={REVIEWS.length}>
          {REVIEWS.map((r) => (
            <article
              key={r.name}
              className="relative overflow-hidden rounded-[20px] border p-[22px_20px] transition-colors duration-200 d:p-[26px_24px]"
              style={{ borderColor: 'var(--line)', background: 'var(--surf)' }}
            >
              <span
                className="pointer-events-none absolute right-5 top-4 leading-none"
                style={{ color: 'var(--acc)', opacity: 0.1 }}
                aria-hidden="true"
              >
                <Icon name="quote-right" size={40} color="currentColor" />
              </span>

              <Stars />

              <h3 className="mt-3.5 text-[18px] font-bold leading-[1.3] text-[color:var(--fg)]">
                {r.title}
              </h3>

              {r.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="mt-2.5 max-w-[60ch] text-[15px] font-normal leading-[1.65] text-[color:var(--fg-2)]"
                >
                  {p}
                </p>
              ))}

              <div
                className="mt-5 flex items-center gap-3 border-t pt-[18px]"
                style={{ borderColor: 'var(--line)' }}
              >
                <img
                  src={asset(r.avatar)}
                  alt={r.name}
                  width={44}
                  height={44}
                  className="h-11 w-11 flex-none rounded-full object-cover"
                  style={{ boxShadow: '0 0 0 1px var(--acc-2-dim)' }}
                />
                <span className="block">
                  <span className="block text-[15px] font-bold text-[color:var(--fg)]">{r.name}</span>
                  <span className="block text-[13px] font-medium text-[color:var(--fg-3)]">
                    {r.role}
                  </span>
                </span>
              </div>
            </article>
          ))}
        </ReviewsTrack>
      </div>
    </section>
  )
}
