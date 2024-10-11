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

    useEffect(()=>{
        let time = setTimeout(() => {
            console.log(text)
            dispatch(saveWriteThunk({noteId: data?.id,text}))
        }, 200);

        return ()=> clearTimeout(time)
    },[text])

    const typing = (t: string)=>{
        setText(t)
    }
    return (    

        <textarea onClick={()=> !toogleNote && dispatch(toogleAction({whichNoteYouWillOpen: data.id, toogleNote: true}))} value={text} onChange={(e)=> typing(e.target.value)  }  className={` ${toogleNote ? "w-full text-white h-full absolute top-0 left-0" :"max-w-[160px] h-[150px]" }  bg-zinc-900 border-[1px] border-zinc-600 rounded-md p-3 m-3 mb-12 flex-1 flex-grow-2 flex-shrink-0 basis-[160px] resize-none`} />
  
    )
}