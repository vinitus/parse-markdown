export default function FormFilter() {
  return (
    <div className='bg-[#272b33] p-2 text-base'>
      <Input placeholder='include' />
      <Button>추가하기</Button>
      <br />
      <Input placeholder='exclude' />
      <Button>추가하기</Button>
    </div>
  );
}

function Input({ placeholder }: { placeholder: string }) {
  return <input type='text' placeholder={placeholder} className='border border-[#7a828e] rounded-md py-1 px-2 bg-[#0a0c10] text-[#f0f3f6] text-xs mr-2 my-1' />;
}

function Button({ children }: { children: string }) {
  return (
    <button type='button' className='border border-[#7a828e] rounded-md bg-[#0a0c10] text-[#f0f3f6] py-1 px-2 mr-2 my-1 text-[75%] leading-normal'>
      {children}
    </button>
  );
}
