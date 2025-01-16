import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.vivino.com',
      },
      {
        protocol: 'https',
        hostname: 'thumbs.vivino.com',
      },
    ],
  },
};

export default nextConfig;
