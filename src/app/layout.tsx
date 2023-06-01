import { Montserrat } from 'next/font/google';

import ThemeProvider from './theme-provider';

import { CMainLayout } from '@/components/layouts';

import './globals.css';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  style: ['normal', 'italic'],
  subsets: ['latin', 'vietnamese'],
});

export const metadata = {
  title: 'Trang web của tôi',
  description: 'Dòng này tui tự viết',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang="en" className={montserrat.className}>
        <body>
          <CMainLayout>{children}</CMainLayout>
        </body>
      </html>
    </ThemeProvider>
  );
}
