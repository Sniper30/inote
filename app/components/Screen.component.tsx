'use client'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import ScreenHeader from "./Screen.Header";
import ShowAllNotes from "./show_all_notes";
import GarbageAndNewNoteBottons from "./Garbage_Create_note";
import { note } from "../utils/types";
import { addNotes, NoteSelector } from "../fetures/write.and.save.note.slice";
import { interactionSelector } from "../fetures/interactivity.slice";


export default function ScreenComponent({ data }: { data: note[] }) {
    const dispath = useDispatch();
    useEffect(() => {
        dispath(addNotes(data));
    }, [data])
    return (
        <div className=" bg-zinc-800 w-full  h-full  flex flex-col justify-between ">
            <ScreenHeader>
                <GarbageAndNewNoteBottons />
            </ScreenHeader>
            <ShowAllNotes />
        </div>
    )
}