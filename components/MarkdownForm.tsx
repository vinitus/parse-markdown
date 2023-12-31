'use client';

import { useRef, ChangeEvent } from 'react';
import './MarkdownForm.css';

interface Props {
  markdown: string;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
}

export default function MarkdownForm({ markdown, setMarkdown }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function markdownChangeHandler(event: ChangeEvent<HTMLTextAreaElement>) {
    setMarkdown(event.target.value);
  }

  return (
    <div className='w-[49%] h-[calc(100vh-307px)]'>
      <form action='' className='h-full'>
        <textarea
          name='markdown-editor'
          id='markdown-editor'
          value={markdown}
          onChange={markdownChangeHandler}
          onKeyDown={(event) => {
            if (event.key !== 'Escape') return;
            textareaRef.current?.blur();
          }}
          ref={textareaRef}
          className={`w-full h-full bg-[var(--main-bg)] p-4 markdownform-textarea outline-0`}
        />
      </form>
    </div>
  );
}
