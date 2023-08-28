import fs from 'fs';
import path from 'path';

interface FileDir {
  [key: string]: string | FileDir;
}

interface CalcInterface {
  result: FileDir;
  publicPath: string;
  remainedDir: string[];
}

export default function getFileList() {
  const publicPath = path.join(process.cwd());

  const fileObj = {
    publicPath: publicPath,
    result: {},
    remainedDir: ['public'],
    isStart: true,
  };

  const resultObj = filereadDFS.bind(fileObj);
  while (fileObj.remainedDir.length > 0) {
    resultObj();
  }

  return fileObj.result;
}

function filereadDFS(this: CalcInterface) {
  const dir = this.remainedDir.pop();
  console.log(dir);

  if (dir === undefined) return;

  const filePath = path.join(this.publicPath, dir);
  const files = fs.readdirSync(filePath);

  for (const file of files) {
    const newFilePath = path.join(filePath, file);

    if (fs.statSync(newFilePath).isDirectory()) {
      this.remainedDir.push(dir + '/' + file);
      const resultKeys = dir.split('/');
      const lastWord = addNestedStructure(this.result, resultKeys, '');
    } else {
      const resultKeys = dir.split('/');
      const lastWord = addNestedStructure(this.result, resultKeys, '');
    }
  }
}

function addNestedStructure(obj: CalcInterface['result'], keys: string[], prev: string) {
  const key = keys.shift();
  if (key) {
    if (!obj[key]) {
      obj[key] = {};
    }
    return addNestedStructure(obj, keys, key);
  }
  return prev;
}
