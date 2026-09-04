import { Section, SectionHead } from '@/components/Section';
import { Photo } from '@/components/Photo';
import { BP } from '@/lib/basePath';

// Ряд «фото слева — текст справа». Обе половины одного размера:
// grid из двух равных колонок + items-stretch + h-full у каждой половины.
// Цифры подаются без акцента — обычным текстом, наравне с остальным (правка владельца).
const facts = [
  'Число вакансий, где требуются навыки работы с искусственным интеллектом, за год выросло в 2,7 раза. В I квартале 2026 года таких предложений было больше 16,5 тысяч.',
  'При этом 71 % школьников 12–17 лет уже пользуются нейросетями. Но из тех, кто применяет их в учёбе, 53 % просто перекладывают на ИИ домашнюю работу.',
];

export default function FutureProfessions() {
  return (
    <Section bg="paper">
      <SectionHead title={<>Что значит погрузиться в&nbsp;профессии будущего сегодня</>} />

      <div className="grid items-stretch gap-6 md:grid-cols-2">
        <Photo
          src={`${BP}/photos/ai-lesson-class.jpg`}
          alt="Школьники работают с нейросетями на занятии в компьютерном классе"
          aspect="auto"
          radius="xl"
          className="order-2 h-full min-h-[260px] md:order-none md:min-h-[380px]"
        />

        <div
          className="order-1 flex h-full flex-col justify-center gap-5 rounded-xl border bg-white p-7 md:order-none md:p-9"
          style={{ borderColor: 'var(--bord)' }}
        >
          {facts.map((f) => (
            <p key={f.slice(0, 24)} className="text-[16px] leading-[1.55] text-sub md:text-[17px]">
              {f}
            </p>
          ))}

          <p className="pt-1 text-[17px] font-extrabold leading-[1.4] tracking-[-0.01em] text-ink md:text-[19px]">
            Ребёнок уже живёт среди нейросетей. Вопрос только в&nbsp;том, останется он
            их&nbsp;<span className="hl">потребителем — или станет автором</span>.
          </p>
        </div>
      </div>
    </Section>
  );
}
