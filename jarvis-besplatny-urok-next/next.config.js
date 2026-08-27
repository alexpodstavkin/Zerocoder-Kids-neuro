/** @type {import('next').NextConfig} */
// Репозиторий Zerocoder-Kids-neuro отдаётся на kids.zerocoder.ru С КОРНЯ,
// поэтому basePath = только имя папки, БЕЗ имени репозитория.
// Боевая сборка:  EXPORT=1 npm run build   → out/ уже с /jarvis-besplatny-urok.
// Переопределить (например, под alexpodstavkin.github.io/test/...) можно так:
//   EXPORT=1 NEXT_PUBLIC_BASE_PATH=/test/jarvis-besplatny-urok npm run build
// Локально (npm run dev) basePath пустой.
// ⚠️ Пути к файлам из public/ (логотип, аватары, uicons) Next НЕ префиксует —
// они собираются вручную через NEXT_PUBLIC_BASE_PATH (см. lib/basePath.ts),
// поэтому значение прокидывается в клиент через env ниже.
const FOLDER = '/jarvis-besplatny-urok'
const isExport = process.env.EXPORT === '1'
const basePath = isExport ? process.env.NEXT_PUBLIC_BASE_PATH || FOLDER : ''

const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  ...(isExport
    ? { output: 'export', trailingSlash: true, basePath, assetPrefix: basePath }
    : {}),
}
module.exports = nextConfig
