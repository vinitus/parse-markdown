import Image from 'next/image';
import blogLogo from '@/public/blog-logo.png';

export default function Home() {
  return (
    <>
      <header className='sticky top-0 flex flex-col justify-around items-center z-[9999]'>
        <nav className='flex items-center'>
          <div className='flex items-center gap-6'>
            <Image src={blogLogo} alt='블로그 로고' />
            <p>Home</p>
            <p>Post</p>
            <p>TEMPT</p>
            <p>TEMPT</p>
            <p>TEMPT</p>
          </div>
        </nav>
      </header>
      <main className='p-10 max-w-screen-xl mx-auto py-10 px-4 flex flex-row w-full'>
        {/* sidebar */}
        <div className='sticky h-[100vh] flex-shrink-0 flex-col justify-between w-72'>
          <ul>1</ul>
          <ul>2</ul>
          <ul>3</ul>
          <ul>4</ul>
          <ul>5</ul>
        </div>
        <article className='w-full'>2</article>
      </main>
    </>
  );
}
