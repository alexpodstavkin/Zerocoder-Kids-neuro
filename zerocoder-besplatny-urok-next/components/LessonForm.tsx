import { GetCourseWidget } from './GetCourseWidget'

export function LessonForm() {
  return (
    <section id="zapis">
      <div className="wrap">
        <div className="panel form-panel">
          <div>
            <div className="eyebrow">Запись на бесплатный урок</div>
            <h2>Не упускайте возможность &mdash; раскройте потенциал ребёнка</h2>
            <p className="desc">Выберите направление (его можно будет поменять перед уроком), оставьте контакты, и мы согласуем удобное время бесплатного урока.</p>
          </div>
          <div className="form-fields">
            {/* Форма записи GetCourse — вставляется скриптом виджета. */}
            <GetCourseWidget />
          </div>
        </div>
      </div>
    </section>
  )
}
