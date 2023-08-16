import fs from 'fs';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { filename: string } }) {
  const { filename } = params;
  const file = fs.readFileSync(`C://Users/vinitus/my-blog/public/${filename}.md`, 'utf8');

  return NextResponse.json({ markdown: file });
}
