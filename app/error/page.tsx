import Link from "next/link";


export default function ErrorPage(){
    return (
        <div className="h-full w-full flex justify-center items-center bg-zinc-800 antialiased">
        <div className="p-5 bg-yellow-700  w-2/4 h-1/4 rounded-lg">
        <div className="text-balance text-xl w-full">
                <p>An error happened make shure you verify your email, if that 
                    the case go to your email account and look for a email by kelvin rafael </p>
                <p >go to <Link className="font-black" href={'/login'}>log in</Link></p>
        </div>
        </div>
    </div>
    )
}