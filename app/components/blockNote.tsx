'use client'

import { useEffect, useState } from "react";
import { createClient } from "../utils/supabase/clientSupabase";
import useDebounce from "../utils/useDebounce";
import { useDispatch, useSelector } from "react-redux";
import { interactionSelector, toogleAction } from "../fetures/interactivity.slice";
import { saveWriteThunk } from "../fetures/write.and.save.note.slice";
import { AppDispatch } from "../store";
// import { saveAction } from "../fetures/show.and.update.notes";

export default function BlockComponent({data}:{data: any}){
    const [text,setText] = useState(()=> data?.text || '');
    const dispatch = useDispatch<AppDispatch>();
    const {toogleNote} = useSelector(interactionSelector);
    useEffect(()=>{

    },[text])
    if(!data) return;
    toogleNote && useDebounce(200,text,async (value: string)=>{
        if(!toogleNote) return;
        if(!data?.text && text === '' || data?.text === text) return;
        // dispatch(saveAction({text,noteId:data?.id}))
        dispatch(saveWriteThunk({noteId: String(data?.id),text: text}));
    });
    return (    
        
       
        <textarea onClick={()=> !toogleNote && dispatch(toogleAction({whichNoteYouWillOpen: data.id}))} value={text} onChange={(e)=> setText(e.target.value)  }  className={` ${toogleNote ? "w-full text-white h-full absolute top-0 left-0" :"max-w-[160px] h-[150px]" }  bg-zinc-900 border-[1px] border-zinc-600 rounded-md p-3 m-3 mb-12 flex-1 flex-grow-2 flex-shrink-0 basis-[160px] resize-none`} />
  
    )
}