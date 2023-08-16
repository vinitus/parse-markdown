'use client';

import loadMarkdown from '@/utils/loadMarkdown';
import { use, useState, useEffect, ChangeEvent } from 'react';

export default function MarkdownForm({ filename }: { filename: string }) {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    async function a() {
      const markdownFile = await loadMarkdown(filename);
      setMarkdown(markdownFile);
    }
    a();
  }, [filename]);

  function markdownChangeHandler(event: ChangeEvent<HTMLTextAreaElement>) {
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
