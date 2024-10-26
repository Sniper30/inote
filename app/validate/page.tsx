import Link from "next/link";


export default function EmailVerificationPage() {
    return (
    <div className="h-full w-full flex justify-center items-center bg-zinc-800 antialiased">
        <div className="p-5 bg-yellow-700  w-2/4 h-1/4 rounded-lg">
        <div className="text-balance text-xl w-full">
                <p>Now you can go to your email account and click on the link that our team send you. </p>
                <p>That link verify that its a valid email and its your email. </p>
                <br />
                <p >Then you can go and <Link className="font-black" href={'/login'}>log in</Link></p>
        </div>
        </div>
    </div>
    );
}