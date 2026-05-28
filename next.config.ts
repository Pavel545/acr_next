import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
        ],
      },
    ];
  },
  output: 'standalone',
  reactCompiler: true,

  // Конфигурация для Turbopack (заменяет webpack)
  turbopack: {
    // Правила для загрузчиков
    rules: {
      // Поддержка импорта SVG как React-компонентов через @svgr/webpack
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
    // Опционально: настройка корневой директории, если нужно
    // root: path.join(__dirname, '../..'), // раскомментируйте если нужно
  },
};

export default nextConfig;