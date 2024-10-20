import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/serverSupabase"
import { revalidatePath } from "next/cache";
import Form from "./form";
import Link from "next/link";
import { inter } from "../fonts";


export default async function LoginPage(){

    return (
        <div className={`${inter.className} bg-zinc-900 flex flex-col items-center justify-center h-full `}>
            <div className="bg-zinc-700 flex flex-col items-start  gap-6 w-1/4 h-fit p-6  justify-center  rounded-lg border-zinc-500 border-[1px] text-zinc-100">
            <h1 className="font-light text-2xl">Sign in to your account</h1>
            <Form />
            <Link 
                href={'/register'}
            >i dont have an account</Link>

            </div>
        </div>
    )
}