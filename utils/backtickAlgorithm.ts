interface FilterTarget {
  include: string[];
  includeTag: string[];
  exclude: string[];
  excludeTag: string[];
}

export default function backtickAlgorithm(markdown: string, filterTarget: FilterTarget) {
  // 줄바꿈을 기준으로 배열로 나누기
  const splitedMarkdown = markdown.split('\n');

  // 문자열을 미리 하나 선언하고, 조건에 맞게 바꿔가야한다고 생각이 듬
  let result = '';

  // statement를 기반으로 한 정규식 만들기
  const { include, includeTag, exclude, excludeTag } = filterTarget;

  // include 정규식 생성, 앞은 바운더리로 하고 뒤는 어떤 단어가 왔으나 한글이면 포함, 영어면 미포함
  const includeRegex = new RegExp(`\\b(?:${include.join('|')})(?=.*[가-힣])(?!.*[a-zA-Z])`, 'gi');

  splitedMarkdown.forEach((line) => {
    const trimedLine = line.trim();
  });
}

function excludeTagToRegExp(excludeReg: string[]) {
  let tagRegArr: RegExp[] = [];
  if (excludeReg.indexOf('a')) tagRegArr.push(/\[[^\]]*\]\([^\)]*\)/g);
  if (excludeReg.indexOf('h1')) tagRegArr.push(/^# /gm);
  if (excludeReg.indexOf('h2')) tagRegArr.push(/^## /gm);
  if (excludeReg.indexOf('h3')) tagRegArr.push(/^### /gm);
  if (excludeReg.indexOf('h4')) tagRegArr.push(/^#### /gm);
  if (excludeReg.indexOf('h5')) tagRegArr.push(/^##### /gm);
  if (excludeReg.indexOf('h6')) tagRegArr.push(/^###### /gm);

  const tagReg = new RegExp(tagRegArr.map((regex) => regex.source).join('|'), 'g');

  return tagReg;
}
