import {NextRequest,NextResponse} from "next/server";
export function middleware(req:NextRequest){const hasSession=Boolean(req.cookies.get("memgo_session")?.value);const protectedPath=req.nextUrl.pathname.startsWith("/student")||req.nextUrl.pathname.startsWith("/admin");if(protectedPath&&!hasSession)return NextResponse.redirect(new URL("/login",req.url));return NextResponse.next();}
export const config={matcher:["/student/:path*","/admin/:path*"]};
