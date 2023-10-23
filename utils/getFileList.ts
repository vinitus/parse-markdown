import fs from 'fs';
import path from 'path';

export interface FileDir {
  [key: string]: string | FileDir;
}

export default function getFileList() {
  const publicPath = path.join(process.cwd(), 'public');

  return filereadDFS(publicPath);
}

// 해당 폴더가 디렉토리면 계속 탐색하는 DFS로 만듬
function filereadDFS(dir: string) {
  const files = fs.readdirSync(dir);

  const result: FileDir = {};
  for (const file of files) {
    const filepath = path.join(dir, file);
    const fileStat = fs.statSync(filepath);

    if (fileStat.isDirectory()) {
      result[file] = filereadDFS(filepath);
    } else {
      if (new RegExp(/(.*?)\.md/).test(file)) result[file] = 'file';
    }
  }

  return result;
}
