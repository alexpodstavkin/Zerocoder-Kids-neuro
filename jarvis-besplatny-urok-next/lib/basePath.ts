// Префикс подпути для статики из public/. Пустой при локальном запуске,
// '/jarvis-besplatny-urok' при боевой сборке (kids.zerocoder.ru).
// Значение приходит из next.config.js (поле env).
export const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

// Собирает путь к файлу из public/ с учётом basePath.
export const asset = (path: string) => `${BP}${path}`
