'use client'
import Link from "next/link";
import { ReactNode} from "react";

type Item = {
    id:number,
    name: string,
    query: string
}
export default function ItemMenuComponent({items}:{items?: Array<Item>}) {

    return items?.map(item => 
    // <li className="my-2 hover:bg-zinc-500 rounded-md py-1 cursor-pointer mb-3 " key={item.id} >
        <Link
        key={item.id} 
        href={`?query=${item.query}`}
        
         >
             {item.name}

         </Link>
    // </li>
)
}