import { GetCourseWidget } from './GetCourseWidget'
import { SignupForm } from './SignupForm'
import { Reveal } from './Reveal'

// Переключатель приёма заявок. true — боевой виджет GetCourse,
// false — самописная форма-фолбэк (SignupForm.tsx) на клиентской валидации.
// Возврат к фолбэку — правка одной строки.
const USE_GETCOURSE = true

// Блок 7 — регистрация. Единственная панель со скобками (4-й и последний объект),
// вторая и последняя секция с HUD-сеткой, единственный ореол реактора без колец.
// Рядом с формой нет чипов доверия, буллетов-гарантий и дефицита — запрет владельца.
export function Signup() {
  return (
    <section
      id="zapis"
      className="relative overflow-hidden py-16 d:py-[104px]"
      style={{ background: 'var(--bg)' }}
    >
      <div className="hud-grid" aria-hidden="true" />

      <div className="container-x relative">
        <div
          className="brackets brackets-xl relative overflow-hidden rounded-[20px] border p-[28px_20px] d:rounded-[28px] d:p-10"
          style={{
            background: 'linear-gradient(160deg, var(--surf-2), var(--bg-2))',
            borderColor: 'var(--line-2)',
          }}
        >
          {/* Ореол вынесен влево-вниз: за формой он был не виден и не работал */}
          <span
            className="reactor-halo bottom-[-200px] left-[-160px] !opacity-[.62]"
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-1 items-start gap-8 d:grid-cols-[1fr_460px] d:gap-12">
            <Reveal className="d:pt-2">
              <h2 className="h2">
                Запишите ребёнка на <span style={{ color: 'var(--acc-hot)' }}>бесплатный</span> урок
              </h2>
              <p className="mt-4 max-w-[460px] text-[17px] font-medium leading-[1.5] text-[color:var(--fg-2)] d:text-[18px]">
                Один час, чтобы он увидел: нейросеть — не ГДЗ, а инструмент, которым можно управлять.
              </p>
            </Reveal>

            {/* Виджет GetCourse несёт собственные чекбоксы согласия (оферта + обработка
                персональных данных), поэтому своей строки согласия рядом с ним нет —
                она осталась внутри фолбэк-формы. Набор полей в виджете привести
                к трём: Имя / Телефон / E-mail. */}
            {USE_GETCOURSE ? <GetCourseWidget /> : <SignupForm />}
          </div>
        </div>
      </div>
    </section>
  )
}
