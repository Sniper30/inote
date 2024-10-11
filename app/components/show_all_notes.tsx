import { Dispatch, SetStateAction, useEffect, useState } from "react";
import BlockComponent from "./blockNote";
import { note } from "../utils/types";
import styles from '@/app/app.module.css'
import { useDispatch, useSelector } from "react-redux";
import { interactionSelector, toogleAction } from "../fetures/interactivity.slice";

export default function ShowAllNotes({data}:{data:note[]}){
    const toogleRedux = useSelector(interactionSelector);
    return(
        <div className={`${styles?.divsHeader} flex flex-wrap justify-start items-start relative`}>
            {
                (toogleRedux.toogleNote) ? <BlockComponent data={data.find(d => d.id === toogleRedux.whichNoteYouWillOpen)}/> :
                 data?.map((d:any, i:number) => <BlockComponent key={i} data={d}/>)

            }
    </div>
    )
}