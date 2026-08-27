import { Icon } from './Icon'
import { Reveal } from './Reveal'

// Блок 4 — четыре шага и три строки-успокоителя.
// Нумерация шагов набрана Manrope (не mono): лимит mono-подписей выбран hero и блоком 2.
const STEPS = [
  {
    n: '1',
    title: 'Заявка и время',
    text: 'Оставляете заявку — перезваниваем и подбираем удобный день и час. Урок один, 60 минут.',
  },
  {
    n: '2',
    title: 'Знакомство',
    text: 'Ребёнок выходит на связь с преподавателем один на один. Никакой группы и никаких других детей.',
  },
  {
    n: '3',
    title: 'Работа',
    text: 'Под руководством преподавателя ребёнок собирает своего Джарвиса — помощника по математике — и забирает его себе.',
  },
  {
    n: '4',
    title: 'Разговор с вами',
    text: 'После урока преподаватель расскажет, как всё прошло, и предложит полную программу. Не захотите — ребёнок всё равно останется с готовым помощником.',
  },
]

const CALM = [
  {
    icon: 'computer',
    text: 'Нужен только компьютер или ноутбук с интернетом — мощная техника не требуется, всё работает в браузере.',
  },
  {
    icon: 'shield-check',
    text: 'От вас не требуется разбираться в нейросетях. Вести ребёнка дальше — наша роль, не ваша.',
  },
  {
    icon: 'user-headset',
    text: 'Урок индивидуальный: живой преподаватель рядом весь час, ребёнок не сидит один перед экраном.',
  },
  {
    icon: 'tools',
    text: 'Готовых ИИ-помощников сейчас много. Смысл урока в другом: ребёнок собирает своего сам и понимает, как он устроен изнутри.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-14 d:py-24" style={{ background: 'var(--bg)' }}>
      <div className="container-x">
        <Reveal>
          <h2 className="h2 text-center">Как проходит урок</h2>
        </Reveal>

        <ol className="mt-9 grid grid-cols-1 gap-4 d:mt-11 d:grid-cols-4 d:gap-5">
          {STEPS.map((s, i) => (
            <li key={s.n} className="h-full">
              <Reveal delay={i * 0.05} className="h-full">
                <div
                  className="flex h-full flex-col rounded-[20px] border p-[22px_20px] d:p-6"
                  style={{ borderColor: 'var(--line)', background: 'var(--surf)' }}
                >
                  <span
                    className="text-[26px] font-extrabold leading-none tracking-[-0.02em]"
                    style={{ color: 'var(--acc-2)' }}
                    aria-hidden="true"
                  >
                    {s.n}
                  </span>
                  <h3 className="mt-4 text-[18px] font-bold leading-[1.25] tracking-[-0.01em] text-[color:var(--fg)]">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] font-normal leading-[1.6] text-[color:var(--fg-2)]">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <ul
            className="mt-6 grid grid-cols-1 gap-5 rounded-[20px] border p-6 d:mt-5 d:grid-cols-2 d:gap-x-10 d:gap-y-6 d:p-7"
            style={{ borderColor: 'var(--line)', background: 'var(--bg-2)' }}
          >
            {CALM.map((c) => (
              <li key={c.icon} className="flex items-start gap-3">
                <span className="mt-0.5 flex-none" style={{ color: 'var(--acc-2)' }} aria-hidden="true">
                  <Icon name={c.icon} size={18} color="currentColor" />
                </span>
                <p className="text-[15px] font-normal leading-[1.55] text-[color:var(--fg-2)]">
                  {c.text}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
