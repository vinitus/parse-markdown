import Image from 'next/image';
import blogLogo from '@/public/blog-logo.png';
import navbarCss from '@/app/navbar.module.css';

export default function Home() {
  return (
    <>
      {/* header에 tailwindcss를 사용하면 적용이 안됨 */}
      <header className={navbarCss.navbarHeader}>
        <nav className={navbarCss.navbarLayout}>
          <div className={navbarCss.navbarCategoryArea}>
            <Image src={blogLogo} alt='블로그 로고' />
            <p>Home</p>
            <p>Post</p>
            <p>TEMPT</p>
            <p>TEMPT</p>
            <p>TEMPT</p>
          </div>
          {/* search */}
          <div className={navbarCss.navbarSearchArea}>
            <button className={navbarCss.navbarSearchBox}>
              검색
              <p className={navbarCss.navbarSearchBoxButton}>검색</p>
            </button>
            <a href='' className={navbarCss.navbarContactButton}>
              <p className={navbarCss.navbarContactButtonFont}>Contact</p>
            </a>
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
