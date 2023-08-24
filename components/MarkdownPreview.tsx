'use client';

import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';

export default function MarkdownPreview({ markdown }: { markdown: string }) {
  return (
    <div className='flex flex-col w-[50%]'>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
}
