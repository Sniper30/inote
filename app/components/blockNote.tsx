'use client'

import { useEffect, useState } from "react";
import { createClient } from "../utils/supabase/clientSupabase";
import useDebounce from "../utils/useDebounce";

export default function BlockComponent({data,toogle,open}:{data: any,toogle?:boolean,open?:()=>void}){
    const [text,setText] = useState(()=> data?.text || '');
    if(!data) return;
    toogle && useDebounce(200,text,async (value: string)=>{
        if(!toogle) return;
        if(!data?.text && text === '') return;
        await createClient().schema('notes').from('notes').update({text: value}).eq('id',data?.id);
    });

    return (    
        
       
        <textarea onClick={()=> open && open()} value={text} onChange={(e)=> setText(e.target.value)  }  className={` ${toogle ? "w-full text-white h-full absolute top-0 left-0" :"max-w-[160px] h-[150px]" }  bg-zinc-900 border-[1px] border-zinc-600 rounded-md p-3 m-3 mb-12 flex-1 flex-grow-2 flex-shrink-0 basis-[160px] resize-none`} />
  
    )
}