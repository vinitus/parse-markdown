import React from 'react';
import MarkdownPreview from '@/components/MarkdownPreview';

export default function MarkdownPreviewPage() {
  const markdownContent = '# Hello, Markdown!\n\nThis `is a` **react-markdown** preview example.\n\n- Item 1\n- Item 2\n- Item 3';

  return (
    <div>
      <MarkdownPreview markdownContent={markdownContent} />
    </div>
  );
}
