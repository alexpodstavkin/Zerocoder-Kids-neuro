import { Button } from './Button'

const STEPS = [
  {
    icon: 'user-headset',
    title: 'Знакомство',
    text: 'Преподаватель созванивается с ребёнком один на один, открывает Roblox Studio и объясняет, с чего начнём',
  },
  {
    icon: 'cube',
    title: 'Строим уровень',
    text: 'Ребёнок ставит первые объекты и собирает платформер — под подсказки преподавателя, но своими руками',
  },
  {
    icon: 'brackets-curly',
    title: 'Пишем код',
    text: 'Первые строки на Lua: ребёнок оживляет объекты и видит, как код меняет игру прямо на экране',
  },
  {
    icon: 'play-circle',
    title: 'Показ результата',
    text: 'Ребёнок запускает свою игру и показывает её вам. Преподаватель отвечает на вопросы и рассказывает, что можно изучать дальше',
  },
]

// Блок «Как проходит урок» (4 этапа) + строка длительности + CTA. Светлая тема.
// Блок безопасности убран по правке владельца.
export function LessonSteps() {
  return (
    <section id="how" className="bg-paper py-14 md:py-24">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-[760px] text-center">
          <h2 className="h2 normal-case text-ink">Как проходит урок</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className="relative rounded-lg border bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft"
              style={{ borderColor: 'var(--bord)' }}
            >
              <span className="absolute right-6 top-6 text-[40px] font-extrabold leading-none tracking-tightest text-acc/20">
                {i + 1}
              </span>
              <span className="ico-chip mb-4">
                <i className={`fi fi-rr-${s.icon}`} aria-hidden />
              </span>
              <h3 className="h3 mb-2.5 text-ink">{s.title}</h3>
              <p className="text-[15px] text-sub">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-3 rounded-lg border bg-white px-6 py-4 text-center text-[15px] font-semibold text-ink shadow-sm" style={{ borderColor: 'var(--bord)' }}>
          <i className="fi fi-rr-clock text-[18px]" style={{ color: 'var(--acc)' }} aria-hidden />
          Урок идёт один на один с преподавателем и занимает около 45–60 минут
        </div>

        {/* CTA после блока «Как проходит» */}
        <div className="mt-8 flex justify-center">
          <Button href="#register" variant="flat" arrow>
            Записаться на бесплатное занятие
          </Button>
        </div>
      </div>
    </section>
  )
}
