import transformStringToMarkdownURL from '@/utils/transformStringToMarkdownURL';
import fs from 'fs';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { filename: string } }) {
  const { filename } = params;
  const url = transformStringToMarkdownURL(filename);
  const file = fs.readFileSync(url, 'utf8');

  return NextResponse.json({ markdown: file });
}
