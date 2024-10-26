'use client'

import { useEffect, useRef} from "react";
import { useDispatch, useSelector } from 'react-redux'
import ScreenHeader from "./Screen.Header";
import ShowAllNotes from "./show_all_notes";
import { note } from "../utils/types";
import { addNotes } from "../fetures/write.and.save.note.slice";
import {viewSelector } from "../fetures/interactivity.slice";
import ScrollComponent from "./scroll.compoent";
import { ScreenSize} from "../utils/contexts/getSizeScreenContext";
import { createClient } from "../utils/supabase/clientSupabase";

export default function ScreenComponent({ data }: { data: note[] }) {
    const dispath = useDispatch();
    const ref = useRef(null);
    const view = useSelector(viewSelector);
    useEffect(() => {
        dispath(addNotes(data));
    }, [data,dispath])
    return (
        <div ref={ref} className={` bg-zinc-800 w-full  h-full  flex flex-col overflow-hidden`}>
            <ScreenHeader />
        
            <div className="flex h-full">
            <ScreenSize.Provider value={ref.current ? ref.current : {getBoundingClientRect:()=>({x:0,y:0})}}>
                  { view === 'scroll' ? <ScrollComponent/> : <ShowAllNotes />}
            </ScreenSize.Provider>
            </div>
        </div>
    )
}