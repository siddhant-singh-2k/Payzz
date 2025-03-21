import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    req.cookies.delete("refresh_token")
    req.cookies.delete("refresh_toke")
    
    const refresh_token = req.cookies.get("refresh_token")
    return NextResponse.json({ refresh_token });
}
