import { useDispatch, useSelector } from "react-redux"
import { interactionSelector, toogleAction, toogleDelete } from "../fetures/interactivity.slice"
import React, { useContext, useEffect, useRef, useState } from "react";
import { ScreenSize } from "../utils/contexts/getSizeScreenContext";
import DeleteNote from "./DeleteNoteFromDialog";
const elements = [] as any


export default function DialogNotes(){
    const dispatch = useDispatch();
    const interactions = useSelector(interactionSelector);
    const screenSize = useContext(ScreenSize);
    const getbounding = screenSize?.getBoundingClientRect();
    const dialog = useRef(null)
    useEffect(()=>{
        calculateSons(dialog.current)
        const handler: <T extends MouseEvent>(e:T )=>void = (e)=>{
            event?.stopImmediatePropagation();
            let target = e.target as HTMLElement
            if(dialog.current === target || elements.includes(target)) return;
            dispatch(toogleDelete({whichYouWillDelete: null, deleteView:{x:-1,y:-1}}))
            if(target.tagName === 'FORM' || 'SVG') return;
            if( target.tagName !== 'TEXTAREA')  dispatch(toogleAction({whichNoteYouWillOpen: null, toogleNote:false}))
        }
        window.addEventListener('mousedown',handler)
        return ()=> window.removeEventListener('mousedown',handler);
    },[interactions.deleteView.x,dispatch]);
 
    return (
        <div ref={dialog} style={{top: (interactions.deleteView.y - 50) + 'px',left: (interactions.deleteView.x - getbounding.x)+'px'}} className={`absolute w-[250px] h-[50px] ${interactions.whichYouWillDelete ? 'flex' : 'hidden'}`}>
             <DeleteNote noteId={String(interactions.whichYouWillDelete) } />
        </div>
    )
}

function calculateSons(target: HTMLElement | ChildNode | null){
    if(!target) return;
    Array.from(target.childNodes).forEach(el =>{
        elements.push(el);
        calculateSons(el);
    })
}