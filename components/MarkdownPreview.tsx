'use client';

import React from 'react';
import Markdown from 'markdown-to-jsx';

export default function MarkdownRenderer({ markdownContent }: { markdownContent: string }) {
  return (
    <div className='markdown-renderer w-[50%] h-[calc(100vh-115px)] overflow-scroll'>
      <Markdown options={{ wrapper: 'article' }}>{markdownContent}</Markdown>
    </div>
  );
}
