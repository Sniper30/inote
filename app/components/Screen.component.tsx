'use client'

import { Suspense, useEffect, useState } from "react";

import ScreenMenu from "./Screen.menu";

import ShowAllNotes from "./show_all_notes";
import GarbageAndNewNoteBottons from "./Garbage_Create_note";
import { createClient } from "../utils/supabase/clientSupabase";
import { note } from "../utils/types";


export default function ScreenComponent({ data }: { data: note[] }) {
    const [toogle, setToogle] = useState(false);
    const [notes, setNotes] = useState(data);
    const [showOneNote, setShowOneNote] = useState<boolean | number>(0);
    const supabase = createClient();
    const close = () => setToogle(!toogle) as any;

    const open = (key: number | boolean) => {

        setShowOneNote(key);
        setToogle(!toogle)

    }

    useEffect(() => {
        if (!toogle) setShowOneNote(false);
    }, [toogle])

    supabase.channel('notes')
        .on('postgres_changes', { event: '*', schema: 'notes', table: 'notes' }, async (paylod) => {
            const reload = await supabase.schema('notes').from('notes').select('*').order('id', { ascending: false }) as {data: note[]};
            setNotes(() => [...reload.data]);
        }).subscribe();

    return (
        <div className=" bg-zinc-800 w-full  h-full  flex flex-col justify-between ">
            <ScreenMenu setToogle={close} toogle={toogle}>
                <GarbageAndNewNoteBottons open={open} />
            </ScreenMenu>
            <ShowAllNotes open={open} showOneNote={showOneNote} data={notes} toogle={toogle} />
        </div>
    )
}