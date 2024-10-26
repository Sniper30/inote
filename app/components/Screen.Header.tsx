'use client'
import Header from "./Header.component";
import Nav from "./Nav.component";
import { IoIosMenu } from "react-icons/io";
import { IoGridOutline } from "react-icons/io5";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleView, viewSelector } from "../fetures/interactivity.slice";
import CloseCurrentNote from "./close_current_note";
import GarbageAndNewNoteBottons from "./Garbage_Create_note";
import Logout from "./Logout";

export default function ScreenMenu({ children }: {children?: React.ReactNode }) {

    // const setToogle = ()
    return (
        <Header className="border-[1.4px] border-t-0 border-zinc-800 w-full">
            <Nav className="gap-52">

                <ShiftBottoms/>
                <GarbageAndNewNoteBottons />
                <Logout />
            </Nav>
        </Header>
    );
}

const ShiftBottoms = () => {
    const view = useSelector(viewSelector);
    const dispath = useDispatch();
    const toogle = (type: string)=>{
        dispath(toogleView({view: type}))
    }
    return (
        <div className="flex items-center">
            <div className="flex gap-1 w-fit items-center ml-5 text-gray-200 bg-zinc-800 h-8 rounded-md">
                <div onClick={()=>toogle('scroll')} className={`hover:bg-zinc-500 rounded-md w-9 h-8 flex justify-center items-center ${view === 'scroll' ? 'bg-zinc-500' : 'bg-transparent'}`}>
                    < IoIosMenu  className="text-lg" />
                </div>
                <div onClick={()=>toogle('squares')} className={`hover:bg-zinc-500 rounded-md w-9 h-8 flex justify-center items-center ${view === 'squares' ? 'bg-zinc-500' : 'bg-transparent'}`}>
                    <IoGridOutline className="text-lg" />
                </div>
            </div>
          
            <CloseCurrentNote />
        </div>
    )
}

