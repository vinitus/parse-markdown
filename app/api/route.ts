import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const filePath = path.join(__dirname, '../../public/HTTP,TCPIP.md');

export async function GET() {
  console.log(filePath);
  // const res = await
  // const data = await res.json();

  // return NextResponse.json({ data });
}
