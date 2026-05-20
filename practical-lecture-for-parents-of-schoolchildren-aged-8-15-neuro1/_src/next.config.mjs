/** @type {import('next').NextConfig} */
const basePath = '/practical-lecture-for-parents-of-schoolchildren-aged-8-15-neuro1'

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: { unoptimized: true },
}

export default nextConfig
