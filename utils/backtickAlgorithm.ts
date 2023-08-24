interface FilterTarget {
  include: string[];
  includeTag: string[];
  exclude: string[];
  excludeTag: string[];
}

export default function backtickAlgorithm(markdown: string, filterTarget: FilterTarget) {
  // 줄바꿈을 기준으로 배열로 나누기
  const splitedMarkdown = markdown.split('\n');

  // 순회, 문자열을 미리 하나 선언하고, 조건에 맞게 바꿔가야한다고 생각이 듬
  let result = '';

  // statement를 기반으로 한 정규식 만들기
  const { include, includeTag, exclude, excludeTag } = filterTarget;

  const includeRegex = new RegExp(include.map((word) => `${word}`).join('|'), 'ig');

  // 제외할 태그 중 a태그에 대한 처리
  let tagRegArr: RegExp[] = [];
  if (exclude.indexOf('a')) tagRegArr.push(/\[[^\]]*\]\([^\)]*\)/g);
  if (exclude.indexOf('h1')) tagRegArr.push(/^# /gm);
  if (exclude.indexOf('h2')) tagRegArr.push(/^## /gm);
  if (exclude.indexOf('h3')) tagRegArr.push(/^### /gm);
  if (exclude.indexOf('h4')) tagRegArr.push(/^#### /gm);
  if (exclude.indexOf('h5')) tagRegArr.push(/^##### /gm);
  if (exclude.indexOf('h6')) tagRegArr.push(/^###### /gm);

  console.log(tagRegArr);

  const tagReg = new RegExp(tagRegArr.map((regex) => regex.source).join('|'), 'g');

  splitedMarkdown.forEach((line) => {
    const trimedLine = line.trim();

    if (trimedLine.match(tagReg)) return;

    const matchedWord = trimedLine.matchAll(includeRegex);

    const arr = [...matchedWord];

    if (arr.length !== 0) console.log(arr, trimedLine);
  });
}
