import transformStringToMarkdownURL from '@/utils/transformStringToMarkdownURL';
import fs from 'fs';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { filename: string } }) {
  const { filename } = params;
  console.log('routeFilename', filename);
  const url = transformStringToMarkdownURL(filename);
  console.log(url);
  const file = fs.readFileSync(url, 'utf8');

  return NextResponse.json({ markdown: file });
}
