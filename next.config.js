/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.cloudofgoods.com',
      },
      {
        protocol: 'https',
        hostname: 'prodeastusmappscreative.azureedge.net',
      },
    ],
  },
}

module.exports = nextConfig
