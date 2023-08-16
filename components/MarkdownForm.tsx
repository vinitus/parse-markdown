import loadMarkdown from '@/utils/loadMarkdown';
import transformStringToMarkdownURL from '@/utils/transformStringToMarkdownURL';

export default async function MarkdownForm({ filename }: { filename: string }) {
  const requestURL = transformStringToMarkdownURL(filename);
  const markdown = loadMarkdown(requestURL);

  return (
    <>
      <h1>{filename + '.md'}</h1>
      <form action=''>
        <textarea name='' id='' cols={30} rows={10} dangerouslySetInnerHTML={{ __html: markdown }}></textarea>
      </form>
    </>
  );
}
