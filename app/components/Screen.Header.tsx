'use client'
import Header from "./Header.component";
import Nav from "./Nav.component";
import { IoIosMenu } from "react-icons/io";
import { IoGridOutline } from "react-icons/io5";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleView, viewSelector } from "../fetures/interactivity.slice";
import CloseCurrentNote from "./close_current_note";
import GarbageAndNewNoteBottons from "./Garbage_Create_note";
import Logout from "./Logout";

export default function ScreenMenu({ children }: { children?: React.ReactNode }) {
    return (
        <Header className="border-[1.4px] border-t-0 border-zinc-800 w-full">
            <Nav className="justify-between w-full pr-3 text-xl">

                <ShiftBottoms />
                <div className="xl:hidden block">
                <CloseCurrentNote />
                </div>
                <GarbageAndNewNoteBottons />
                <Logout />
            </Nav>
        </Header>
    );
}

const ShiftBottoms = () => {
    const view = useSelector(viewSelector);
    const dispath = useDispatch();
    useEffect(() => {
        if (document.body.clientWidth < 840) {
            toogle('squares')
        }
        const listener = window.addEventListener('resize', (e) => {
            if (document.body.clientWidth < 840) {
                toogle('squares')
            }
        });
        return () => window.removeEventListener('resize', () => listener);
    }, [])
    const toogle = (type: string) => dispath(toogleView({ view: type }));

    return (
        <div className="items-center hidden xl:flex">
            <div className="flex gap-1 w-fit items-center ml-5 text-gray-200 bg-zinc-800 h-8 rounded-md">
                <div onClick={() => toogle('scroll')} className={`hover:bg-zinc-500 rounded-md w-9 h-8 flex justify-center items-center ${view === 'scroll' ? 'bg-zinc-500' : 'bg-transparent'}`}>
                    < IoIosMenu className="text-lg" />
                </div>
                <div onClick={() => toogle('squares')} className={`hover:bg-zinc-500 rounded-md w-9 h-8 flex justify-center items-center ${view === 'squares' ? 'bg-zinc-500' : 'bg-transparent'}`}>
                    <IoGridOutline className="text-lg" />
                </div>
            </div>

            <CloseCurrentNote />
        </div>
    )
}

