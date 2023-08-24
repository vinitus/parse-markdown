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
  console.clear();

  console.log(include, exclude);

  // 포함할 정규식
  const includeRegex = new RegExp(
    include
      .map((includeWord) => {
        const reg = new RegExp(`${includeWord}`, 'ig');

        for (const item of exclude) {
          if (!reg.test(item)) continue;
          if (new RegExp(`\b${includeWord}\b`, 'ig').test(item)) {
          }
        }

        return reg.source;
      })
      .join('|'),
    'ig'
  );

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
