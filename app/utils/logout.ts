'use server';
import { revalidatePath } from "next/cache";
import { createClient } from "./supabase/serverSupabase";
import { redirect } from "next/navigation";


export const logout = async ()=>{
    await createClient().auth.signOut();
    revalidatePath('/');
    redirect('/login');
}