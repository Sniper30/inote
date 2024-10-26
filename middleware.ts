import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server"
import { updateSession } from "./app/utils/supabase/middleware";

export default function middleware(request: NextRequest){
    if(request.url.match(/error/)) return;
    return updateSession(request);
}

export const config = {
    matcher:[
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|notes|validate).*)',
    ]
}