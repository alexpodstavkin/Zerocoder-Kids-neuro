import { StarOutline } from './Doodles';

// Блок 8. Олимпиады и льготы — тёмно-фиолетовая карточка.
// Субъект льготы — олимпиада, а не наши занятия. Мелкая строка под плашкой обязательна.
export default function Olympiads() {
  return (
    <section className="wrap py-10 md:py-14">
      <div className="card-deep px-6 py-11 text-center md:px-14 md:py-16">
        <StarOutline
          className="doodle right-8 top-10 hidden md:block"
          style={{ color: 'rgba(255,255,255,.45)' }}
          width={92}
        />

        <div className="relative z-[1] mx-auto flex max-w-[880px] flex-col items-center">
          <span className="pill-r pill-r-white">Важно!</span>

          {/* h2-compact — прежний мобильный кегль (правка владельца 09.09.2026):
              заголовок самый длинный на ленде, на укрупнённой шкале
              занимал весь экран телефона до первого смысла. */}
          <h2 className="h2 h2-compact mt-6 text-white">
            {/* Разбивка на три строки — только в вебе (правка владельца).
                На телефоне переносы отключены, строки встают сами по ширине.
                {' '} перед <br> обязателен: без него сборщик съедает пробел,
                и на мобильном получится «датьбольше». */}
            Бесплатные 5&nbsp;уроков могут дать{' '}
            <br className="hidden md:inline" />
            больше, чем просто{' '}
            <br className="hidden md:inline" />
            новую профессию
          </h2>

          <p className="mt-5 text-[15px] leading-[1.5] text-white/80">
            Если ребёнку понравится, дальше открывается ещё одна дорога &mdash; предметные
            и технологические олимпиады. Сейчас это просто интерес, а в старших классах &mdash;
            уже разговор о поступлении.
          </p>

          <div
            className="mt-7 rounded-[16px] px-6 py-6 text-[15px] leading-[1.5] text-white md:mt-8 md:px-9"
            style={{ background: 'rgba(255,255,255,.14)' }}
          >
            Диплом победителя или призёра на профильных направлениях вузы засчитывают: где-то как
            100&nbsp;баллов по профильному ЕГЭ, где-то как право поступить без вступительных
            испытаний. Какие именно олимпиады идут в зачёт и на каких условиях, каждый вуз решает
            сам и публикует в своих правилах приёма.
          </div>

          <p className="mt-5 text-[13px] leading-[1.45] text-white/65">
            Льготу даёт диплом олимпиады, а не занятия. Она учитывается, если результат ЕГЭ по
            профильному предмету &mdash; не ниже 75 баллов.
          </p>

          <a href="#cta-form" className="btn-r btn-r-cta mt-8">
            Получить доступ
          </a>
        </div>
      </div>
    </section>
  );
}
