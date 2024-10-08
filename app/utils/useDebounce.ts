import { useEffect } from "react";



export default function useDebounce(delay: number, initValue: string, cb: (v: string) => void) {

    useEffect(() => {
        const interval = setTimeout(() => cb(initValue), delay)
        return () => clearTimeout(interval);
    }, [delay, initValue])
    return initValue;
}