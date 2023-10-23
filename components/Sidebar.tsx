import { FileDir } from '@/utils/getFileList';
import Link from 'next/link';

export default function Sidebar({ fileList, addDir = '' }: { fileList: FileDir; addDir?: string }) {
  return (
    <div className='sticky h-full flex-shrink-0 flex-col justify-between w-72'>
      {Object.entries(fileList).map(([key, value], idx) => {
        if (typeof value === 'object') return <Sidebar fileList={value} addDir={addDir + '/' + key}></Sidebar>;
        else
          return (
            <Link href={`/markdown/${addDir}/${key.split('.md')[0]}`}>
              <ul key={idx}>{key}</ul>
            </Link>
          );
      })}
    </div>
  );
}
