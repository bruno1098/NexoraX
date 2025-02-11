/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  experimental: {
    // Desative recursos experimentais que possam causar problemas
    serverActions: false,
    appDir: true,
    serverComponentsExternalPackages: ['@lottiefiles/react-lottie-player']
  },
  // Otimizações de compilação
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: true,
  },
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: 'canvas' }];  // Required for Three.js
    return config;
  },
  // Configuração de imagens
  images: {
    domains: ['images.unsplash.com', 'assets.example.com', 'assets.lottiefiles.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

module.exports = nextConfig;
