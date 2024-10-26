'use client'

import { useActionState, useEffect } from "react"
import { register } from "./actionRegister"
import { AuthError } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

export type stateRegisterType = {error:string | null};

export default function Form(){
    const [state,action, isPending] = useActionState(register,{error: null} as stateRegisterType );
    useEffect(()=>{
        if(!state.error) redirect('/login');
    },[isPending])
   
    return (
        <form action={action} className=" flex flex-col gap-2 w-full justify-center ">
            <label>Your name</label>
            <input type="text" name="name" className="p-2 rounded-md bg-zinc-600 outline-none border-zinc-500 focus:border-zinc-400 border-[1px] text-md font-semibold"/>
            <label>Your lastname</label>
            <input type="text" name="lastname" className="p-2 rounded-md bg-zinc-600 outline-none border-zinc-500 focus:border-zinc-400 border-[1px] text-md font-semibold"/>
            <label>Your phone number</label>
            <input type="text" name="phone" className="p-2 rounded-md bg-zinc-600 outline-none border-zinc-500 focus:border-zinc-400 border-[1px] text-md font-semibold"/>
            <label>Your email</label>
             <input type="text" placeholder="name@company.com" name="email" className="p-2 rounded-md bg-zinc-600 outline-none border-zinc-500 focus:border-zinc-400 border-[1px] text-md font-semibold"/>
             <label>Password</label>
             <input type="password" name="password" className="p-2 rounded-md bg-zinc-600 outline-none border-zinc-500 focus:border-zinc-400 border-[1px] text-md font-semibold"/>
             <button type="submit"  className="p-2 mt-1 rounded-md bg-yellow-600">login</button>
             <div className={`${state.error ? 'flex' : 'hidden'} bg-yellow-800 text-zinc-200 p-2 rounded-lg border-zinc-500 border-[1px]`}>{state.error}</div>
        </form>
    )
}