import Markdown from '@/components/Markdown';

export default async function MarkdownEditor() {
  const markdownDataObj = {
    markdownContent: '',
    filename: '빈 markdown',
  };

  return <Markdown markdownDataObj={markdownDataObj} />;
}
