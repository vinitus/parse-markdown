'use client';

import { useState } from 'react';
import MarkdownForm from './MarkdownForm';
import MarkdownPreview from './MarkdownPreview';
import SlateEditor from './SlateEditor';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import transformToSlateValue from '@/utils/transformToSlateValue';

export default function Markdown({
  markdownDataObj,
}: {
  markdownDataObj: {
    markdownContent: string;
    filename: string;
  };
}) {
  const { markdownContent, filename } = markdownDataObj;
  const [editor] = useState(() => withReact(createEditor()));

  const initialValue = transformToSlateValue(markdownContent);

  return (
    <div className='flex flex-row'>
      <h1>{filename}</h1>
      <Slate editor={editor} initialValue={initialValue}>
        <Editable
          className='w-full'
          onKeyDown={() => console.log(`${editor.selection?.anchor.offset} ${editor.selection?.anchor.path[0]}`)}
          onBlur={() => console.log(`${editor.selection?.anchor.offset} ${editor.selection?.anchor.path[0]}`)}
        />
      </Slate>
      {/* <MarkdownPreview markdownContent={markdown} /> */}
    </div>
  );
}
