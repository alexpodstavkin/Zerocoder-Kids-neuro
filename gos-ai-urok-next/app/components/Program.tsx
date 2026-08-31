import { Section, SectionHead } from '@/components/Section';
import { Bento, Cell } from '@/components/Bento';
import { Button } from '@/components/Button';
import { Photo } from '@/components/Photo';
import { Icon } from '@/components/Icon';
import { Reveal } from '@/components/Reveal';
import { BP } from '@/lib/basePath';

const modules = [
  {
    n: '01',
    verb: 'УЗНАЕТ',
    icon: 'brain',
    title: 'Что такое нейросети и как они устроены',
    text:
      'Принципы работы нейросетей на знакомых ребёнку примерах. Навык написания промптов и проверки ответов искусственного интеллекта.',
  },
  {
    n: '02',
    verb: 'СДЕЛАЕТ',
    icon: 'robot',
    title: 'Свой личный ИИ-проект',
    text:
      'Под руководством опытного наставника соберёт работающий проект. Научится самостоятельно находить неточности в работе нейросетей и исправлять их.',
  },
  {
    n: '03',
    verb: 'ПОЙМЁТ',
    icon: 'school',
    title: 'Как применять ИИ в школе и в жизни',
    text:
      'От школьной домашки до собственных проектов: ребёнок видит, где нейросеть становится реальным помощником, а где даёт поверхностный совет. Финальный диалог с педагогом — ответы на вопросы родителя и ребёнка, индивидуальные рекомендации, как развивать навык после урока.',
  },
];

export default function Program() {
  return (
    <>
      {/* --- 1. Официальное сообщение + партнёрство + фото (фон paper) --- */}
      <Reveal>
      <Section bg="paper">
        <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:grid-rows-[1fr_auto]">
          <Photo
            src={`${BP}/photos/initiative-it-class.jpg`}
            alt="Школьники изучают информатику и нейросети в IT-классе"
            aspect="auto"
            radius="xl"
            className="order-2 h-full min-h-[220px] md:order-none md:min-h-[280px]"
          />

          <div
            className="order-1 flex items-center gap-4 rounded-lg border bg-white p-5 md:order-none"
            style={{ borderColor: 'var(--bord)' }}
          >
            <p className="text-[15px] font-semibold leading-[1.5]">
              Всероссийская программа реализуется в&nbsp;сотрудничестве с&nbsp;ведущим университетом СНГ по&nbsp;обучению искусственному интеллекту — «Зерокодер»
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${BP}/partners/zerocoder.png`}
              alt="Логотип Университета Зерокодер"
              width={56}
              height={56}
              loading="lazy"
              className="h-14 w-14 flex-none rounded-md object-contain"
            />
          </div>

          <div
            className="order-3 rounded-xl border bg-white p-7 md:order-none md:col-start-2 md:row-start-1 md:row-end-3 md:p-9"
            style={{ borderColor: 'var(--bord)' }}
          >
            <span className="pill">
              <Icon name="megaphone" style="solid" size={12} color="var(--acc)" />
              Официальное сообщение
            </span>

            <p className="mt-5 text-[19px] font-extrabold leading-[1.35] tracking-[-0.01em] text-ink md:text-[21px]">
              По&nbsp;официальному заявлению министра просвещения Сергея Кравцова, с&nbsp;2026&nbsp;года в&nbsp;школьную программу по&nbsp;информатике вводится новый <span className="hl">профиль «Искусственный интеллект»</span>.
            </p>

            <p className="caption mt-4 uppercase tracking-[0.06em]">
              Источник: РИА&nbsp;Новости · 20&nbsp;мая&nbsp;2026
            </p>

            <details className="faq-item mt-6">
              <summary>Подробнее об&nbsp;инициативе</summary>
              <blockquote
                className="pb-[22px] pl-4 text-[15px] text-sub"
                style={{ borderLeft: '3px solid var(--acc)' }}
              >
                <p>
                  «Москва и&nbsp;Подмосковье уже запустили программы: школьники изучают нейросети в&nbsp;рамках уроков информатики. С&nbsp;2026&nbsp;года инициатива будет постепенно распространяться на&nbsp;школы России.
                </p>
                <p className="mt-3">
                  Цель — подготовить новое поколение к&nbsp;цифровой экономике: чтобы выпускник свободно владел нейросетями как базовым рабочим инструментом, понимал их&nbsp;возможности и&nbsp;ограничения, а&nbsp;страна сохраняла технологическое лидерство в&nbsp;ключевой отрасли».
                </p>
              </blockquote>
            </details>
          </div>
        </div>
      </Section>
      </Reveal>

      {/* --- 2. Регламент участия + программа урока (фон white) --- */}
      <Reveal>
      <Section id="program" bg="white">
        <SectionHead
          title={
            <>
              Чтобы подготовить ребёнка к&nbsp;новому школьному курсу и&nbsp;повысить
              успеваемость, проводится <span className="hl">бесплатный урок</span>
            </>
          }
          lead="На уроке ребёнок:"
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
            >
              {m.text}
            </Cell>
          ))}
        </Bento>

        <div className="mt-10 flex justify-center">
          <Button href="#cta" arrow>
            Подать заявку
          </Button>
        </div>
      </Section>
      </Reveal>
    </>
  );
}
