import { createClient } from "@/app/utils/supabase/serverSupabase";
import { EmailOtpType } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
    const {searchParams} = new URL(request.url);
    const token_hash = searchParams.get('token');
    const type = searchParams.get('type') as EmailOtpType;

    const redirectTo = request.nextUrl.clone();
  
    redirectTo.pathname = '/';
    redirectTo.searchParams.delete('token')
    redirectTo.searchParams.delete('type')

    if(token_hash && type){
        const supabase = createClient();
        const {error} =  await supabase.auth.verifyOtp({token_hash,type}) 
        if(!error){
            redirectTo.searchParams.delete('next');
            return NextResponse.redirect(redirectTo);
        }
    }
    redirectTo.pathname = '/error'
    return NextResponse.redirect(redirectTo);
}