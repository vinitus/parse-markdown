import { useMemo } from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import localFont from 'next/font/local';
import getFileList from '@/utils/getFileList';
import './globals.css';

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
  const fileList = getFileList();

  return (
    <html lang='kr'>
      <body className={myFont.className}>
        <Header />
        <main className='bg-[var(--main-bg)] text-[var(--main-font)]'>
          <div className='max-w-screen-xl mx-auto p-10 flex flex-row w-full'>
            <Sidebar fileList={fileList} />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
