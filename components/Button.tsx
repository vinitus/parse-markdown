export default function Button({ children, onClick }: { children: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className='rounded-md text-[#0a0c10] bg-[#f0f3f6] font-semibold px-2 py-1 min-h-8'>
      {children}
    </button>
  );
}
