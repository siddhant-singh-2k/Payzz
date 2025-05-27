// auth/protected/route.ts
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const jwtsecret = process.env.JWT_SECRET!;

export async function POST(req: NextRequest) {
  const access_token = req.headers.get("Authorization")?.split(" ")[1];
  
  if (!access_token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  
  try {
    const verified = jwt.verify(access_token, jwtsecret);
    return NextResponse.json({ message: 'You accessed a protected route!' });
  } catch(err) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}