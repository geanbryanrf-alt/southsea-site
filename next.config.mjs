/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: false,
  },
  staticPageGenerationTimeout: 120,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
