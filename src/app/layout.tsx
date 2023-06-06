import '@/styles/globals.css';

import LayoutWithThree from '@/ui/layouts/LayoutWithThree';

export const metadata = {
  title: 'Next 13 - 3D template',
  description: 'The easiest and fastest way to create a 3D website using React Three Fiber and NextJS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <head />
      <body suppressHydrationWarning>
        <LayoutWithThree>{children}</LayoutWithThree>
      </body>
    </html>
  );
}
