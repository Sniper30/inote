import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
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
    reducers:{},
    extraReducers(builder){
        builder.addCase(saveWriteThunk.fulfilled,(state,action)=>{ 
            if(action.payload) state.notes = action.payload
        })
    }
});

export const saveWriteThunk = createAsyncThunk('writeAndSaveSlice/saveWriteThunk',async({noteId,text}:{noteId:string,text:string})=>{
    try {
        let supabase = createClient();
        (await supabase.schema('notes').from('notes').update({text}).eq('id', noteId).select());
        return (await supabase.schema('notes').from('notes').select('*').order('id',{ascending:false})).data as note[];
    } catch (error) {
        
    }
})

export default whiteAndSaveSlice.reducer;
export const NoteSelector = (state: RootState)=> state.writeAndSaveNote;

// export const {typing} = whiteAndSaveSlice.actions