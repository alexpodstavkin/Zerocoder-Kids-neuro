import { Section, SectionHead } from '@/components/Section';
import { Bento, Cell } from '@/components/Bento';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';

// Ячейки без описаний: номер + глагол + одна строка сути (правка владельца).
const modules = [
  {
    n: '01',
    verb: 'УЗНАЕТ',
    icon: 'brain',
    title: 'Как устроены нейросети и как с ними правильно работать',
  },
  {
    n: '02',
    verb: 'СДЕЛАЕТ',
    icon: 'rocket-lunch',
    title: 'Пять собственных проектов, от простой генерации изображения до полноценной игры',
  },
  {
    n: '03',
    verb: 'ПОЙМЁТ',
    icon: 'shield-check',
    title: 'Где ИИ помогает учиться, а где мешает и как вести себя в интернете безопасно',
  },
];

export default function Program() {
  return (
    <Reveal>
      <Section id="program" bg="white">
        <SectionHead
          title={
            <>
              Чтобы подготовить ребёнка к&nbsp;профессиям будущего, выдаётся бесплатный
              доступ к&nbsp;<span className="hl">5&nbsp;онлайн-занятиям</span>
            </>
          }
          lead="На них ребёнок:"
        />

        <Bento cols={3}>
          {modules.map((m) => (
            <Cell
              key={m.n}
              icon={m.icon}
              className="hover:shadow-sm"
              title={
                <>
                  <span className="hl">
                    {m.n}&nbsp;&nbsp;{m.verb}
                  </span>
                  <br />
                  {m.title}
                </>
              }
            />
          ))}
        </Bento>

        <div className="mt-10 flex justify-center">
          <Button href="#cta" arrow>
            Получить доступ
          </Button>
        </div>
      </Section>
    </Reveal>
  );
}
