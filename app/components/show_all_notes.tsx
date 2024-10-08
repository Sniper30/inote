import { Dispatch, SetStateAction, useEffect, useState } from "react";
import BlockComponent from "./blockNote";
import { note } from "../utils/types";
import styles from '@/app/app.module.css'

export default function ShowAllNotes({data,toogle,showOneNote,open}:{data:note[],toogle:boolean,showOneNote:boolean | number,open:(i: number | boolean)=>void}){

    return(
        <div className={`${styles?.divsHeader} flex flex-wrap justify-start items-start relative`}>
            {
                (toogle) ? <BlockComponent toogle={toogle}  data={data[showOneNote as number]}/> :
                data.length ? 
                data?.map((d:any, i:number) => <BlockComponent open={()=> open(i)} key={i} toogle={toogle}  data={d}/>)
                : null
            }
    </div>
    )
}