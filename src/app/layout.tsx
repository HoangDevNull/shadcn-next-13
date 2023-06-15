import '@/styles/globals.css';

import { OrbitronFont, SFProDisplayFont } from '@/styles/fonts';
import MainLayout from '@/ui/layouts/MainLayout';

export const metadata = {
  title: 'Next 13 - 3D template',
  description: 'The easiest and fastest way to create a 3D website using React Three Fiber and NextJS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${OrbitronFont.variable} ${SFProDisplayFont.variable}`}>
      <head />
      <body suppressHydrationWarning>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
