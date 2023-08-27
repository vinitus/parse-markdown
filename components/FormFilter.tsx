import { useState, useMemo } from 'react';
import { FilterTarget } from '@/utils/backtickAlgorithm';

type SetFilterTarget = React.Dispatch<React.SetStateAction<FilterTarget>>;
type StringDispatcher = React.Dispatch<React.SetStateAction<string>>;

export default function FormFilter({ filterTarget, setFilterTarget }: { filterTarget: FilterTarget; setFilterTarget: SetFilterTarget }) {
  const [includeWord, setIncldueWord] = useState('');
  const [excludeWord, setExcldueWord] = useState('');

  const enterFn = useMemo(() => enterHandler(setFilterTarget), [setFilterTarget]);

  return (
    <div className='border border-[#f0f3f6] p-2 my-2'>
      <div className='text-[75%] leading-normal align-middle'>
        <Input placeholder='include' value={includeWord} dispatcher={setIncldueWord} enterFn={enterFn} />
        <Button>추가하기</Button>
        <span className='mr-2'>|</span>
        <TargetKeywordWrapper target='include' targetArr={filterTarget.include} />
      </div>

      <div className='text-[75%] leading-normal align-middle'>
        <Input placeholder='exclude' value={excludeWord} dispatcher={setExcldueWord} enterFn={enterFn} />
        <Button>추가하기</Button>
        <span className='mr-2'>|</span>
        <TargetKeywordWrapper target='exclude' targetArr={filterTarget.exclude} />
      </div>
    </div>
  );
}

interface InputProps {
  placeholder: 'include' | 'exclude';
  value: string;
  dispatcher: StringDispatcher;
  enterFn: (event: React.KeyboardEvent<HTMLInputElement>, target: 'include' | 'exclude', dispatcher: StringDispatcher, word: string) => void;
}

function Input({ placeholder, value, dispatcher, enterFn }: InputProps) {
  return (
    <input
      type='text'
      value={value}
      onChange={(event) => dispatcher(event.target.value)}
      onKeyDown={(event) => enterFn(event, placeholder, dispatcher, value)}
      placeholder={placeholder}
      className='border border-[#7a828e] rounded-md py-1 px-2 bg-[#0a0c10] text-[#f0f3f6] text-xs mr-2 my-1'
    />
  );
}

function Button({ children }: { children: string }) {
  return (
    <button type='button' className='border border-[#7a828e] rounded-md bg-[#0a0c10] text-[#f0f3f6] py-1 px-2 mr-2 my-1 w-auto hover:bg-[#1a1c20]'>
      {children}
    </button>
  );
}

function TargetKeywordWrapper({ targetArr, target }: { targetArr: string[]; target: 'include' | 'exclude' }) {
  return (
    <span className='overflow-x-scroll h-9 whitespace-nowrap inline-flex max-w-[calc(100%-245.234px)] aria-hidden:bg-wheet'>
      {targetArr.map((item, idx) => (
        <Button key={`${target}-${idx}`}>{item}</Button>
      ))}
    </span>
  );
}

function isDuplicated(arr: string[], str: string) {
  return arr.includes(str);
}

function enterHandler(filterTargetDispatcher: SetFilterTarget) {
  return (event: React.KeyboardEvent<HTMLInputElement>, target: 'include' | 'exclude', dispatcher: StringDispatcher, word: string) => {
    if (event.key !== 'Enter') return;
    filterTargetDispatcher((prev) => {
      if (isDuplicated(prev[target], target)) return prev;

      prev[target].push(word);
      return prev;
    });

    dispatcher('');
  };
}
