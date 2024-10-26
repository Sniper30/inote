'use client'
import { useActionState, useEffect } from "react";
import { createNote } from "../utils/create_note";
import { useDispatch } from "react-redux";
import { toogleAction } from "../fetures/interactivity.slice";
import { IoIosAdd } from "react-icons/io";
import { Spin } from "./Garbage_Create_note";


export default function CreateNote() {
    const params = new URL(window.location.href);
    const query = params.pathname.replace('/','');
    const [state, action, isPending] = useActionState(() => createNote(query.length > 0 ? query : 'all'), null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isPending) dispatch(toogleAction({ toogleNote: false, whichNoteYouWillOpen: null }))
        if (state?.data?.length && !isPending) {
            console.log(state.data[0]);
            dispatch(toogleAction({ toogleNote: true, whichNoteYouWillOpen: state.data[0].id }))
        }
    }, [state, isPending,dispatch])
    return (
        <form className="flex-1 flex justify-center ">
            {isPending ? <div ><Spin /></div> : <button formAction={action}><IoIosAdd className="text-lg" /></button>}
        </form>
    )
}