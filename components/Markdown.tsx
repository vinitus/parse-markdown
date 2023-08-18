'use client';

import { useState } from 'react';
import MarkdownForm from './MarkdownForm';

export default function Markdown({
  markdownOrignalDataObj,
}: {
  markdownOrignalDataObj: {
    markdownOrignalData: string;
    filename: string;
  };
}) {
  const { markdownOrignalData, filename } = markdownOrignalDataObj;
  const [markdown, setMarkdown] = useState(markdownOrignalData);

  return (
    <>
      <MarkdownForm filename={filename} markdown={markdown} setMarkdown={setMarkdown} />
    </>
  );
}
