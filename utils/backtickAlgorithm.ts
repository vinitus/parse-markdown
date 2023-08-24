interface FilterTarget {
  include: string[];
  exclude: string[];
}

export default function backtickAlgorithm(markdown: string, filterTarget: FilterTarget) {
  // 줄바꿈을 기준으로 배열로 나누기
  const splitedMarkdown = markdown.split('\n');

  // 순회, 문자열을 미리 하나 선언하고, 조건에 맞게 바꿔가야한다고 생각이 듬
  let result = '';

  // statement를 기반으로 한 정규식 만들기
  const { include, exclude } = filterTarget;

  const includeRegex = new RegExp(include.map((word) => `${word}`).join('|'), 'ig');

  splitedMarkdown.forEach((line) => {
    const trimedLine = line.trim();

    const matchedWord = trimedLine.matchAll(includeRegex);

    const arr = [...matchedWord];

    if (arr.length !== 0) console.log(arr, trimedLine);
  });
}
