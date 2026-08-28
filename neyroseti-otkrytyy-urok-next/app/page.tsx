import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Section, SectionHead } from '@/components/Section'
import { Bento, Cell } from '@/components/Bento'
import { Photo } from '@/components/Photo'
import { Icon } from '@/components/Icon'
import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'
import { GetCourseWidget } from '@/components/GetCourseWidget'
import { BP } from '@/lib/basePath'

// Тестовая сборка ленда «Бесплатный открытый урок по нейросетям» в каноне Зерокодера.
// Тексты — утверждённые (landing-copy-approved.md + правки владельца раундов 1–3), взяты дословно.
// Отличается только дизайн-система: Manrope, капс-заголовки, бенто, pill-кнопки, автомасштаб.

const modules = [
  {
    n: '01',
    verb: 'Узнает',
    tail: ', как устроены нейросети',
    icon: 'brain',
    text:
      'Разбираем знакомые примеры: поиск, рекомендации, голосовые помощники. Учим ставить задачу словами. Начинаем с нуля.',
  },
  {
    n: '02',
    verb: 'Сделает',
    tail: ' своего помощника для учёбы',
    icon: 'robot',
    text:
      'Помощник не даёт готовые ответы, а объясняет тему своими словами и разбирает решение по шагам. Это не решебник для ребёнка, а дополнительный бесплатный учитель.',
  },
  {
    n: '03',
    verb: 'Поймёт',
    tail: ' разницу между работой и списыванием',
    icon: 'shield-check',
    text:
      'Нейросеть — не способ списать, а способ создавать. Ребёнок видит разницу между «сделал сам» и «сдал чужое».',
  },
]

const questions = [
  'Ребёнок уже пользуется нейросетью — он с ней учится или списывает?',
  'Как понять, что нейросеть ответила неверно, и что с этим делать?',
  'Безопасно ли школьнику работать с нейросетями и что стоит запретить?',
  'Что именно вводят в школе в этом учебном году и потянет ли это мой ребёнок?',
  'Есть ли у ребёнка склонность к этому направлению — или это не его?',
  'Что делать дальше, если тема зашла, и что делать, если нет?',
]

