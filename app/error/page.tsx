import Link from "next/link";


export default function ErrorPage(){
    return (
        <div className="h-full w-full flex flex-col justify-center items-center bg-zinc-800 antialiased lg:pb-72">
            <h3 className=" w-3/12 p-5 text-3xl">Error</h3>
        <div className="p-3 bg-yellow-700 w-full sm:w-9/12  xl:w-5/12 rounded-lg min-h-40 h-fit">
        <div className="text-balance text-xl w-full h-fit flex flex-col justify-center items-center text-center ">
                <p className="w-full">An error happened make shure you verify your email, if that 
                    the case go to your email account and look for a email by kelvin rafael </p>
                <p className="w-full" >go to <Link className="font-black" href={'/login'}>log in</Link></p>
        </div>
        </div>
    </div>
    )
}