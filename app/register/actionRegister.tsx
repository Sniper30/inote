'use server'
import { revalidatePath } from "next/cache";
import { createClient } from "../utils/supabase/serverSupabase";
import { redirect } from "next/navigation";


export const register = async (formData:FormData)=>{

    const [name,lastname,phone,email,password] = Array.from(formData.values()) as string[];
    console.log([name,lastname,phone,email,password])
    const supabase = createClient();

        const {error} = await supabase.auth.signUp({email,password,phone});
        console.log(error)
        if(error) redirect('/error')
        revalidatePath('/');
        redirect('/');

}