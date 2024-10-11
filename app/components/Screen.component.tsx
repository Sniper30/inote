'use client'

import { Suspense, useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import ScreenHeader from "./Screen.Header";

import ShowAllNotes from "./show_all_notes";
import GarbageAndNewNoteBottons from "./Garbage_Create_note";
import { createClient } from "../utils/supabase/clientSupabase";
import { note } from "../utils/types";
import { interactionSelector, toogleAction } from "../fetures/interactivity.slice";
import { NoteSelector } from "../fetures/write.and.save.note.slice";


export default function ScreenComponent({ data }: { data: note[] }) {
    const [notes, setNotes] = useState(data);
    const notesSelector = useSelector(NoteSelector);
    console.log(notesSelector)

        // if(notesSelector.length > 0) setNotes(notesSelector);

    // const open = (key: number | boolean) => {

    //     // setShowOneNote(key);
    //     // setToogle(!toogle)
    //     dispatch(toogleAction({toogle: !toogle, whichNoteYouWillOpen: key}))
    // }

    // useEffect(() => {
    //     if (!toogle) setShowOneNote(false);
    // }, [toogle])

    // supabase.channel('notes')
    //     .on('postgres_changes', { event: '*', schema: 'notes', table: 'notes' }, async (paylod) => {
    //         const reload = await supabase.schema('notes').from('notes').select('*').order('id', { ascending: false }) as {data: note[]};
    //         setNotes(() => [...reload.data]);
    //     }).subscribe();

    return (
        <div className=" bg-zinc-800 w-full  h-full  flex flex-col justify-between ">
            <ScreenHeader>
                <GarbageAndNewNoteBottons open={()=>{}} />
            </ScreenHeader>
            <ShowAllNotes data={notes} />
        </div>
    )


}