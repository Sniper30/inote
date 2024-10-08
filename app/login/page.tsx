import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/serverSupabase"
import { revalidatePath } from "next/cache";



async function loginAction(formData: FormData){
    "use server"

    const data = {
        email :  formData.get('email') as string,
        password: formData.get('password') as string
    }

    const supabase_client = createClient();
    const {error} = await supabase_client.auth.signInWithPassword(data);
    if(error) redirect('/error');

    revalidatePath('/','layout');
    redirect('/');
}

export default async function LoginPage(){

    return (
        <form className="text-black">
            <input  type="text" name="email" required/>
            <input type="text" name="password" />
            <button formAction={loginAction} className="text-white">login</button>
        </form>
    )
}