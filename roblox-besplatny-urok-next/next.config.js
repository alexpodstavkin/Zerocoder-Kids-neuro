/** @type {import('next').NextConfig} */

// Репозиторий Zerocoder-Kids-neuro отдаётся GitHub Pages на своём домене
// kids.zerocoder.ru — с КОРНЯ. Поэтому префикс ленда — только имя папки,
// без имени репозитория (так же у всех соседних лендов: /gos-ai-summer и т.д.).
// Продакшн-адрес: https://kids.zerocoder.ru/roblox-besplatny-urok/
const folder = 'roblox-besplatny-urok'
// basePath/assetPrefix нужны только для продакшн-сборки под подпапку домена.
// В dev остаются пустыми — локально ленд открывается на http://localhost:5251/.
const basePath = process.env.NODE_ENV === 'production' ? `/${folder}` : ''

const nextConfig = {
  reactStrictMode: true,
  output: 'export', // статический экспорт в out/ для GitHub Pages
  basePath,
  assetPrefix: basePath,
  images: { unoptimized: true }, // обязательно для output: export
  // Пробрасываем префикс в клиент — для путей, которые basePath не переписывает
  // (inline url() фона Hero, <link> на CSS иконок в layout).
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
}

module.exports = nextConfig
