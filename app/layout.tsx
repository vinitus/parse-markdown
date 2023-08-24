import Header from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Sidebar from '@/components/Sidebar';

import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'] });

const myFont = localFont({
  src: [
    {
      path: './font/SpoqaHanSansNeo-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: './font/SpoqaHanSansNeo-Light.ttf',
      weight: '400',
      style: 'light',
    },
    {
      path: './font/SpoqaHanSansNeo-Medium.ttf',
      weight: '600',
      style: 'medium',
    },
    {
      path: './font/SpoqaHanSansNeo-Regular.ttf',
      weight: '500',
      style: 'regular',
    },
    {
      path: './font/SpoqaHanSansNeo-Thin.ttf',
      weight: '300',
      style: 'thin',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='kr'>
      <body className={myFont.className}>
        <Header />
        <main>
          <div className='max-w-screen-xl mx-auto p-10 flex flex-row w-full'>
            <Sidebar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
