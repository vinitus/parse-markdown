export default async function loadMarkdown(filename: string) {
  const res = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(fetch(`http://localhost:3000/api/${filename}`));
    }, 1000);
  });
  const { markdown } = await res.json();

  return markdown;
}
