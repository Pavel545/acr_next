import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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