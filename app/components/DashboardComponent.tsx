'use client'
import { useState } from "react";

import ItemsMenuComponent from "./Items.menu.component";
import MenuHeader from "./MenuTopDashboardComponent";

import Modal from "./modal";
import CreateNewSubFolderComponent from "./CreateNewSubFolder";

const array = [
    {
        title: 'icloud',
    }
]

export default function DashboardComponent() {
    const [toogleModal, setToogleModal] = useState(false);
    const close = (e:Event) =>{
        e.preventDefault();
        setToogleModal(!toogleModal);
    }

    return (
        <div className="min-w-64 h-full bg-zinc-700 border-r-[1.4px] border-zinc-800">
            <MenuHeader />
            <div className={`p-1 px-3 overflow-y-scroll `}>
                {array.map((menu,i)=> <ItemsMenuComponent key={menu.title} title={menu.title} />)}
            </div>
            <button onClick={()=>setToogleModal(!toogleModal)} className="absolute bottom-0 left-0 p-5 cursor-pointer">boton</button>
            <Modal children={<CreateNewSubFolderComponent close={close}/>} toogle={toogleModal}/> 
        </div>
    );
}