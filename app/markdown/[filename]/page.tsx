import Markdown from '@/components/Markdown';
import loadMarkdown from '@/utils/loadMarkdown';

export default async function MarkdownEditor({ params }: { params: { filename: string } }) {
  const { filename } = params;
  const decodedFilename = decodeURIComponent(filename);
  const markdownContent = await loadMarkdown(decodedFilename);
  const markdownDataObj = {
    markdownContent,
    filename,
  };

  return (
    <>
      <Markdown markdownDataObj={markdownContent} />
    </>
  );
}
