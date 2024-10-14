import {createAsyncThunk, createSlice, current} from '@reduxjs/toolkit';
import store, { RootState } from '../store';
import { createClient } from '../utils/supabase/clientSupabase';
import { note } from '../utils/types';

type initialState = {
    notes: note[],
    typing: string;
};

const whiteAndSaveSlice = createSlice({
    name: 'writeAndSaveSlice',
    initialState: {notes:[], typing:''} as initialState,
    reducers:{
        addNotes:(state,action)=>{
            state.notes = action.payload.map((r: {noteid: note}) => r.noteid );
        },
    },
    extraReducers(builder){
        builder.addCase(saveWriteThunk.fulfilled,(state,action)=>{ 
            let index = [...state.notes].findIndex((t)=> t.id === action.payload![0].id); 
            let first_part = [...state.notes].splice(0,index);
            let second_part = [...state.notes].slice( index + 1,[...state.notes].length);
            state.notes = [...first_part,action.payload![0],...second_part];
        })
    }
});

export const saveWriteThunk = createAsyncThunk('writeAndSaveSlice/saveWriteThunk',async({noteId,text}:{noteId:string,text:string})=>{
    try {
        let supabase = createClient();
        return (await supabase.schema('notes').from('notes').update({text}).eq('id', noteId).select()).data;
    } catch (error) {
        
    }
})

export default whiteAndSaveSlice.reducer;
export const NoteSelector = (state: RootState)=> state.writeAndSaveNote;

export const {addNotes} = whiteAndSaveSlice.actions