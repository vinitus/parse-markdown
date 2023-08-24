export default function Sidebar({ fileList }: { fileList: string[] }) {
  return (
    <div className='sticky h-full flex-shrink-0 flex-col justify-between w-72'>
      {fileList.map((item, idx) => (
        <ul key={idx}>{item}</ul>
      ))}
    </div>
  );
}
