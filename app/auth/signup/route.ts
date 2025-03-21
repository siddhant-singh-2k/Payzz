import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const jwtsecret = process.env.JWT_SECRET;
const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Please enter details" },
        { status: 400 }
      );
    }

    const existinguser = await prisma.user.findUnique({ where: { email } });

    if (existinguser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashed_password = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email: email,
        password: hashed_password,
        created_at: new Date(Date.now()),
        updated_at: new Date(Date.now()),
      },
    });

    const access_token = jwt.sign({ email: newUser.email }, jwtsecret!, {
      expiresIn: "15m",
    });

    const refresh_token = jwt.sign({ email: newUser.email }, jwtsecret!, {
      expiresIn: "7d",
    });

    await prisma.refresh_tokens.create({
      data: {
        token: refresh_token,
        userid: newUser.id,
        expriesAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    const response = NextResponse.json({
      message: "User signup successful",
      access_token,
    });
    response.cookies.set("refresh_token", refresh_token, {
      httpOnly: true,
      path: "/",
      maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
    });

    return response;
  } catch (error) {
    console.error("Signup Error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
