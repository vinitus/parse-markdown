import { useState } from 'react';
import { FilterTarget } from '@/utils/backtickAlgorithm';

export default function FormFilter({
  filterTarget,
  setFilterTarget,
}: {
  filterTarget: FilterTarget;
  setFilterTarget: React.Dispatch<React.SetStateAction<FilterTarget>>;
}) {
  const [includeWord, setIncldueWord] = useState('');
  const [excludeWord, setExcldueWord] = useState('');

  return (
    <div className='bg-[#272b33] p-2 text-base'>
      <Input placeholder='include' value={includeWord} dispatcher={setIncldueWord} />
      <Button>추가하기</Button>
      <br />
      <Input placeholder='exclude' value={excludeWord} dispatcher={setExcldueWord} />
      <Button>추가하기</Button>
    </div>
  );
}

function Input({ placeholder, value, dispatcher }: { placeholder: string; value: string; dispatcher: React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <input
      type='text'
      value={value}
      onChange={(event) => dispatcher(event.target.value)}
      placeholder={placeholder}
      className='border border-[#7a828e] rounded-md py-1 px-2 bg-[#0a0c10] text-[#f0f3f6] text-xs mr-2 my-1'
    />
  );
}

function Button({ children }: { children: string }) {
  return (
    <button type='button' className='border border-[#7a828e] rounded-md bg-[#0a0c10] text-[#f0f3f6] py-1 px-2 mr-2 my-1 text-[75%] leading-normal'>
      {children}
    </button>
  );
}
