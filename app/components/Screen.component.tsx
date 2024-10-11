'use client'

import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import ScreenHeader from "./Screen.Header";
import ShowAllNotes from "./show_all_notes";
import GarbageAndNewNoteBottons from "./Garbage_Create_note";
import { note } from "../utils/types";
import { NoteSelector } from "../fetures/write.and.save.note.slice";


export default function ScreenComponent({ data }: { data: note[] }) {
    const [notes, setNotes] = useState(data);
    const notesSelector = useSelector(NoteSelector);
    useEffect(() => {
        if (notesSelector.notes.length > 0) setNotes(notesSelector.notes)
    }, [notes, notesSelector])

    return (
        <div className=" bg-zinc-800 w-full  h-full  flex flex-col justify-between ">
            <ScreenHeader>
                <GarbageAndNewNoteBottons open={() => { }} />
            </ScreenHeader>
            <ShowAllNotes data={notes} />
        </div>
    )
}