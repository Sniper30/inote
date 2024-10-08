'use client'
import { useEffect, useState } from "react";
import ItemMenuComponent from "./item.menu.component";

const array = [
    {id:0,title:'All cloud'},
    {id:1,title:'Notes'},
    {id:2,title:'Imported Notes'},
    {id:3,title:'Musica'},
];

export default function ItemsMenuComponent({title}:{title: string}) {
    const [toogle,setToogle] = useState(true);
    return (
        <>
        <span className="cursor-pointer" onClick={()=>setToogle(!toogle)}>{title}</span>
        <ul className={` w-full ${toogle ? 'h-[160px]' : 'h-0'} max-h-[160px] overflow-hidden transition-all transform ease-in-out delay-150`}>
            <ItemMenuComponent items={array}/>
        </ul>
        </>
    );
}
