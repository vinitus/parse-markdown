import MarkdownForm from '@/components/MarkdownForm';

export default function MarkdownEditor({ params }: { params: { filename: string } }) {
  const { filename } = params;

  return <MarkdownForm filename={filename} />;
}
