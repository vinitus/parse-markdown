'use client';

import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import './markdown-preview.css';

export default function MarkdownPreview({ markdown }: { markdown: string }) {
  return (
    <div className='markdown'>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
}
