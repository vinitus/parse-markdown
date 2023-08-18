import Markdown from '@/components/Markdown';
import loadMarkdown from '@/utils/loadMarkdown';

export default async function MarkdownEditor({ params }: { params: { filename: string } }) {
  const { filename } = params;
  const decodedFilename = decodeURIComponent(filename);
  const markdownOrignalData = await loadMarkdown(decodedFilename);
  const markdownOrignalDataObj = {
    markdownOrignalData,
    filename,
  };

  return (
    <>
      <Markdown markdownOrignalDataObj={markdownOrignalDataObj} />
    </>
  );
}
