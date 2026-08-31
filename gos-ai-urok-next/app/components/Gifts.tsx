import { Section } from '@/components/Section';
import { Icon } from '@/components/Icon';

const gifts = [
  {
    icon: 'file-chart-line',
    eyebrow: 'Авторский материал «Зерокодер»',
    title: 'Как изменится обучение детей в ближайшие 5 лет. Материал построен на свежем опросе ВЦИОМ',
    desc:
      'Аналитика по результатам всероссийского исследования общественного мнения родителей о трансформации школьного образования в связи с внедрением профиля «Искусственный интеллект».',
  },
  {
    icon: 'briefcase',
    eyebrow: 'Авторский материал «Зерокодер»',
    title: 'Нейросети и профессии будущего',
    desc:
      'Обзор перспективных профессиональных направлений и востребованных навыков эпохи искусственного интеллекта, адаптированный для школьников 5–8 классов и их родителей.',
  },
  {
    icon: 'clipboard-list-check',
    eyebrow: 'Методические материалы',
    title:
      'Материал по методике МГУ имени М. В. Ломоносова для выявления профессиональных склонностей ребёнка',
    desc:
      'Структурированный диагностический материал для самостоятельной оценки родителем и ребёнком предрасположенности к профессиям, которые будут востребованы через 5–7 лет.',
  },
];

// Бонусная зона: секция paper (чередование после белого блока вопросов), карточки — акцентный тинт.
export default function Gifts() {
  return (
    <Section id="gifts" bg="paper">
      <div className="mx-auto mb-12 max-w-[820px] text-center">
        <h2 className="h2">
          Каждый зарегистрированный участник получает{' '}
          <span className="hl">три информационных материала</span>{' '}
          от&nbsp;партнёра программы
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {gifts.map((g, i) => (
          <article
            key={i}
            className="flex flex-col gap-3 rounded-xl p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
            style={{
              background: 'var(--acc-soft)',
              border: '1px solid color-mix(in srgb, var(--acc) 30%, transparent)',
            }}
          >
            <div className="flex items-center gap-3">
              <span className="ico-chip-solid">
                <Icon name={g.icon} style="solid" size={22} color="currentColor" />
              </span>
              <span
                className="text-[13px] font-extrabold"
                style={{ color: 'var(--acc-dark)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                className="text-[13px] font-semibold uppercase leading-[1.3] tracking-[0.06em]"
                style={{ color: 'var(--acc-dark)' }}
              >
                {g.eyebrow}
              </span>
            </div>
            <h3 className="h3">{g.title}</h3>
            <p className="text-[15px] leading-[1.55] text-sub">{g.desc}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
