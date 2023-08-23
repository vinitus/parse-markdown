'use client';

import { ChangeEvent } from 'react';

interface Props {
  filename: string;
  markdown: string;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
}

export default function MarkdownForm({ filename, markdown, setMarkdown }: Props) {
  function markdownChangeHandler(event: ChangeEvent<HTMLTextAreaElement>) {
    setMarkdown(event.target.value);
  }

  return (
    <div className='w-[50%] h-[calc(100vh-195px)]'>
      <h1>{filename + '.md'}</h1>
      <form action='' className='h-full'>
        <textarea name='markdown-editor' id='markdown-editor' defaultValue={markdown} onChange={markdownChangeHandler} className='w-full h-full' />
      </form>
    </div>
  );
}
