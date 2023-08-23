'use client';

import { useState } from 'react';
import MarkdownForm from './MarkdownForm';
import MarkdownPreview from './MarkdownPreview';

export default function Markdown({ markdownDataObj }: { markdownDataObj: { markdownContent: string; filename: string } }) {
  const { markdownContent, filename } = markdownDataObj;
  const [markdown, setMarkdown] = useState(markdownContent);

  return (
    <div className='flex flex-row'>
      <MarkdownForm filename={filename} markdown={markdown} setMarkdown={setMarkdown} />
      <MarkdownPreview markdownContent={markdownContent} />
      <MarkdownPreview markdownContent={markdown} />
    </div>
  );
}
