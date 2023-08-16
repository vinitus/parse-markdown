'use client';

import loadMarkdown from '@/utils/loadMarkdown';
import { use, useState, ChangeEvent } from 'react';

export default function MarkdownForm({ filename }: { filename: string }) {
  const [markdown, setMarkdown] = useState('');

  if (!markdown) {
    const markdownFile = use(loadMarkdown(filename));
    setMarkdown(markdownFile);
  }

  function markdownChangeHandler(event: ChangeEvent<HTMLTextAreaElement>) {
    console.log(event);
    setMarkdown(event.target.value);
  }

  return (
    <>
      {markdown ? (
        <>
          <h1>{filename + '.md'}</h1>
          <form action='' className='w-full h-full'>
            <textarea name='markdown-editor' id='markdown-editor' defaultValue={markdown} onChange={markdownChangeHandler} className='w-full h-full' />
          </form>
        </>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
}
