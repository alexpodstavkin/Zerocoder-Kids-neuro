/** @type {import('next').NextConfig} */

// Репозиторий Zerocoder-Kids-neuro отдаётся GitHub Pages на домене
// kids.zerocoder.ru — с КОРНЯ. Поэтому префикс ленда — только имя папки,
// без имени репозитория (так же у соседей: /roblox-besplatny-urok и т.д.).
// Продакшн-адрес: https://kids.zerocoder.ru/zerocoder-besplatny-urok/
const folder = 'zerocoder-besplatny-urok';
// basePath/assetPrefix нужны только для продакшн-сборки под подпапку домена.
// В dev остаются пустыми — локально ленд открывается на http://localhost:5241/.
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? (process.env.BASEPATH ?? `/${folder}`) : '';
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  // Пробрасываем префикс в клиент — для путей, которые basePath не переписывает
  // (url() фонов в CSS, <img src>, favicon).
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};
module.exports = nextConfig;
