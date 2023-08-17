import { ReactNode } from 'react';
import MarkdownForm from '@/components/MarkdownForm';

export default function Home({ children }: { children: ReactNode }) {
  console.log(children);
  return (
    <main>
      <div className='max-w-screen-xl mx-auto p-10 flex flex-row w-full'>
        {/* sidebar */}
        <div className='sticky h-[100vh] flex-shrink-0 flex-col justify-between w-72'>
          <ul>1</ul>
          <ul>2</ul>
          <ul>3</ul>
          <ul>4</ul>
          <ul>5</ul>
        </div>
        <article className='w-full'>
          <MarkdownForm filename='HTTP,TCPIP' />
        </article>
      </div>
      {children}
    </main>
  );
}
