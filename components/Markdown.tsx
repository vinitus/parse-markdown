'use client';

import { useState, useEffect } from 'react';
import MarkdownPreview from './MarkdownPreview';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import transformToSlateValue from '@/utils/transformToSlateValue';
import { isElement, isText } from '@/utils/typeguard';

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
          {editor.children.map((item, idx) => {
            // 타입가드를 통한 typescript 에러 해결
            if (isElement(item) && isText(item.children[0])) {
              return item.children[0].text !== '   \r' ? (
                <MarkdownPreview markdownContent={item.children[0].text} key={idx} />
              ) : (
                <div key={idx} className='h-6' />
              );
            } else {
              // 이게 옳은 것일까? 는 모르겠음.. 모든 렌더링을 중단시킬 필요가 있을까
              throw new Error('Invalid text');
            }
          })}
        </div>
      )}
      {/* <MarkdownPreview markdownContent={markdown} /> */}
    </div>
  );
}
