'use client'

import Link from "next/link"
import { loginAction } from "./actionLogin"


export default function Form(){

    return (
        <form className=" flex flex-col gap-2 w-full justify-center ">
            <label>Your email</label>
             <input type="text" placeholder="name@company.com" name="email" className="p-2 rounded-md bg-zinc-600 outline-none border-zinc-500 focus:border-zinc-400 border-[1px] text-md font-semibold"/>
             <label>Password</label>
             <input type="password" name="password" className="p-2 rounded-md bg-zinc-600 outline-none border-zinc-500 focus:border-zinc-400 border-[1px] text-md font-semibold"/>
             <button formAction={loginAction} className="p-2 rounded-md bg-yellow-600">login</button>
        </form>
    )
}