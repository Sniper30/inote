'use client';
import { IoIosArrowBack } from "react-icons/io";
import {createNote} from "../utils/create_note"
import { IoIosAdd, IoIosMenu } from "react-icons/io";
import { Dispatch, SetStateAction, useActionState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toogleAction } from "../fetures/interactivity.slice";
 const GarbageAndNewNoteBottons = ({open}:{open:(b:boolean | number)=>void}) => {
   const [error,action,isPending] = useActionState(createNote,null);
   const dispatch = useDispatch();
   useEffect(()=>{
       if(error?.status === 201) dispatch(toogleAction({whichNoteYouWillOpen: 0}))
    },[isPending]);

    return (
        <div className="flex items-center">

            <div className="flex justify-center items-center ml-5 text-gray-200 divide-x-[1px] w-20 h-8">
                <div className="w-9 flex justify-center ">
                    < IoIosMenu className="text-lg" />
                </div>
                <div className="w-9 flex justify-center">
                    <form>
                        <button formAction={action}><IoIosAdd  className="text-lg"/></button>
                        {isPending && <p>loading...</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default GarbageAndNewNoteBottons;