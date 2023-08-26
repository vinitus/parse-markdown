import navbarCss from '@/components/navbar.module.css';

export function Input({ tagType, children }: { tagType: 'input' | 'button'; children?: React.ReactNode }) {
  if (tagType === 'button')
    return (
      <button className={navbarCss.navbarSearchBox}>
        검색
        <p className={navbarCss.navbarSearchBoxButton}>검색</p>
      </button>
    );

  return (
    <div className={navbarCss.navbarSearchBox}>
      {children}
      <p className={navbarCss.navbarSearchBoxButton}>검색</p>
    </div>
  );
}
