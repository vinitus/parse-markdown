'use client';

// Import React dependencies.
import React, { useState } from 'react';
// Import the Slate editor factory.
import { createEditor } from 'slate';

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react';

export default function SlateTest() {
  const [editor] = useState(() => withReact(createEditor()));

  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ];

  // editor.children[0].children[0].text
  // 이게 에디터 확인 방법?

  // editor의 children은 에디터에 담긴 배열이다. 각각의 원소들은 또다시 children에 속해있으며, 해당 key의 value는 배열이고, 길이는 0이다. 그 이상은 본적없음
  // 그럼 editor.children[n].children[0].text로 접근할 수 있음

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable
        className='w-full'
        onKeyDown={() => console.log(`${editor.selection?.anchor.offset} ${editor.selection?.anchor.path[0]}`)}
        onBlur={() => console.log(`${editor.selection?.anchor.offset} ${editor.selection?.anchor.path[0]}`)}
        // onKeyDown={() => console.log(`${editor.selection?.anchor} ${editor.selection?.focus}`)}
        // onBlur={() => console.log(`${editor.selection?.anchor} ${editor.selection?.focus}`)}
      />
    </Slate>
  );
}
