import { MainHeader } from '@/components/main-header';
import { Merriweather } from 'next/font/google';
import '../globals.css';

const font = Merriweather({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main id="page">
          <MainHeader />
          {children}
        </main>
      </body>
    </html>
  );
}
