import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import blogLogo from '@/public/blog-logo.png';
import navbarCss from '@/components/navbar.module.css';
import { Input } from './Input';

export default function Header() {
  return (
    <header className={navbarCss.navbarHeader}>
      <nav className={navbarCss.navbarLayout}>
        <div className={navbarCss.navbarCategoryArea}>
          <Image src={blogLogo} alt='블로그 로고' />
          <p>Home</p>
          <p>Post</p>
          <Link href={'/markdown'}>
            <p>Mardown</p>
          </Link>
          <p>TEMPT</p>
          <p>TEMPT</p>
        </div>
        {/* search */}
        <div className={navbarCss.navbarSearchArea}>
          <Input tagType='button' />
          <a href='' className={navbarCss.navbarContactButton}>
            <p className={navbarCss.navbarContactButtonFont}>Contact</p>
          </a>
        </div>
      </nav>
    </header>
  );
}
