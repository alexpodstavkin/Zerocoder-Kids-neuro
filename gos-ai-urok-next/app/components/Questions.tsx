import { Section } from '@/components/Section';
import { Photo } from '@/components/Photo';
import { BP } from '@/lib/basePath';

const questions = [
  'Какая цель нового профиля по искусственному интеллекту в школьной программе с 2026 года?',
  'Не заменит ли искусственный интеллект необходимость учиться?',
  'Безопасно ли школьнику работать с нейросетями?',
  'Какие профессии будут востребованы через 5–10 лет и как искусственный интеллект к ним готовит?',
  'Когда лучше начинать готовить ребёнка к профессиям будущего?',
  'Как родителю отслеживать прогресс ребёнка после урока?',
];

// Светлая секция на общем фоне ленда — выделения не требуется (правка владельца).
export default function Questions() {
  return (
    <Section bg="white">
      <div className="mx-auto mb-12 max-w-[820px] text-center">
        <h2 className="h2">
          Всероссийская программа призвана{' '}
          <span className="hl">
            обеспечить ребёнку востребованные навыки и&nbsp;перспективное будущее
          </span>
        </h2>
        <p className="lead mt-4 text-sub">
          После урока у&nbsp;ребёнка и&nbsp;родителя будут ответы на&nbsp;следующие вопросы:
        </p>
      </div>

      <div className="grid items-stretch gap-6 md:grid-cols-[1.15fr_0.85fr]">
        <ul className="flex list-none flex-col gap-3.5">
          {questions.map((q, i) => (
            <li
              key={i}
              className="flex items-start gap-3.5 rounded-md border bg-white p-5 transition-all duration-200 hover:-translate-y-0.5"
              style={{ borderColor: 'var(--bord)' }}
            >
              <span
                className="flex h-8 w-8 flex-none items-center justify-center rounded-sm text-[13px] font-extrabold"
                style={{ background: 'var(--acc-soft)', color: 'var(--acc)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-[15px] font-semibold leading-snug text-ink">{q}</span>
            </li>
          ))}
        </ul>

        <Photo
          src={`${BP}/photos/questions-parents-kids.png`}
          alt="Родители вместе с детьми готовятся к школьной программе по искусственному интеллекту"
          aspect="auto"
          radius="xl"
          className="h-full min-h-[240px] md:min-h-[320px]"
        />
      </div>
    </Section>
  );
}
