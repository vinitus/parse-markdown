'use client';

import React, { useState } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

export default function SlateEditor() {
  const [editor] = useState(() => withReact(createEditor()));

  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ];

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable
        className='w-full'
        onKeyDown={() => console.log(`${editor.selection?.anchor.offset} ${editor.selection?.anchor.path[0]}`)}
        onBlur={() => console.log(`${editor.selection?.anchor.offset} ${editor.selection?.anchor.path[0]}`)}
      />
    </Slate>
  );
}
