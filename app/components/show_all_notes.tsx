import { Dispatch, SetStateAction, useEffect, useState } from "react";
import BlockComponent from "./blockNote";
import { note } from "../utils/types";
import styles from '@/app/app.module.css'
import { useDispatch, useSelector } from "react-redux";
import { interactionSelector, toogleAction } from "../fetures/interactivity.slice";
import { NoteSelector } from "../fetures/write.and.save.note.slice";

export default function ShowAllNotes(){
    const toogleRedux = useSelector(interactionSelector);
    const notesSelector = useSelector(NoteSelector);
    return(
        <div className={`flex flex-wrap relative gap-4 p-4 content-start flex-1 h-full `}>
            {
                (toogleRedux.toogleNote && toogleRedux.whichNoteYouWillOpen) ? 
                <BlockComponent data={notesSelector.notes.find(d => d.id === toogleRedux.whichNoteYouWillOpen)}/> :
                 notesSelector.notes?.map((d:any, i:number) => <BlockComponent key={d.id} data={d}/>)

            }

    </div>
    )
}