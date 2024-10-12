'use client';
import { IoIosArrowBack } from "react-icons/io";
import {createNote} from "../utils/create_note"
import { IoIosAdd, IoIosMenu } from "react-icons/io";
import { Dispatch, SetStateAction, useActionState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { interactionSelector, toogleAction } from "../fetures/interactivity.slice";
 const GarbageAndNewNoteBottons = () => {
   const [error,action,isPending] = useActionState(createNote,null);
   const {toogleNote, whichNoteYouWillOpen} = useSelector(interactionSelector);
   const dispatch = useDispatch();

    useEffect(()=>{
        if(isPending) dispatch(toogleAction({toogleNote: false, whichNoteYouWillOpen:null}))
        if(error?.data?.length && !isPending){
        dispatch(toogleAction({toogleNote: true, whichNoteYouWillOpen: error.data[0].id}))
        }
    },[error,isPending])

    return (
        <div className="flex items-center justify-center">

            <div className="flex flex-1 justify-center items-center text-gray-200 divide-x-[1px]">
                <div className="w-9 flex justify-center flex-1 ">
                    < IoIosMenu className="text-lg" />
                </div>
                <div className="w-9 flex justify-center items-center flex-1 ">
                    <form className="flex-1 flex justify-center ">
                        <button formAction={action}><IoIosAdd  className="text-lg"/></button>
                        {isPending && <p>loading...</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default GarbageAndNewNoteBottons;