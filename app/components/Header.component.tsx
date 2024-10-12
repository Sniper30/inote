

export default function Header({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <header className={`h-14 min-h-14 bg-zinc-700 flex flex-col justify-center items-start ${className} `}>
            {children}
        </header>
    );
}