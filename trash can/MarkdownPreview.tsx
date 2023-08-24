'use client';

import React from 'react';
import Markdown from 'markdown-to-jsx';

export default function MarkdownRenderer({ markdownContent }: { markdownContent: string }) {
  return <Markdown>{markdownContent}</Markdown>;
}
