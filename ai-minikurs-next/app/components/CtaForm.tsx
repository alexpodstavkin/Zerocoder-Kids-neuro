import GetCourseWidget from './GetCourseWidget';

const meta = [
  'Доступ к онлайн-занятиям откроется сразу же',
  'Ссылку пришлём на указанную почту',
  'Участие в федеральной программе бесплатное',
];

// Финал по канону: белая секция, внутри тёмная градиентная панель с синим блобом.
export default function CtaForm() {
  return (
    <section id="cta" className="bg-paper py-14 md:py-24">
      <div className="container-x">
        <div className="grad-dark-blue on-dark relative overflow-hidden rounded-xl px-6 py-12 text-white md:px-12 md:py-14">
          <div
            className="blob absolute -right-24 -top-28 h-80 w-80 opacity-40"
            style={{ background: 'var(--acc)' }}
            aria-hidden
          />
          <div className="relative z-10 grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <h2 className="h2">
                Для участия в&nbsp;федеральной программе родителю учеников{' '}
                <span className="whitespace-nowrap">10–14&nbsp;лет</span> необходимо{' '}
                <span className="hl">заполнить форму</span>
              </h2>
              <div className="mt-6 flex flex-col gap-3">
                {meta.map((m) => (
                  <span key={m} className="flex items-center gap-3 text-[15px] font-medium text-white/90">
                    <span
                      className="h-1.5 w-1.5 flex-none rounded-full"
                      style={{ background: 'var(--acc-2)' }}
                      aria-hidden
                    />
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 text-ink md:p-7">
              <GetCourseWidget />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
