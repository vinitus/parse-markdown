import Markdown from '@/components/Markdown';
import loadMarkdown from '@/utils/loadMarkdown';

export default async function MarkdownEditor({ params }: { params: { filename: string | string[] } }) {
  let { filename } = params;
  let encodedPath;
  if (Array.isArray(filename)) {
    encodedPath = filename.join('/');
    filename = filename[filename.length - 1];
  }

  if (filename) {
    const decodedFilename = decodeURIComponent(encodedPath ? encodedPath : filename);
    const markdownContent = await loadMarkdown(decodedFilename);
    const markdownDataObj = {
      markdownContent,
      filename,
    };

    return <Markdown markdownDataObj={markdownDataObj} />;
  } else {
    const markdownDataObj = {
      markdownContent: '',
      filename: 'New Markdown',
    };

    return <Markdown markdownDataObj={markdownDataObj} />;
  }
}
