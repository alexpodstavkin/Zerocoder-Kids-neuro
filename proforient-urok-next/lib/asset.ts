// Ссылки на файлы из public/ (фото, логотипы) — только через asset().
//
// kids.zerocoder.ru отдаёт картинки с `Cache-Control: public, immutable,
// max-age=2592000`: браузер держит их месяц и при immutable даже не
// перепроверяет. Имена у этих файлов постоянные, поэтому заменённое фото
// вернувшийся посетитель месяц бы не увидел. Штамп сборки в query делает
// каждую новую выкладку новым URL — картинка приезжает заново.
export const basePath = process.env.BASEPATH ?? '';
export const buildStamp = process.env.BUILD_STAMP ?? 'dev';

export function asset(path: string) {
  return `${basePath}${path}?v=${buildStamp}`;
}
