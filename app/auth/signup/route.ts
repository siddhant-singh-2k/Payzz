import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { error } from "console";
require("dotenv").config();
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
    console.log(access_token, refresh_token);
    return NextResponse.json({ access_token, refresh_token });
  } catch (error) {
    console.error("Signup Error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
