export default function Button({ children }: { children: string }) {
  return <button className='rounded-md text-[#0a0c10] bg-[#f0f3f6] font-medium px-2 py-1 min-h-8'>{children}</button>;
}
