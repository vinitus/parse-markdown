import { useState, useEffect, useMemo, useRef } from 'react';
import { FilterTarget } from '@/utils/backtickAlgorithm';

type SetFilterTarget = React.Dispatch<React.SetStateAction<FilterTarget>>;
type StringDispatcher = React.Dispatch<React.SetStateAction<string>>;

export default function FormFilter({ filterTarget, setFilterTarget }: { filterTarget: FilterTarget; setFilterTarget: SetFilterTarget }) {
  const [includeWord, setIncldueWord] = useState('');
  const [excludeWord, setExcldueWord] = useState('');

  const enterFn = useMemo(() => enterHandler(setFilterTarget), [setFilterTarget]);

  return (
    <div className='border-y border-[#f0f3f6] p-2 my-2'>
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

function Button({ children, className, isOverflow }: { children: string; className?: string; isOverflow?: boolean }) {
  let btnClass = 'border border-[#7a828e] rounded-md bg-[#0a0c10] text-[#f0f3f6] py-1 px-2 mr-2 my-1 w-auto hover:bg-[#1a1c20]';
  // const disabledClass = 'disabled:hover:bg-[#0a0c10] disabled:border-[#3a323e] disabled:text-[#a0a3a6]';
  const disabledClass = 'disabled:opacity-50 disabled:hover:bg-inherit';

  if (className) btnClass = className + ' ' + btnClass;

  return (
    <button type='button' className={btnClass + ' ' + disabledClass} disabled={isOverflow !== undefined && !isOverflow}>
      {children}
    </button>
  );
}

function scrollCalc(tag: HTMLElement): ArrowDir {
  const { offsetWidth, scrollLeft, scrollWidth } = tag;
  if (scrollLeft === 0) return 'left';
  if (scrollLeft === scrollWidth - offsetWidth) return 'right';
  return 'both';
}

type ArrowDir = 'left' | 'right' | 'both';

function arrowStateUpdateFn(leftDispatcher: React.Dispatch<React.SetStateAction<boolean>>, rightDispatcher: React.Dispatch<React.SetStateAction<boolean>>) {
  return (dir: ArrowDir | 'disabled') => {
    switch (dir) {
      case 'left': {
        leftDispatcher(true);
        rightDispatcher(false);
      }
      case 'right': {
        leftDispatcher(false);
        rightDispatcher(true);
      }
      case 'both': {
        leftDispatcher(true);
        rightDispatcher(true);
      }
      default: {
        leftDispatcher(false);
        rightDispatcher(false);
      }
    }
  };
}

function TargetKeywordWrapper({ targetArr, target }: { targetArr: string[]; target: 'include' | 'exclude' }) {
  const [leftIsOverflow, setleftIsOverflow] = useState(false);
  const [rightIsOverflow, setrightIsOverflow] = useState(false);
  const wordWrapSpanRef = useRef<HTMLSpanElement>(null);

  function scrollEventHandler() {
    const wordWrapSpanTag = wordWrapSpanRef.current;
    console.log(wordWrapSpanTag?.offsetWidth, wordWrapSpanTag?.scrollLeft, wordWrapSpanTag?.scrollWidth);
  }

  const arrowUpdateFn = useMemo(() => arrowStateUpdateFn(setleftIsOverflow, setrightIsOverflow), []);

  useEffect(() => {
    const wordWrapSpanTag = wordWrapSpanRef.current;
    if (wordWrapSpanTag === null) {
      new Error('렌더링 오류');
      return;
    }

    const { offsetWidth, scrollWidth } = wordWrapSpanTag;
    if (offsetWidth === scrollWidth) {
      //
    }
  }, [targetArr.length]);

  return (
    <span className='inline-flex h-9 w-[calc(100%-246px)] aria-hidden:bg-wheet'>
      <Button isOverflow={leftIsOverflow}>←</Button>
      <span className='overflow-x-scroll whitespace-nowrap w-full mx-2 pr-1 gap-1 flex' ref={wordWrapSpanRef} onScroll={scrollEventHandler}>
        {targetArr.map((item, idx) => (
          <Button key={`${target}-${idx}`} className='mr-0'>
            {item}
          </Button>
        ))}
      </span>
      <Button className='ml-auto' isOverflow={rightIsOverflow}>
        →
      </Button>
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
