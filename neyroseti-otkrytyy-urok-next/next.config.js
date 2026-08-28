/** @type {import('next').NextConfig} */
// Репозиторий отдаётся на kids.zerocoder.ru С КОРНЯ, поэтому basePath = /<папка>
// БЕЗ имени репозитория. BASEPATH позволяет пересобрать под другой префикс.
const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? (process.env.BASEPATH ?? '/neyroseti-otkrytyy-urok') : ''

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
}
module.exports = nextConfig
