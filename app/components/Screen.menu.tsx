'use client'
import Header from "./Header.component";
import Nav from "./Nav.component";
import { IoIosMenu } from "react-icons/io";
import { IoGridOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

import React from "react";

export default function ScreenMenu({ toogle, setToogle, children }: { toogle: boolean, setToogle: () => {}, children: React.ReactNode }) {


    return (
        <Header className="border-[1.4px] border-t-0 border-zinc-800 w-full">
            <Nav className="gap-52">

                <ShiftBottoms toogle={toogle} setToogle={setToogle} />
                {children}
            </Nav>
        </Header>
    );
}

const ShiftBottoms = ({ toogle, setToogle }: { toogle: boolean, setToogle: () => {} }) => {

    return (
        <div className="flex items-center">

            <div className="flex gap-1 w-fit items-center ml-5 text-gray-200 bg-zinc-800 h-8 rounded-md">
                <div className="hover:bg-zinc-500 rounded-md w-9 h-8 flex justify-center items-center">
                    < IoIosMenu className="text-lg" />
                </div>
                <div className="hover:bg-zinc-500 rounded-md w-9 h-8 flex justify-center items-center">
                    <IoGridOutline className="text-lg" />
                </div>
            </div>
            <IoIosArrowBack className="text-lg" onClick={() => toogle ? setToogle() : null} />
        </div>
    )
}

