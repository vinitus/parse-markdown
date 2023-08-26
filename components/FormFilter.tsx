'use client';

import { useState, Dispatch, SetStateAction } from 'react';
import { FilterTarget } from '@/utils/backtickAlgorithm';

export default function FormFilter({ filterTarget, setFilterTarget }: { filterTarget: FilterTarget; setFilterTarget: Dispatch<SetStateAction<FilterTarget>> }) {
  const [includeWord, setIncludeWord] = useState('');
  const [excludeWord, setExcludeWord] = useState('');

  return <div className='bg-[#272b33] p-2 text-base '></div>;
}
