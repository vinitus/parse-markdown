import { FileDir } from '@/utils/getFileList';

export default function Sidebar({ fileList }: { fileList: FileDir }) {
  return (
    <div className='sticky h-full flex-shrink-0 flex-col justify-between w-72'>
      {Object.entries(fileList).map(([key, value], idx) => {
        if (typeof value === 'object') return <Sidebar fileList={value}></Sidebar>;
        else return <ul key={idx}>{key}</ul>;
      })}
    </div>
  );
}
