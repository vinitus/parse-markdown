interface FilterTarget {
  include: string[];
  exclude: string[];
  excludeTag: string[];
}

export default function backtickAlgorithm(markdown: string, filterTarget: FilterTarget) {
  // 줄바꿈을 기준으로 배열로 나누기
  const splitedMarkdown = markdown.split('\n');

  // 문자열을 미리 하나 선언하고, 조건에 맞게 바꿔가야한다고 생각이 듬
  let result = '';

  // statement를 기반으로 한 정규식 만들기
  const { include, exclude, excludeTag } = filterTarget;

  // include 정규식 생성, 앞은 공백이 아닌 문자로 하고 뒤는 어떤 단어가 왔으나 영어면 전부 미포함
  const includeRegex = new RegExp(`(?<!\\S)(?:${include.join('|')})(?![a-zA-Z])`, 'gi');

  // exclude 정규식 생성, exclude는 해당 문자열이 들어간 모든 것을 해야할듯?
  const excludeRegex = new RegExp(`${exclude.join('|')}`, 'gi');

  splitedMarkdown.forEach((line) => {
    const trimedLine = line.trim();

    const checkIsExcludeTag = excludeTagToRegExp(excludeTag).test(trimedLine);
    if (checkIsExcludeTag) return;

    const includeMatchedWordIter = trimedLine.matchAll(includeRegex);
    const includeMatchedWords = [...includeMatchedWordIter];

    const excludeMatchedWordIter = trimedLine.matchAll(excludeRegex);
    const excludeMatchedWords = [...excludeMatchedWordIter];

    if (!includeMatchedWords.length) console.log(0, line, includeMatchedWords, excludeMatchedWords);
    else console.log(1, line, includeMatchedWords, excludeMatchedWords);
  });

  console.log(includeRegex, excludeRegex);
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
