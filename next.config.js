/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  experimental: {
    // Desative recursos experimentais que possam causar problemas
    serverActions: true,
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
    // Adicione essa configuração para lidar com arquivos JSON
    config.module.rules.push({
      test: /\.json$/,
      type: 'javascript/auto',
      use: ['json-loader']
    });
    return config;
  },
  // Configuração de imagens
  images: {
    domains: ['images.unsplash.com', 'assets.example.com', 'assets.lottiefiles.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig;
