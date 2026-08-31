// Next сам проставляет basePath только в next/image, <Link> и метаданных.
// Для «сырых» ссылок (<img src>, <link href>, background-image) префикс нужен вручную.
// Прод отдаётся с корня kids.zerocoder.ru в папке /gos-ai-urok.
export const BP =
  process.env.NODE_ENV === 'production' ? (process.env.BASEPATH ?? '/gos-ai-urok') : ''
