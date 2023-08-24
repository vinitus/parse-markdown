'use client';

import { ChangeEvent } from 'react';

interface Props {
  markdown: string;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
}

export default function MarkdownForm({ markdown, setMarkdown }: Props) {
  function markdownChangeHandler(event: ChangeEvent<HTMLTextAreaElement>) {
    setMarkdown(event.target.value);
  }

  return (
    <div className='w-[50%] h-[calc(100vh-195px)]'>
      <form action='' className='h-full'>
        <textarea name='markdown-editor' id='markdown-editor' defaultValue={markdown} onChange={markdownChangeHandler} className='w-full h-full' />
      </form>
    </div>
  );
}
