'use client'
import { useActionState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import deleteNote from "../utils/deleteNote";
import { interactionSelector, toogleAction } from "../fetures/interactivity.slice";


export default function DeleteButton(){
    const interactions = useSelector(interactionSelector);
    const [error,action,isPending] = useActionState(()=>deleteNote(interactions.whichNoteYouWillOpen),null);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(!isPending) dispatch(toogleAction({whichNoteYouWillOpen: null, toogleNote: false}))
    },[isPending,dispatch])
    if(!interactions.whichNoteYouWillOpen || interactions.whichNoteYouWillOpen === null) return <AiOutlineDelete className="text-zinc-500"/>;
    return (
        <form>
            <button formAction={action}>
               <AiOutlineDelete />
            </button>

        </form>
    )
}