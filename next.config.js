/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'formsltd.s3.ca-central-1.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.fontshare.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fonts.googleapis.com',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['gsap'],
  },
}

module.exports = nextConfig


