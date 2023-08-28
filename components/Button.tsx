export default function Button({ children, onClick, type }: { children: string; onClick: () => void; type: 'black' | 'white' }) {
  const className = {
    black: 'rounded-md text-[var(--main-bg);] bg-[#f0f3f6] font-semibold px-2 py-1 min-h-8',
    white: 'rounded-md bg-[var(--main-bg);] text-[#f0f3f6] font-semibold px-2 py-1 min-h-8 border border-[#f0f3f6',
  };

  return (
    <button onClick={onClick} className={className[type]}>
      {children}
    </button>
  );
}
