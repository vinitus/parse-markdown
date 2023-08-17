import MarkdownForm from '@/components/MarkdownForm';

export default function MarkdownEditor({ params }: { params: { filename: string } }) {
  const { filename } = params;
  const decodedFilename = decodeURIComponent(filename);

  return <MarkdownForm filename={decodedFilename} />;
}
