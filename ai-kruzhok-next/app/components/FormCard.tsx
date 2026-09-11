import type { ReactNode } from 'react';
import GetCourseWidget from './GetCourseWidget';
import { FormArrow } from './Doodles';

// Правая карточка обеих форм (Hero и финальный блок): светло-сиреневый градиент,
// заголовок, микрокопия, рисованная стрелка к полям и виджет GetCourse.
// Подписи полей и кнопки живут внутри виджета — переопределить их снаружи нельзя.
// id — якорь для кнопок «Получить доступ»: ведут прямо к форме, а не к началу секции,
// иначе на телефоне кнопка приводила бы к карточке оффера с ещё одной такой же кнопкой.
// md:justify-center — с 11.09.2026 форма не масштабируется и на широком мониторе
// ниже соседней карточки: без центрирования под ней оставалась пустая треть карточки
// (финальный блок на 1920px). На телефоне карточка по высоте содержимого — не влияет.
export default function FormCard({
  id,
  title,
  note,
  footnote,
}: {
  id?: string;
  title: ReactNode;
  note?: ReactNode;
  footnote?: ReactNode;
}) {
  return (
    <div id={id} className="card-form flex scroll-mt-4 flex-col overflow-hidden p-6 md:justify-center md:p-8">
      <div className="relative">
        <h2 className="max-w-[320px] text-[21px] font-semibold leading-[1.22] md:text-[25px]">
          {title}
        </h2>
        {note && <p className="mt-3 max-w-[300px] text-[15px] leading-[1.45] text-ink">{note}</p>}
        <FormArrow className="doodle -top-1 right-0 hidden md:block" width={104} />
      </div>

      <div className="mt-6">
        <div className="gc-host">
          <GetCourseWidget />
        </div>
      </div>

      {footnote && (
        <p className="mt-5 text-[13px] leading-[1.45] text-sub">{footnote}</p>
      )}
    </div>
  );
}
