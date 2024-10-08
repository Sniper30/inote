import React from "react";


export default function Nav({children, className}:{children:React.ReactNode, className?: string }) {
    return (
        <nav className={`flex items-center ${className}`}>
            {children}
        </nav>
    );
}