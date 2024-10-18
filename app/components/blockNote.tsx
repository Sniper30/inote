'use client'
import { useDispatch, useSelector } from "react-redux";
import { interactionSelector, toogleAction, toogleDelete } from "../fetures/interactivity.slice";
import { AppDispatch } from "../store";
import { useSaveHook } from "../utils/hooks/saveText.hook";

export default function BlockComponent({ data }: { data: any }) {
    if(!data) return;
    const {text, setText} = useSaveHook(data);
    const dispatch = useDispatch<AppDispatch>();
    const { toogleNote,whichNoteYouWillOpen } = useSelector(interactionSelector);
    const typing = (t: string) => toogleNote && setText(t);

    const PreventContextMenu = (event: React.MouseEvent, which: number)=>{
        event.preventDefault();
        dispatch(toogleDelete({whichYouWillDelete: which,deleteView:{x: event.pageX , y: event.pageY}}))
    }

    const handleClick = ()=>{
        if(!toogleNote && whichNoteYouWillOpen && data.id !== whichNoteYouWillOpen) dispatch(toogleAction({ whichNoteYouWillOpen: data.id, toogleNote: false }));
        if(toogleNote && whichNoteYouWillOpen) return 
        if(!toogleNote && !whichNoteYouWillOpen) dispatch(toogleAction({ whichNoteYouWillOpen: data.id, toogleNote: false }));
        (!toogleNote && whichNoteYouWillOpen && data.id === whichNoteYouWillOpen) && dispatch(toogleAction({ whichNoteYouWillOpen: data.id, toogleNote: true }))
    }

    return (
        <>
         <textarea onClick={handleClick} onContextMenu={(e)=>PreventContextMenu(e,data.id)} value={text} onChange={(e) => typing(e.target.value)} className={` ${toogleNote ? "w-full text-white h-full absolute top-0 left-0 flex-1 border-none" : "max-w-[180px] h-[150px] cursor-pointer "} p-2 bg-zinc-900 border-[1px] ${whichNoteYouWillOpen === data.id ? 'border-yellow-600' : 'border-zinc-600'}  rounded-md flex-1 basis-[180px] resize-none outline-none`} />
        </>

    )
}