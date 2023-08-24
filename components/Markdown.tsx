'use client';

import { useMemo, useState } from 'react';
import MarkdownForm from './MarkdownForm';
import MarkdownPreview from './MarkdownPreview';
import Button from './Button';

export default function Markdown({ markdownDataObj }: { markdownDataObj: { markdownContent: string; filename: string } }) {
  const { markdownContent, filename } = markdownDataObj;
  const [markdown, setMarkdown] = useState(markdownContent);

  const parsedFilename = useMemo(() => decodeURIComponent(filename) + '.md', [filename]);

  return (
    <div className='flex flex-col'>
      <span className='h-12 px-4 flex items-center justify-between'>
        <p className='min-h-8 px-2 py-1 font-bold border border-[#7a828e] rounded-md outline-none inline-flex items-stretch text-[#7a828e] bg-[#9ea7b3] bg-opacity-0'>
          {parsedFilename}
        </p>
        <Button onClick={() => console.log(1)}>change</Button>
      </span>
      <div className='flex flex-row'>
        <MarkdownForm markdown={markdown} setMarkdown={setMarkdown} />
        <MarkdownPreview markdown={markdown} />
      </div>
    </div>
  );
}
