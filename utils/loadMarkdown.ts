export default async function loadMarkdown(url: string) {
  const res = await fetch(url);
  const { markdown } = await res.json();

  return markdown;
}
