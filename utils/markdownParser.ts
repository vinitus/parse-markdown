type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'code';

interface MarkdownParsedResultObj {
  type: TagType;
  value: string;
}

export default function markdownParser(str: string) {
  const trimedStr = str.trim();
  const test = ['# 1', '#1', '##', '###', '####', '#####', '######', '#######', '####', '####\\##'];
  test.forEach((item) => checkHeader(item));

  return trimedStr;
}

function checkHeader(str: string) {
  let i = 0;
  let cnt = 0;

  for (const alpha of str) {
    if (alpha !== '#') break;
    i += 1;
    cnt += 1;
  }

  console.log(logFn(str, i, cnt));

  if (cnt === 0) return false;
  if (cnt > 7) return false;
  if (i > str.length) return false;
}

function logFn(a: string | number, ...arg: (string | number)[]) {
  let str: string = `${a}`;
  for (const word of arg) {
    str += ` || ${word}`;
  }

  return str;
}

function markAResultType(type: TagType, value: string): MarkdownParsedResultObj {
  const result: MarkdownParsedResultObj = {
    type,
    value,
  };

  return result;
}

function headFind(num: number) {
  return `h${num}`;
}
