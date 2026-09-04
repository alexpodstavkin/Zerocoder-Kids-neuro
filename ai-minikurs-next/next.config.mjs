/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? (process.env.BASEPATH ?? '/ai-minikurs') : '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  // Пробрасываем в код: <img src>, <link href>, background-image и FreshCheck
  // Next сам не префиксует — они берут значение отсюда.
  env: { BASEPATH: basePath },
};

export default nextConfig;
