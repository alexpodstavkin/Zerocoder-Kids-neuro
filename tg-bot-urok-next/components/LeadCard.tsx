'use client';

import { useEffect, useRef, useState } from 'react';
import { BP } from '@/lib/basePath';
import { content } from '@/app/content';
import CardBanner from './CardBanner';
import GetCourseWidget from './GetCourseWidget';
import { scrollToForm, scrollToTop } from './scrollToForm';
import { track } from './track';

/**
 * Карточка лид-формы — главный объект экрана.
 *
 * Устройство повторяет конструктор лид-форм VK с референса:
 * фиксированная шапка → скроллящееся тело → закреплённая внизу кнопка.
 * Кнопка видна всегда, поэтому с первой секунды понятно, что просят
 * ровно одно действие.
 *
 * Порядок содержимого задан брифом и менять его нельзя: баннер →
 * плашка бренда → заголовок → буллиты → снятие возражения → форма.
 * Выше сгиба обязаны быть баннер, заголовок и первые буллиты.
 */
export default function LeadCard() {
  const { chromeTitle, brandline, headline, lead, objection, cta } = content.card;

  // Зелёная кнопка ведёт к форме — и уходит, когда форма доехала до кадра.
  // Иначе в момент решения рядом стоят две кнопки отправки: наша и собственная
  // кнопка виджета GetCourse (её из чужого iframe не убрать).
  //
  // Кнопка лежит НАД телом карточки, а не в потоке, и считаем мы по положению
  // прокрутки, а не наблюдателем пересечений. Первая версия занимала место в
  // колонке: при скрытии она отдавала телу свои 64px, менялось то, что попадает
  // в кадр, условие переключалось обратно — и кнопка моргала. У наложения
  // высота тела постоянна, поэтому петли нет. Нижний отступ содержимого
  // держит запас под кнопку, чтобы она ничего не накрывала.
  const formRef = useRef<HTMLDivElement>(null);
  const [atForm, setAtForm] = useState(false);

  useEffect(() => {
    const box = document.querySelector<HTMLElement>('.card-scroll');
    const form = formRef.current;
    if (!box || !form) return;

    // Высота формы в проверке обязательна. Без неё кнопка пряталась в двух
    // случаях: в первые доли секунды после загрузки, пока виджет ещё не
    // отрисовался, и навсегда — если скрипт виджета заблокирован. Во втором
    // случае человек доскроллил бы до пустоты вообще без кнопки.
    const check = () =>
      setAtForm(form.offsetHeight > 120 && box.scrollTop + box.clientHeight - 60 > form.offsetTop);

    check();
    box.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);

    // Форма приезжает асинхронно и меняет высоту — пересчитываем по факту.
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(check) : null;
    ro?.observe(form);

    return () => {
      box.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
      ro?.disconnect();
    };
  }, []);

  return (
    <div className="lead-card relative z-10 flex max-h-full flex-col overflow-hidden rounded-[12px] bg-white">
      {/* ---------- Шапка карточки ----------
          Зоны касания 36×36 при иконках 16px: значки стоят вплотную друг к
          другу, и промах по соседнему меняет смысл действия. */}
      <div className="flex h-12 shrink-0 items-center gap-1 px-2">
        <button
          type="button"
          onClick={() => {
            track('chrome_close');
            scrollToTop();
          }}
          aria-label="Свернуть к началу"
          className="flex h-9 w-9 items-center justify-center text-[var(--tg-ink)] transition-opacity duration-200 hover:opacity-60"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* 13px, а не 15: «Запись на бесплатный урок» при трёх значках
            обрезалось ровно на слове «урок» — терялось «бесплатный». */}
        <span className="chrome-title flex-1 truncate text-center text-[13px] font-bold text-[var(--tg-ink)]">
          {chromeTitle}
        </span>

        <button
          type="button"
          onClick={() => {
            track('chrome_icon');
            scrollToForm();
          }}
          aria-label="Перейти к форме записи"
          className="chrome-extra flex h-9 w-9 items-center justify-center text-[var(--tg-sub)] transition-opacity duration-200 hover:opacity-60"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <circle cx="12" cy="5" r="1.7" />
            <circle cx="12" cy="12" r="1.7" />
            <circle cx="12" cy="19" r="1.7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => {
            track('chrome_icon');
            scrollToForm();
          }}
          aria-label="Развернуть форму записи"
          className="flex h-9 w-9 items-center justify-center text-[var(--tg-sub)] transition-opacity duration-200 hover:opacity-60"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M14 4h6v6M20 4l-7 7M10 20H4v-6M4 20l7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* ---------- Тело карточки: единственная скроллящаяся область ---------- */}
      <div className="card-scroll min-h-0 flex-1">
        <CardBanner />

        {/* Плашка бренда + аватар, приподнятый над ней — как на референсе.
            Заливка вместо обводки-капсулы: капсула с бордером и серым текстом
            читалась как неактивное поле поиска, в неё пытаются печатать. */}
        <div className="px-3 pt-3">
          <div className="flex items-start gap-2">
            <p className="flex-1 rounded-flat bg-paper px-3 py-2 text-[12px] leading-[1.3] text-sub">
              {brandline}
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${BP}/logo-icon.png`}
              alt=""
              className="-mt-1 h-11 w-11 shrink-0 rounded-full ring-4 ring-white"
            />
          </div>
        </div>

        {/* pb — запас под кнопку-наложение, чтобы она ничего не накрывала */}
        <div className="px-3 pb-[72px] pt-3">
          <h1 className="text-[15px] font-bold leading-[1.3] text-ink">{headline}</h1>

          <p className="mt-3 text-[14px] leading-[1.4] text-sub">{lead}</p>

          <p className="mt-3 text-[14px] leading-[1.4] text-sub">{objection}</p>

          {/* Якорь скролла: сюда ведут кнопки и значки карточки */}
          <div id="lead-form" ref={formRef} className="mt-2">
            <GetCourseWidget />
          </div>
        </div>
      </div>

      {/* ---------- Кнопка, закреплённая внизу карточки ----------
          Тёмный текст на светлом акценте, а не белый на тёмно-зелёном:
          белое на #00C159 даёт 2.39:1 и проваливает AA, а на ховере
          становилось 1.68:1 — надпись почти исчезала. */}
      <div
        aria-hidden={atForm}
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-white via-white to-transparent p-2 pt-7 transition-opacity duration-200 ease-in-out ${
          atForm ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <button
          type="button"
          tabIndex={atForm ? -1 : 0}
          onClick={() => {
            track('cta_card');
            scrollToForm();
          }}
          className="pointer-events-auto w-full rounded-flat bg-acc py-3 text-[15px] font-bold text-ink shadow-soft transition-colors duration-200 hover:bg-acc-dark hover:text-white"
        >
          {cta}
        </button>
      </div>
    </div>
  );
}
