import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();
import jwt from "jsonwebtoken";
import { NEXT_HMR_REFRESH_HEADER } from "next/dist/client/components/app-router-headers";
const jwtsecret = process.env.JWT_SECRET;


export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Please enter both the details" },
        { status: 400 }
      );
    }

    const existinguser = await prisma.user.findUnique({
      where: { email: email },
    });
    if (!existinguser) {
      return NextResponse.json({ message: "User doesn't exist" });
    }

    const correct_password = await bcrypt.compare(password, existinguser.password);
    if (!correct_password) {
      return NextResponse.json(
        { message: "Invalid passworde" },
        { status: 400 }
      );
    }

    const access_token = jwt.sign({ email: existinguser.email }, jwtsecret!, {
      expiresIn: "15m",
    });

    const refresh_token = jwt.sign({ email: existinguser.email }, jwtsecret!, {
      expiresIn: "7d",
    });

    await prisma.refresh_tokens.delete({
      where: {
        userid: existinguser.id,
      },
    });

    await prisma.refresh_tokens.create({
      data: {
        token: refresh_token,
        userid: existinguser.id,
        expriesAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    const response = NextResponse.json({
      message: "Sign in successfull",
      access_token,
    });

    response.cookies.set("refresh_toke", refresh_token, {
      httpOnly: true,
      path: "/",
      maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
    });

    return response;
  } catch (error) {
    console.error("Signin error", error);
    return NextResponse.json(
      { message: "Something went wrong while sign up" },
      { status: 500 }
    );
  }
}
