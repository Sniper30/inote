import { useActionState, useEffect } from "react";
import { useFormState } from "react-dom";
import deleteNote from "../utils/deleteNote";
import { useDispatch, useSelector } from "react-redux";
import { interactionSelector, toogleDelete } from "../fetures/interactivity.slice";
import { Spin } from "./Garbage_Create_note";

export default function DeleteNote({noteId}:{noteId:string}){
    const [error,action,isPending] = useActionState(()=>deleteNote(noteId),null);
    const dispatch = useDispatch();
    const interactions = useSelector(interactionSelector);
    useEffect(()=>{
            if(!isPending) dispatch(toogleDelete({whichYouWillDelete: null, deleteView:{x:-1,y:-1}}))
    },[error,isPending,dispatch])

    return noteId && (
        <div className="bg-zinc-700 border-[1px] pl-2 border-zinc-600 w-full h-full rounded-md flex flex-col justify-center">
           <form >
                <button className="flex gap-2 items-center" formAction={action}>delete note {isPending ? <Spin/> : null}</button>
           </form>

        </div>
    )
}