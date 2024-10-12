'use client'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import ScreenHeader from "./Screen.Header";
import ShowAllNotes from "./show_all_notes";
import GarbageAndNewNoteBottons from "./Garbage_Create_note";
import { note } from "../utils/types";
import { addNotes, NoteSelector } from "../fetures/write.and.save.note.slice";
import { interactionSelector, viewSelector } from "../fetures/interactivity.slice";
import ScrollComponent from "./scroll.compoent";


export default function ScreenComponent({ data }: { data: note[] }) {
    const dispath = useDispatch();
    const view = useSelector(viewSelector);
    useEffect(() => {
        dispath(addNotes(data));
    }, [data])
    return (
        <div className={` bg-zinc-800 w-full  h-full  flex flex-col overflow-hidden`}>
            <ScreenHeader>
                <GarbageAndNewNoteBottons />
            </ScreenHeader>
            <div className="flex h-full">
            { view === 'scroll' ? <ScrollComponent/> : <ShowAllNotes />}
            </div>
        </div>
    )
}