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
      <main className='p-10'>
        <div className='w-full flex justify-evenly'>
          <div>1</div>
          <div>2</div>
        </div>
      </main>
    </>
  );
}
