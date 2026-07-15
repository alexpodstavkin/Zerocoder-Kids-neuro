/** @type {import('next').NextConfig} */

// Ленд живёт в подпапке репозитория Zerocoder-Kids-neuro, который отдаётся
// GitHub Pages по адресу alexpodstavkin.github.io/Zerocoder-Kids-neuro/.
const repo = 'Zerocoder-Kids-neuro'
const folder = 'roblox-besplatny-urok'
// basePath/assetPrefix нужны только для продакшн-сборки под подпапку Pages.
// В dev остаются пустыми — локально ленд открывается на http://localhost:5251/.
const basePath = process.env.NODE_ENV === 'production' ? `/${repo}/${folder}` : ''

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
