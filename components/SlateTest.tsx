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

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable onChange={() => console.log(editor)} onKeyDown={(event) => console.log(editor.children[0].children[0].text)} />
    </Slate>
  );
}
