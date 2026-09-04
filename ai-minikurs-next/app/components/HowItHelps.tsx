import { Section, SectionHead } from '@/components/Section';
import { Bento, Cell } from '@/components/Bento';

const items = [
  {
    icon: 'diploma',
    title: 'Создают свои проекты',
    text: 'Развиваются быстрее: за пять занятий ребёнок сразу применяет новое на практике, а не запоминает теорию для контрольной.',
  },
  {
    icon: 'brain-circuit',
    title: 'Осваивают современные навыки',
    text: 'Нейросети приходят в школу. Ребёнок встретит их подготовленным, а не догоняющим.',
  },
  {
    icon: 'target',
    title: 'Не сдаются на полпути',
    text: 'Занятия в записи, смотреть можно когда удобно. Ребёнок учится доводить проекты до результата — до того, чем можно поделиться и что можно показать.',
  },
];

export default function HowItHelps() {
  return (
    <Section bg="white">
      <SectionHead
        title={
          <>
            Как наша программа помогает детям{' '}
            <span className="whitespace-nowrap">10–14&nbsp;лет</span>
          </>
        }
      />

      <Bento cols={3}>
        {items.map((i) => (
          <Cell key={i.title} icon={i.icon} title={i.title} className="hover:shadow-sm">
            {i.text}
          </Cell>
        ))}
      </Bento>
    </Section>
  );
}
