import localFont from 'next/font/local';

// --- Inter ---
export const inter = localFont({
  src: [
    {
      path: '../../public/fonts/web/inter-light.woff2',
      weight: '300',
      style: 'normal',
    }, {
      path: '../../public/fonts/web/inter-regular.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/web/inter-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-family',
  display: 'swap',
});

// --- Unbounded ---
export const unbounded = localFont({
  src: [
    {
      path: '../../public/fonts/web/Unbounded-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  preload: false,
  variable: '--second-family',
  display: 'swap',
});