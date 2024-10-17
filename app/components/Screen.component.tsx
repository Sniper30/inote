'use client'

import { useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import ScreenHeader from "./Screen.Header";
import ShowAllNotes from "./show_all_notes";
import { note } from "../utils/types";
import { addNotes } from "../fetures/write.and.save.note.slice";
import { viewSelector } from "../fetures/interactivity.slice";
import ScrollComponent from "./scroll.compoent";
import { revalidateTag } from "next/cache";


export default function ScreenComponent({ data }: { data: note[] }) {
    const dispath = useDispatch();
    const view = useSelector(viewSelector);
    useEffect(() => {
        dispath(addNotes(data));
    }, [data])
    return (
        <div className={` bg-zinc-800 w-full  h-full  flex flex-col overflow-hidden`}>
            <ScreenHeader />
        
            <div className="flex h-full">
            { view === 'scroll' ? <ScrollComponent/> : <ShowAllNotes />}
            </div>
        </div>
    )
}