import { useDispatch, useSelector } from "react-redux"
import { NoteSelector } from "../fetures/write.and.save.note.slice"
import { note } from "../utils/types";
import BlockComponent from "./blockNote";
import { interactionSelector, toogleAction } from "../fetures/interactivity.slice";
import { useCallback, useEffect, useState } from "react";
import { IoFolderOutline } from "react-icons/io5";
export default function ScrollComponent() {
    const notes = useSelector(NoteSelector);
    const toogleNote = useSelector(interactionSelector);
    const [_note, SetNote] = useState<note>();
    const Block = useCallback(() => _note && <BlockComponent data={_note} />, [_note])
    useEffect(() => {
        SetNote(() => notes.notes.find(n => n.id === toogleNote.whichNoteYouWillOpen))
    }, [toogleNote.whichNoteYouWillOpen])
    return (
        <div className=" w-full flex overflow-hidden ">
            <div className="border-r-[1px] border-zinc-500 w-60 h-full flex flex-col gap-4 p-4 pr-3 overflow-hidden overflow-y-scroll">
                {notes.notes.map(note => <Note key={note.created_at + note.id} note={note} />)}
            </div>
            <div className=" w-full h-full relative">
                {<Block />}
            </div>
        </div>
    )
}


const Note = ({ note }: { note: note }) => {
    let date = new Date(note.created_at);
    const interactions = useSelector(interactionSelector);
    let stringDate = date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
    let dispatch = useDispatch();
    const toogle = (id: number) => {
        dispatch(toogleAction({ whichNoteYouWillOpen: id, toogleNote: true }))
    }
    return (
        <div onClick={() => toogle(note.id)} className={`w-full h-24 cursor-pointer rounded-md flex flex-col items-start px-4 py-2 justify-center border-b-[1px] border-zinc-700 ${interactions.whichNoteYouWillOpen === note.id ? 'bg-yellow-600' : 'bg-transparent'}`}>
            <div className="w-full inline-block overflow-hidden text-ellipsis whitespace-nowrap font-black">{note.titulo ?? note.text}</div>
            <div className="flex gap-1 items-center justify-start"> <span className=" ">{stringDate}</span>  <span className="w-14 inline-block  overflow-hidden text-ellipsis whitespace-nowrap">{note.text}</span> </div>
            <div className="flex gap-1 items-center justify-start"><IoFolderOutline />notes</div>
        </div>
    )
}