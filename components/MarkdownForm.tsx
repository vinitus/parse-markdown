import loadMarkdown from '@/utils/loadMarkdown';

export default async function MarkdownForm({ filename }: { filename: string }) {
  const markdown = await loadMarkdown(filename);

  return (
    <>
      <h1>{filename + '.md'}</h1>
      <form action=''>
        <div contentEditable='true' id='' dangerouslySetInnerHTML={{ __html: markdown }}></div>
      </form>
    </>
  );
}
