'use client';

import { useState, Dispatch, SetStateAction } from 'react';
import { Input } from './Input';
import { FilterTarget } from '@/utils/backtickAlgorithm';

export default function FormFilter({ filterTarget, setFilterTarget }: { filterTarget: FilterTarget; setFilterTarget: Dispatch<SetStateAction<FilterTarget>> }) {
  const [includeWord, setIncludeWord] = useState('');
  const [excludeWord, setExcludeWord] = useState('');

  return (
    <div className='bg-[#272b33] p-2 text-base '>
      <Input tagType='input'>
        <input type='text' value={includeWord} onChange={(event) => setIncludeWord(event.target.value)} className='opacity-0 w-full' />
      </Input>
      <br />
      <Input tagType='input'>
        <input type='text' value={excludeWord} onChange={(event) => setExcludeWord(event.target.value)} className='opacity-0 w-full' />
      </Input>
    </div>
  );
}
