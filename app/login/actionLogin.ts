"use server"
import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/serverSupabase";
import { revalidatePath } from "next/cache";

export async function loginAction(formData: FormData){

    const data = {
        email :  formData.get('email') as string,
        password: formData.get('password') as string
    }

    const supabase_client = createClient();
    const {error} = await supabase_client.auth.signInWithPassword(data);
    console.log(error?.message)
    if(error) redirect('/error');
    revalidatePath('/');
    redirect('/');
}