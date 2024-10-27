
import BlockComponent from "./blockNote";
import { useSelector } from "react-redux";
import { interactionSelector } from "../fetures/interactivity.slice";
import { NoteSelector } from "../fetures/write.and.save.note.slice";
import DialogNotes from "./DialogNotes";
import DeleteNote from "./DeleteNoteFromDialog";

export default function ShowAllNotes(){
    const interactions = useSelector(interactionSelector);
    const notesSelector = useSelector(NoteSelector);
    return(
        <div className={`flex flex-wrap relative gap-4 p-1 pt-4 md:p-4 justify-center md:justify-normal content-start flex-1 h-full `}>
            <DialogNotes/>
            {
                (interactions.toogleNote && interactions.whichNoteYouWillOpen) ? 
                <BlockComponent data={notesSelector.notes.find(d => d.id === interactions.whichNoteYouWillOpen)}/> :
                 notesSelector.notes?.map((d:any, i:number) => <BlockComponent key={d.id} data={d}/>)

            }

    </div>
    )
}