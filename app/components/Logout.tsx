'use client'
import { IoIosLogOut } from "react-icons/io";
import { createClient } from "../utils/supabase/clientSupabase";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { logout } from "../utils/logout";



export default function Logout() {
    const supabase = createClient();
    return <form>
        <button formAction={logout}>

        <IoIosLogOut />
        </button>
    </form>
}