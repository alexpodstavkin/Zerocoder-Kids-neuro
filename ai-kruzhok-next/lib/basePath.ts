// Next сам проставляет basePath только в next/image, <Link> и метаданных.
// Для «сырых» ссылок (<img src>, <link href>, background-image) префикс нужен вручную.
// Значение приходит из next.config.mjs (env.BASEPATH) — одно место на весь проект.
// Прод: /ai-minikurs на kids.zerocoder.ru, /test/ai-minikurs в репозитории test.
export const BP = process.env.BASEPATH ?? ''
