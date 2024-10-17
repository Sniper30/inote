'use client';
import { useDispatch, useSelector } from "react-redux";
import { interactionSelector, toogleAction } from "../fetures/interactivity.slice";
import { IoIosArrowBack } from "react-icons/io";

export default function CloseCurrentNote() {
    const toogleInteraction = useSelector(interactionSelector);
    const dispatch = useDispatch();
    return (

        <IoIosArrowBack className="text-lg" onClick={()=>toogleInteraction.toogleNote && dispatch(toogleAction({whichNoteYouWillOpen : null, toogleNote: false}))} />
    )
}
