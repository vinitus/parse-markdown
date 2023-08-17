export default function MarkdownSegmentLayout(props: { editor: React.ReactNode; previewer: React.ReactNode }) {
  return (
    <div className='w-full'>
      {props.editor}
      {props.previewer}
    </div>
  );
}
