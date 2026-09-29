import { readFileSync } from 'node:fs';

/** @type {import('next').NextConfig} */
// Статический экспорт. basePath — только имя папки от корня домена
// (kids.zerocoder.ru/proforient-urok/); для превью в репо test собирать с BASEPATH=/test/proforient-urok.
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? (process.env.BASEPATH ?? '/proforient-urok') : '';

// Штамп сборки из public/version.json (пишет scripts/stamp.mjs в prebuild).
let buildStamp = 'dev';
try {
  buildStamp = JSON.parse(readFileSync(new URL('./public/version.json', import.meta.url), 'utf8')).v;
} catch {}

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  env: { BASEPATH: basePath, BUILD_STAMP: buildStamp },
};

export default nextConfig;
