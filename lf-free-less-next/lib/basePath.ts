// Next сам проставляет basePath только в next/image, <Link> и метаданных.
// Для «сырых» ссылок (<img src>, background-image) префикс нужен вручную.
// Значение приходит из next.config.mjs (env.BASEPATH) — одно место на весь проект.
export const BP = process.env.BASEPATH ?? ''
