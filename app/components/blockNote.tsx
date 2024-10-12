'use client'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { interactionSelector, toogleAction } from "../fetures/interactivity.slice";
import { saveWriteThunk } from "../fetures/write.and.save.note.slice";
import { AppDispatch } from "../store";

export default function BlockComponent({data}:{data: any}){
    const [text,setText] = useState(data?.text || '');
    const dispatch = useDispatch<AppDispatch>();
    const {toogleNote} = useSelector(interactionSelector);
    console.log('desde blockcomponent ',data)
    useEffect(()=>{
        let time = setTimeout(() => {
            dispatch(saveWriteThunk({noteId: data?.id,text}))
        }, 200);

        return ()=> clearTimeout(time)
    },[text])

    const typing = (t: string)=>{
        setText(t)
    }
    return (    

        <textarea onClick={()=> !toogleNote && dispatch(toogleAction({whichNoteYouWillOpen: data.id, toogleNote: true}))} value={text} onChange={(e)=> typing(e.target.value)  }  className={` ${toogleNote ? "w-full text-white h-full absolute top-0 left-0 flex-1" :"max-w-[180px] h-[150px]" } p-2 bg-zinc-900 border-[1px] border-zinc-600 rounded-md flex-1 basis-[180px] resize-none`} />
  
    )
}