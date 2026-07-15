import { RegisterForm } from './RegisterForm'

// Финальный CTA (по правке владельца): по центру, светлый фон с мягкими блобами-«лавой»,
// H2 «Запишите ребёнка на бесплатный урок» + подзаголовок «и заберите 2 курса в подарок»,
// ниже — форма записи. Текст тёмный на белом.
// hideTitle у формы — чтобы её внутренний титул не дублировал секционный H2.
export function FinalForm() {
  return (
    <section id="cta" className="relative overflow-hidden bg-paper py-16 md:py-24">
      <div className="container-x relative flex flex-col items-center text-center">
        <h2 className="h2 normal-case max-w-[760px] text-ink">Запишите ребёнка на бесплатный урок</h2>
        <p className="lead mx-auto mt-4 max-w-[600px] text-sub">
          и заберите <span className="hl">2 курса в подарок</span>
        </p>

        <div className="mt-9 w-full max-w-[520px]">
          <RegisterForm hideTitle />
        </div>
      </div>
    </section>
  )
}
