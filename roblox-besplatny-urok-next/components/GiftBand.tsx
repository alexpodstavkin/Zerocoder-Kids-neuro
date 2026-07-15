// Подарочный блок у финальной формы (Блок 9). Расшифровка бонуса + нейтральная рамка,
// чтобы «2 курса в подарок» не читались как подвох на холодном трафике.
// Живёт на тёмной панели FinalForm (текст белый).
// Плейсхолдер «Что за курсы» — под одну строку владельца: конкретику НЕ выдумываем.
export function GiftBand() {
  return (
    <div
      className="rounded-md p-5"
      style={{
        background: 'color-mix(in srgb, var(--acc) 18%, transparent)',
        border: '1px solid color-mix(in srgb, var(--acc) 40%, transparent)',
      }}
    >
      <div className="flex items-start gap-2.5 text-[15px] font-semibold leading-snug text-white">
        <i className="fi fi-sr-gift mt-0.5 flex-none text-[18px]" style={{ color: 'var(--acc-2)' }} aria-hidden />
        <span>
          Бесплатное занятие 1-на-1 с преподавателем{' '}
          <span className="font-extrabold" style={{ color: 'var(--acc-2)' }}>
            + 2 курса в подарок за запись
          </span>
        </span>
      </div>
      <p className="mt-2.5 text-[13px] leading-snug text-white/75">
        Дарим за запись на бесплатный урок — без доплат и обязательств продолжать.
      </p>
      {/* TODO (владелец): дописать ОДНУ строку — что это за 2 курса (тема/формат, остаётся ли
          доступ у ребёнка). Конкретику НЕ выдумывать — как только владелец даст факт, подставить
          строку сюда и в FAQ №4. Плейсхолдер намеренно виден до наполнения. */}
      <p className="mt-2 text-[13px] leading-snug text-white/45">
        Что за курсы: __________
      </p>
    </div>
  )
}
