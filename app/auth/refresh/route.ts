import { NextRequest,NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();
const jwt_secret = process.env.JWT_SECRET;


export async function POST(req:NextRequest) {
    
    try {
    const refresh_token = req.cookies.get("refresh_token")?.value;
    if (!refresh_token) {
        return NextResponse.json({message:"No valid refresh_token"},{status:401})
    }

    const verify_refresh = jwt.verify(refresh_token,jwt_secret);

    const user = await  prisma.user.findUnique({
        where: {email:verify_refresh.email}
    })

    if (!user){
        return NextResponse.json({message:"No valid user exists"},{status:401})

    }

    const tokenid = await prisma.refresh_tokens.findUnique({
        where: {token:refresh_token}
    })

    if (!tokenid) {
        return NextResponse.json({message:"Refresh token not found in db"}, {status:401})

    }

    const new_access_token = jwt.sign({email:user.email}, jwt_secret!,{
        expiresIn:"15m"
    });

    return NextResponse.json({
        access_token: new_access_token,
        refresh_token:refresh_token
    });

    

}

catch(error) {
    console.error("Refresh error", error)
    return NextResponse.json({message:"Something went wrong while refreshing"},{status:401});

}
}
