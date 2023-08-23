import { Descendant, Element } from 'slate';
import { isElement, isText } from './typeguard';

export default function transformToSlateValue(str: string): Descendant[] {
  const splitedStr = str.split('\n');
  const descendantArray: Descendant[] = splitedStr.map((line) => {
    return {
      children: [{ text: line }],
    };
  });

  const replaceBlankToSpaceArray = replaceBlankToSpace(descendantArray);

  return replaceBlankToSpaceArray;
}

function replaceBlankToSpace(descendantArray: Descendant[]): Descendant[] {
  const copiedArray = descendantArray.map((descendant) => {
    if (isElement(descendant)) {
      if (isText(descendant.children[0])) {
        if (descendant.children[0].text === '\r') {
          const a: Element = {
            children: [
              {
                text: '   \r',
              },
            ],
          };
          return a;
        }
      }
    }
    return descendant;
  });

  return copiedArray;
}
