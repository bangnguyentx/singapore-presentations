/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  trailingSlash: true,
  output: 'export'
}

module.exports = nextConfig
