import path from 'path';

export default function transformStringToMarkdownURL(filename: string) {
  const filePath = path.join(process.cwd(), 'public', `${filename}.md`);
  return filePath;
}