export default function Page() {
  return (
    <>
      <Header
        links={[
          { label: 'Программа', href: '#program' },
          { label: 'Вопросы', href: '#questions' },
        ]}
        cta={{ label: 'Записаться', href: '#cta' }}
      />

      <Hero
        badge={
          <>
            <span className="pulse-dot" aria-hidden />
            Запись открыта
          </>
        }
        title={
          <>
            Бесплатный <span className="hl-lines">открытый урок по нейросетям</span> для школьников
            <br className="md:hidden" />
            10–14 лет
          </>
        }
        lead="Ребёнок создаст своего онлайн-помощника по учёбе на базе искусственного интеллекта."
        primary={{ label: 'Записаться на бесплатный открытый урок', href: '#cta' }}
        photoSrc={`${BP}/hero-classroom.png`}
      />

      {/* Новость Минпросвещения + наш разбор */}
      <Section bg="paper">
        <div className="grid items-stretch gap-6 md:grid-cols-[0.85fr_1.15fr] md:grid-rows-[1fr_auto]">
          {/* Партнёрская ячейка: на мобильном первая (сразу под HERO),
              на десктопе — левая колонка, нижний ряд. Высоту не меняет. */}
          <Reveal className="order-1 md:order-none md:col-start-1 md:row-start-2">
            <div
              className="flex items-center gap-4 rounded-lg border bg-white p-5"
              style={{ borderColor: 'var(--bord)' }}
            >
              <p className="flex-1 text-[15px] font-semibold">
                Бесплатный открытый урок проводится совместно с&nbsp;Университетом Зерокодер
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${BP}/partners/zerocoder.png`} alt="Университет Зерокодер" className="h-14 w-14 shrink-0 object-contain" />
            </div>
          </Reveal>

          {/* Официальная новость и наш разбор — две ячейки, на десктопе правая колонка на оба ряда */}
          <Reveal className="order-2 h-full md:order-none md:col-start-2 md:row-start-1 md:row-span-2">
            <div className="flex h-full flex-col gap-5">
              <div
                className="flex flex-col gap-4 rounded-xl border bg-white p-7 md:p-9"
                style={{ borderColor: 'var(--bord)' }}
              >
                <span
                  className="inline-flex w-fit items-center gap-2 rounded-pill px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em]"
                  style={{ background: 'var(--acc-soft)', color: 'var(--acc-dark)' }}
                >
                  <Icon name="megaphone" style="solid" size={12} color="var(--acc)" />
                  Официальное сообщение
                </span>

                <p className="text-[19px] font-extrabold leading-[1.35] tracking-[-0.01em] md:text-[21px]">
                  Для&nbsp;школьников введут курс по&nbsp;ИИ и&nbsp;информационной безопасности со&nbsp;второй четверти
                  2026/27&nbsp;учебного года.
                </p>
                <p className="text-[15px] text-sub">
                  Новый курс будет внеурочным. Школьников планируют знакомить с&nbsp;технологиями искусственного
                  интеллекта и&nbsp;основами безопасной работы с&nbsp;информацией.
                </p>
                <span className="text-[12px] font-semibold uppercase tracking-[0.06em] text-sub">
                  Источник: Минпросвещения России
                </span>
              </div>

              <div
                className="flex flex-1 flex-col gap-4 rounded-xl border bg-white p-7 md:p-9"
                style={{ borderColor: 'var(--bord)' }}
              >
                <span
                  className="inline-flex w-fit items-center gap-2 rounded-pill px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em]"
                  style={{ background: 'var(--acc-soft)', color: 'var(--acc-dark)' }}
                >
                  <Icon name="calendar-clock" style="solid" size={12} color="var(--acc)" />
                  Как это будет реализовано в&nbsp;2026 году
                </span>
                <p className="text-[15px] text-sub">
                  Курс в&nbsp;школе будет. Но&nbsp;учитель в&nbsp;классе один, а&nbsp;урок ограничен по&nbsp;времени —
                  разобрать индивидуально тему с&nbsp;каждым ребёнком он&nbsp;просто не&nbsp;успеет. Оставаться после
                  уроков и&nbsp;объяснять заново никто не&nbsp;будет, а&nbsp;результат курса будут оценивать.
                </p>
                <p className="text-[15px] font-semibold">
                  Поэтому, если вы&nbsp;хотите, чтобы ребёнок разобрался, а&nbsp;не&nbsp;просто прошёл курс&nbsp;—
                  посетите бесплатный открытый урок.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Фото: на мобильном последнее, на десктопе — левая колонка, верхний ряд (тянется) */}
          <Reveal className="order-3 h-full md:order-none md:col-start-1 md:row-start-1">
            <Photo
              src={`${BP}/photos/initiative-it-class.png`}
              alt="Школьники на занятии по информатике изучают нейросети"
              aspect="auto"
              radius="xl"
              className="h-full min-h-[260px]"
            />
          </Reveal>
        </div>
      </Section>

      {/* Формат + программа */}
      <Section id="program" bg="white">
        <Reveal>
          <div className="grad-acc mb-12 rounded-xl px-6 py-10 text-center text-white md:px-12 md:py-12">
            <p className="mx-auto max-w-[900px] text-[20px] font-extrabold leading-[1.35] tracking-[-0.01em] md:text-[26px]">
              Открытый урок проходит онлайн — один на&nbsp;один с&nbsp;педагогом,{' '}
              <span className="whitespace-nowrap">45–60&nbsp;минут</span>, под&nbsp;уровень вашего ребёнка. Удобное
              время подберём вместе.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <SectionHead title="Программа бесплатного открытого урока" />
        </Reveal>

        <Bento cols={3}>
          {modules.map((m) => (
            <Cell
              key={m.n}
              icon={m.icon}
              title={
                <>
                  <span style={{ color: 'var(--acc)' }}>
                    {m.n}&nbsp;&nbsp;{m.verb.toUpperCase()}
                  </span>
                  {m.tail}
                </>
              }
            >
              {m.text}
            </Cell>
          ))}
        </Bento>

        <div className="mt-10 flex justify-center">
          <Button href="#cta" arrow>
            Записаться на бесплатный открытый урок
          </Button>
        </div>
      </Section>

      {/* Что даст урок + вопросы */}
      <Section id="questions" bg="paper">
        <Reveal>
          <SectionHead
            title="После открытого урока у вас и ребёнка будут ответы на вопросы, помогает нейросеть или мешает в учёбе"
            lead="Бесплатный открытый урок нужен для того, чтобы вы окончательно разобрались в теме, ведь более 71 % детей школьного возраста уже используют ИИ в жизни."
          />
        </Reveal>

        <div className="grid items-stretch gap-6 md:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="h-full">
            <ul className="flex h-full flex-col gap-3.5">
              {questions.map((q, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 rounded-md border bg-white p-5 transition-all duration-200 hover:-translate-y-0.5"
                  style={{ borderColor: 'var(--bord)' }}
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm text-[13px] font-extrabold"
                    style={{ background: 'var(--acc-soft)', color: 'var(--acc-dark)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[15px] font-semibold leading-snug">{q}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="h-full">
            <Photo
              src={`${BP}/photos/questions-parents-meeting.png`}
              alt="Родитель и ребёнок вместе разбираются, как пользоваться нейросетями"
              aspect="auto"
              radius="xl"
              className="h-full min-h-[320px]"
            />
          </Reveal>
        </div>
      </Section>

      {/* Финальная форма */}
      <section id="cta" className="py-14 md:py-24">
        <div className="container-x">
          <div className="grad-dark relative overflow-hidden rounded-xl px-6 py-12 text-white md:px-12 md:py-14">
            <div className="blob absolute -right-24 -top-28 h-80 w-80 opacity-40" style={{ background: 'var(--acc)' }} />
            <div className="relative z-10 grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
              <div>
                <h2 className="h2">Бесплатный открытый урок по нейросетям</h2>
                <p className="lead mt-4 max-w-[520px] text-white/70">
                  Ребёнок сделает первый проект и&nbsp;увидит, что нейросеть — не&nbsp;способ списать, а&nbsp;способ
                  создавать.
                </p>
                <ul className="mt-7 flex flex-col gap-3">
                  {[
                    'Онлайн, один на один с педагогом, 45–60 минут',
                    'Бесплатно, ни к чему не обязывает',
                    'После заявки позвоним, чтобы согласовать день и время открытого урока',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3 text-[15px] font-medium text-white/90">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'var(--acc)' }} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg bg-white p-6 text-ink md:p-7">
                <GetCourseWidget />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
