import Markdown from '@/components/Markdown';
import loadMarkdown from '@/utils/loadMarkdown';

export default async function MarkdownEditor({ params }: { params: { filename: string | string[] } }) {
  let { filename } = params;
  let encodedPath;
  if (Array.isArray(filename)) {
    encodedPath = filename.join('/');
    filename = filename[filename.length - 1];
  }

  console.log(filename, encodedPath);

  const decodedFilename = decodeURIComponent(encodedPath ? encodedPath : filename);
  console.log(decodedFilename);
  const markdownContent = await loadMarkdown(decodedFilename);
  const markdownDataObj = {
    markdownContent,
    filename,
  };

  return (
    <>
      <Markdown markdownDataObj={markdownDataObj} />
    </>
  );
}
