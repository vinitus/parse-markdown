'use client';

import React from 'react';
import Markdown from 'markdown-to-jsx';

export default function MarkdownRenderer({ markdownContent }: { markdownContent: string }) {
  return (
    <div className='markdown-renderer'>
      <Markdown options={{ wrapper: 'article' }}>{markdownContent}</Markdown>
    </div>
  );
}
