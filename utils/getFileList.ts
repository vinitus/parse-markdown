import fs from 'fs';
import path from 'path';

interface FileDir {
  [key: string]: string | FileDir;
}

export default function getFileList() {
  const publicPath = path.join(process.cwd(), 'public');

  return filereadDFS(publicPath);
}

// 해당 폴더가 디렉토리면 계속 탐색하는 DFS로 만듬
function filereadDFS(dir: string) {
  const files = fs.readdirSync(dir);

  const fileList: string[] = [];
  for (const file of files) {
    const filePath = path.join(dir, file);
    console.log('------');
    console.log(filePath.substring(filePath.indexOf('public') + 7, filePath.length));
    console.log(filePath);
    if (fs.statSync(filePath).isDirectory()) {
      filereadDFS(filePath);
    } else {
      fileList.push(file);
    }
  }

  return fileList;
}
