import { useSearchParams } from "next/navigation";
import { useActionState, useEffect } from "react";
import { createNote } from "../utils/create_note";
import { useDispatch } from "react-redux";
import { toogleAction } from "../fetures/interactivity.slice";
import { IoIosAdd } from "react-icons/io";
import { Spin } from "./Garbage_Create_note";


export default function CreateNote() {
    const params = useSearchParams();
    const query = params.get('query')
    const [error, action, isPending] = useActionState(() => createNote(query!), null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isPending) dispatch(toogleAction({ toogleNote: false, whichNoteYouWillOpen: null }))
        if (error?.data?.length && !isPending) {
            dispatch(toogleAction({ toogleNote: true, whichNoteYouWillOpen: error.data[0].id }))
        }
    }, [error, isPending])
    return (
        <form className="flex-1 flex justify-center ">
            {isPending ? <div ><Spin /></div> : <button formAction={action}><IoIosAdd className="text-lg" /></button>}
        </form>
    )
}