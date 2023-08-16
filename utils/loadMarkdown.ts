export default async function loadMarkdown(filename: string) {
  const res = await fetch(`http://localhost:3000/api/${filename}`);
  const { markdown } = await res.json();

  return markdown;
}
