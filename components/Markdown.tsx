'use client';

import { useState, useEffect } from 'react';
import MarkdownPreview from './MarkdownPreview';
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
  const [renderFlag, setRenderFlag] = useState(0);

  const initialValue = transformToSlateValue(markdownContent);

  useEffect(() => {
    setRenderFlag((prev) => prev + 1);
  }, []);

  return (
    <div className='flex flex-row'>
      <div className='flex flex-col'>
        <h1>{filename}</h1>
        <Slate editor={editor} initialValue={initialValue}>
          <Editable
            className='w-full'
            onKeyDown={() => console.log(`${editor.selection?.anchor.offset} ${editor.selection?.anchor.path[0]}`)}
            onBlur={() => console.log(`${editor.selection?.anchor.offset} ${editor.selection?.anchor.path[0]}`)}
          />
        </Slate>
      </div>
      {renderFlag !== 0 && (
        <div className='w-full h-[calc(100vh-155px)]'>
          {editor.children.map((item, idx) =>
            item.children[0].text !== '   \r' ? <MarkdownPreview markdownContent={item.children[0].text} key={idx} /> : <div key={idx} className='h-5' />
          )}
        </div>
      )}
      {/* <MarkdownPreview markdownContent={markdown} /> */}
    </div>
  );
}
