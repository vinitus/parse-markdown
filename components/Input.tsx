// import { useState } from 'react';
import navbarCss from '@/components/navbar.module.css';

export function Input({ tagType }: { tagType: 'input' | 'button' }) {
  // const [value, setValue] = useState('검색');
  console.log(tagType);

  if (tagType === 'button')
    return (
      <button className={navbarCss.navbarSearchBox}>
        검색
        <p className={navbarCss.navbarSearchBoxButton}>검색</p>
      </button>
    );

  return (
    <div className={navbarCss.navbarSearchBox}>
      <input type='text' placeholder='검색' className={`${navbarCss.navbarSearchBox} text-[#0a0c10]`} />
      <p className={navbarCss.navbarSearchBoxButton}>검색</p>
    </div>
  );
}
