import type { ReactNode } from 'react';
import GetCourseWidget from './GetCourseWidget';
import { FormArrow } from './Doodles';

// Правая карточка обеих форм (Hero и финальный блок): светло-сиреневый градиент,
// заголовок, микрокопия, рисованная стрелка к полям и виджет GetCourse.
// Подписи полей и кнопки живут внутри виджета — переопределить их снаружи нельзя.
// id — якорь для кнопок «Получить доступ»: ведут прямо к форме, а не к началу секции,
// иначе на телефоне кнопка приводила бы к карточке оффера с ещё одной такой же кнопкой.
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
    <div id={id} className="card-form flex scroll-mt-4 flex-col overflow-hidden p-6 md:p-8">
      <div className="relative">
        <h2 className="max-w-[320px] text-[21px] font-semibold leading-[1.22] md:text-[25px]">
          {title}
        </h2>
        {note && <p className="mt-3 max-w-[300px] text-[15px] leading-[1.45] text-ink">{note}</p>}
        <FormArrow className="doodle -top-1 right-0 hidden md:block" width={104} />
      </div>

      <div className="gc-host mt-6">
        <GetCourseWidget />
      </div>

      {footnote && (
        <p className="mt-5 text-[13px] leading-[1.45] text-sub">{footnote}</p>
      )}
    </div>
  );
}
