import { readFileSync } from 'node:fs';

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? (process.env.BASEPATH ?? '/gos-ai-summer') : '';

// Штамп сборки из public/version.json (его пишет scripts/stamp.mjs в prebuild).
// Отдаётся коду через env: им помечены ссылки на файлы из public/ (см. app/lib/asset.ts)
// и по нему FreshCheck отличает свежую страницу от старой в кэше браузера.
let buildStamp = 'dev';
try {
  buildStamp = JSON.parse(readFileSync(new URL('./public/version.json', import.meta.url), 'utf8')).v;
} catch {}

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  env: { BASEPATH: basePath, BUILD_STAMP: buildStamp },
};

export default nextConfig;
