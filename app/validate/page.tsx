import Link from "next/link";


export default function EmailVerificationPage() {
    return (
    <div className="h-full w-full flex justify-center items-center bg-zinc-800 antialiased">
        <div className="p-3 bg-yellow-700 w-full sm:w-9/12  xl:w-5/12 rounded-lg min-h-40 h-fit">
        <div className="text-balance text-xl w-full h-fit flex flex-col justify-center items-center text-center ">
                <p>Now you can go to your email account and click on the link that our team send you. </p>
                <p>That link verify that its a valid email and its your email. </p>
                <br />
                <p >Then you can go and <Link className="font-black" href={'/login'}>log in</Link></p>
        </div>
        </div>
    </div>
    );
}