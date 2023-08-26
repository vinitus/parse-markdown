import { useState } from 'react';
import { FilterTarget } from '@/utils/backtickAlgorithm';

export default function FormFilter({ setFilterTarget }: { setFilterTarget: React.Dispatch<React.SetStateAction<FilterTarget>> }) {
  const [includeWord, setIncldueWord] = useState('');
  const [excludeWord, setExcldueWord] = useState('');

  function enterFn(event: React.KeyboardEvent<HTMLInputElement>, target: 'include' | 'exclude', dispatcher: React.Dispatch<React.SetStateAction<string>>) {
    if (event.key !== 'Enter') return;
    setFilterTarget((prev) => {
      if (isDuplicated(prev[target], target)) return prev;

      prev[target].push(includeWord);
      return prev;
    });

    dispatcher('');
  }

  return (
    <div className='bg-[#272b33] p-2 text-base'>
      <Input placeholder='include' value={includeWord} dispatcher={setIncldueWord} enterFn={enterFn} />
      <Button>추가하기</Button>
      <br />
      <Input placeholder='exclude' value={excludeWord} dispatcher={setExcldueWord} enterFn={enterFn} />
      <Button>추가하기</Button>
    </div>
  );
}

function Input({
  placeholder,
  value,
  dispatcher,
  enterFn,
}: {
  placeholder: 'include' | 'exclude';
  value: string;
  dispatcher: React.Dispatch<React.SetStateAction<string>>;
  enterFn: (event: React.KeyboardEvent<HTMLInputElement>, target: 'include' | 'exclude', dispatcher: React.Dispatch<React.SetStateAction<string>>) => void;
}) {
  return (
    <input
      type='text'
      value={value}
      onChange={(event) => dispatcher(event.target.value)}
      onKeyDown={(event) => enterFn(event, placeholder, dispatcher)}
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

function isDuplicated(arr: string[], str: string) {
  return arr.includes(str);
}
