import path from 'path';

export default function transformStringToMarkdownURL(fileWord: string | string[]) {
  let filename;
  if (Array.isArray(fileWord)) filename = fileWord.join('/');
  else filename = fileWord;

  const filePath = path.join(process.cwd(), 'public', `${filename}.md`);
  return filePath;
}
