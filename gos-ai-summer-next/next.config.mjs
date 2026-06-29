/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? (process.env.BASEPATH ?? '/Zerocoder-Kids-neuro/gos-ai-summer') : '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
