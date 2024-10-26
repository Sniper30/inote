import { saveWriteThunk } from "@/app/fetures/write.and.save.note.slice";
import { AppDispatch } from "@/app/store";
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
export const useSaveHook = (data:{id:'',text:''}) =>{
    const dispatch = useDispatch<AppDispatch>();
    const [text, setText] = useState(data?.text || '');
    useEffect(() => {
        let time = setTimeout(() => {
            if(text !== data?.text) dispatch(saveWriteThunk({ noteId: data?.id, text }))
        }, 200);
    return () => clearTimeout(time)
}, [text,data.id,data.text,dispatch])

return {text,setText}
}