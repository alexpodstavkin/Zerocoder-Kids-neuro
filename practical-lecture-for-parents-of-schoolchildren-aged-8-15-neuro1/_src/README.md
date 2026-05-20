# Лендинг лекции-практикума для родителей 8–15 лет (Next.js 14)

Source-проект. Раздаётся как статика из корня этой папки на GitHub Pages.

## Запуск локально

```bash
cd _src
npm install
npm run dev
```

## Сборка для деплоя

```bash
cd _src
npm run build
```

`out/` содержит статический экспорт. Содержимое `out/` нужно скопировать в корень
этой папки проекта (`practical-lecture-for-parents-of-schoolchildren-aged-8-15-neuro1/`),
рядом с `_src/`.

## Где править

- **Тексты** — `_src/lib/content.ts`
- **Стили** — `_src/app/globals.css`
- **Дизайн-токены** — `_src/tailwind.config.ts` и `:root` в `globals.css`
- **Секции** — `_src/app/components/*.tsx`
- **Базовый путь** (под GitHub Pages / кастомный домен) — `basePath` в `_src/next.config.mjs`

## Аналитика

- Яндекс.Метрика `72085663` и Top.Mail.Ru `3739769` подключены в `_src/app/layout.tsx`.

## UTM-метки

Захватываются на загрузке (`_src/app/components/UtmCapture.tsx`),
хранятся в `localStorage` (`zc_utm_data_v1`),
пробрасываются в URL виджет-скрипта GetCourse внутри iframe модалки.

## Форма регистрации

GetCourse-виджет ID `1578138`. Грузится в iframe `srcDoc` внутри модалки —
см. `_src/app/components/RegistrationModal.tsx`.
