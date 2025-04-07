import { NextRequest,NextResponse } from "next/server";

export default function middleware(req:NextRequest){

    const created = req.cookies.get("refresh_token")
    if (!created) {
        return NextResponse.json({message:"Not valid token"})

    }

    return NextResponse.json({message:"Validtoken"})

}

// Apply middleware only to protected routes
export const config = {
    matcher: ["/dashboard/:path*"],
  };