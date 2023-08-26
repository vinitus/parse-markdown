'use client';

import { useMemo, useState } from 'react';
import MarkdownForm from './MarkdownForm';
import MarkdownPreview from './MarkdownPreview';
import Button from './Button';
import backtickAlgorithm, { FilterTarget } from '@/utils/backtickAlgorithm';

export default function Markdown({ markdownDataObj }: { markdownDataObj: { markdownContent: string; filename: string } }) {
  const { markdownContent, filename } = markdownDataObj;
  const [markdown, setMarkdown] = useState(markdownContent);
  const [filterTarget, setFilterTarget] = useState<FilterTarget>({
    include: ['http', 'react', 'port', 'portal', 'sport'],
    exclude: ['react native', 'aport', 'port 8080', 'portable'],
    excludeTag: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a'],
  });

  const parsedFilename = useMemo(() => decodeURIComponent(filename) + '.md', [filename]);

  return (
    <div className='flex flex-col'>
      <span className='h-12 px-4 flex items-center justify-between'>
        <p className='min-h-8 px-2 py-1 font-bold border border-[#7a828e] rounded-md outline-none inline-flex items-stretch text-[#7a828e] bg-[#9ea7b3] bg-opacity-0'>
          {parsedFilename}
        </p>
        <div className='inline-flex gap-1'>
          <Button
            type='black'
            onClick={() => {
              setMarkdown(backtickAlgorithm(markdown, filterTarget));
            }}
          >
            change
          </Button>
          <Button
            type='white'
            onClick={() => {
              console.log('fliter');
            }}
          >
            filter
          </Button>
        </div>
      </span>
      <div className='flex flex-row'>
        <MarkdownForm markdown={markdown} setMarkdown={setMarkdown} />
        <MarkdownPreview markdown={markdown} />
      </div>
    </div>
  );
}
