import { Icon } from '@/components/Icon';

// Блок 3. Три иконки-преимущества на сером фоне, без карточек — как на референсе.
const items = [
  {
    icon: 'user-headset',
    line1: 'Профориентационный урок',
    line2: 'один на один со специалистом',
  },
  {
    icon: 'rocket-lunch',
    line1: '5 практических онлайн-занятий —',
    line2: 'каждое со своим проектом',
  },
  {
    icon: 'compass-alt',
    line1: 'Погружение в перспективные',
    line2: 'профессии будущего',
  },
];

export default function Advantages() {
  return (
    <section className="wrap pb-10 pt-11 md:pb-14 md:pt-14">
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:gap-6">
        {items.map((it) => (
          <li key={it.icon} className="flex flex-col items-center text-center">
            <span className="ico-round">
              <Icon name={it.icon} size={24} color="currentColor" />
            </span>
            <p className="mt-4 max-w-[260px] text-[15px] leading-[1.45]">
              {it.line1}{' '}
              <br className="hidden md:inline" />
              {it.line2}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
