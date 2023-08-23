'use client';

import { useState } from 'react';
import MarkdownForm from './MarkdownForm';
import MarkdownPreview from './MarkdownPreview';

export default function Markdown({ markdownDataObj }: { markdownDataObj: { markdownContent: string; filename: string } }) {
  const { markdownContent, filename } = markdownDataObj;
  const [markdown, setMarkdown] = useState(markdownContent);
  const splitedMarkdown = markdown.split('\n');

  return (
    <div className='flex flex-row'>
      <MarkdownForm filename={filename} markdown={markdown} setMarkdown={setMarkdown} />
      <div className='w-[50%] flex flex-col'>
        {splitedMarkdown.map((line, idx) => {
          return line === '\r' ? <div className='h-6' key={idx} /> : <MarkdownPreview markdownContent={line} key={idx} />;
        })}
      </div>
    </div>
  );
}
