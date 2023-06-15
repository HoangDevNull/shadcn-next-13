import localFont from 'next/font/local';

export const SFProDisplayFont = localFont({
  src: [
    {
      path: '../../public/fonts/SFProDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SFProDisplay-Bold.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/SFProDisplay-Medium.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SFProDisplay-Medium.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/SFProDisplay-Regular.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SFProDisplay-Regular.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/SFProDisplay-LightItalic.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SFProDisplay-LightItalic.woff2',
      weight: '200',
      style: 'italic',
    },
  ],
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Open Sans',
    'Helvetica Neue',
    'sans-serif',
  ],
  variable: '--font-sf',
});

export const OrbitronFont = localFont({
  src: [
    {
      path: '../../public/fonts/Orbitron-Black.woff2',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Orbitron-Black.woff2',
      style: 'italic',
    },
  ],
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Open Sans',
    'Helvetica Neue',
    'sans-serif',
  ],
  variable: '--font-orbit',
});
