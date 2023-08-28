export default function Button({ children, onClick, type }: { children: string; onClick: () => void; type: 'black' | 'white' }) {
  const className = {
    black: 'rounded-md text-[var(--main-bg)] bg-[var(--main-font)] font-semibold px-2 py-1 min-h-8',
    white: 'rounded-md bg-[var(--main-bg)] text-[var(--main-font)] font-semibold px-2 py-1 min-h-8 border border-[var(--main-font)]',
  };

  return (
    <button onClick={onClick} className={className[type]}>
      {children}
    </button>
  );
}
