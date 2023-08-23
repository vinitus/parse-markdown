import { Descendant } from 'slate';

export default function transformToSlateValue(str: string): Descendant[] {
  const splitedStr = str.split('\n');
  const descendantArray = splitedStr.map((line) => {
    return {
      type: 'paragraph',
      children: [{ text: line }],
    };
  });

  return descendantArray;
}
