// public 디렉토리에 있는 것을 읽을 수 있다.
// 문제는 이제 클라이언트에서만 읽을 수 있는 것이 문제임..

async function getData() {
  const test = await fetch('/test.txt')
    .then((response) => parseStream(response.body))
    .catch((error) => console.error(error));
}

async function parseStream(stream) {
  const reader = stream.getReader();
  let result = '';

  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    // Uint8Array를 문자열로 변환
    const text = new TextDecoder().decode(value);
    result += text;
  }

  console.log(result); // "HI"
}
