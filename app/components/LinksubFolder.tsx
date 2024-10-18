'use client'
import Link from "next/link"
import counNotes from "../utils/supabase/countNotes"
import { IoIosFolder } from "react-icons/io"
import { Item } from "../utils/types"
import { useSearchParams } from "next/navigation"

export const LinkSubfolder = ({ item, count }: { item: Item,count:number }) => {
    const params = useSearchParams();
    const query = params.get('query');
    return <li key={item.id} className={`p-1 ${query === item.query ? 'bg-amber-800' : ''} rounded-md mb-1`}><Link
        className="grid grid-cols-[10px,auto,auto] gap-2 items-center "
        key={item.id}
        href={`/?query=${item.query}`}
    >
        <IoIosFolder />
        {item.name}
        <span className="justify-self-end ">{count}</span>
        
    </Link></li>
}