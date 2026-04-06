import type { Metadata } from "next";
import "./globals.css";
import { inter, unbounded } from './fonts';

import { Header } from "@/components/shared/header/header";
import { Footer } from "@/components/shared/footer/footer";



const siteUrl = "https://acr-agency.ru/";
const siteName = "АЦР - агенство по разработке сайтов и приложений";
const siteDescription = "АЦР - агенство по разработке сайтов и приложений";


export const metadata: Metadata = {
  // Базовые метаданные
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | АЦР",
  },
  description: siteDescription,

  // Канонический URL
  alternates: {
    canonical: "/",
    languages: {
      "ru-RU": "/",
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName: siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/og-image__Universal_OG_1200x630__1200x630.jpg",
        width: 1200,
        height: 630,
        alt: siteDescription,
        type: "image/jpeg",
        secureUrl: `${siteUrl}/og-image__Universal_OG_1200x630__1200x630.jpg`,
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/og-image__Twitter_X_Large_1200x675__1200x675.jpg",
        alt: siteDescription,
        width: 1200,
        height: 675,
      },
    ],
    // Если есть Twitter аккаунт - раскомментировать:
    // site: "@burzhuy",
    // creator: "@burzhuy",
  },

  // Иконки
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/icons/icon-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/icons/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },

  // Манифест
  manifest: "/manifest.json",

  // Apple Web App
  appleWebApp: {
    capable: true,
    title: siteName,
    statusBarStyle: "black-translucent",
  },

  // SEO
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },



  // Категория
  category: "it",

  // Ключевые слова
  keywords: [
    "Лендинг",
    "Корпоративный сайт",
    "Интернет-магазины",
    "Умные чат",
    "Разработка мобильных приложений",
    "Дизайн",
    "Маркетинг"
  ],

  // Авторы
  authors: [
    { name: "AЦР", url: siteUrl },
  ],

  // Publisher
  publisher: "AЦР",

  // Форматы
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Абсолютные ссылки для старых ботов
  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:locale": "ru_RU",
    "og:site_name": "AЦР",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${unbounded.variable}`}>
      <body >
        <Header/>
        {children}
        <Footer /> 
      </body>
    </html>
  );
}
