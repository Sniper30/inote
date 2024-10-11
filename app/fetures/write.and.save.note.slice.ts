import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { RootState } from '../store';
import { createClient } from '../utils/supabase/clientSupabase';
import { note } from '../utils/types';

const whiteAndSaveSlice = createSlice({
    name: 'writeAndSaveSlice',
    initialState: [] as note[],
    reducers:{
        fillState:(state,action)=>{
            // state
        }
    },
    extraReducers(builder){
        builder.addCase(saveWriteThunk.fulfilled,(state,action)=>{
            console.log('action: ',action.payload)
            // if(action.payload?.data ) state [...state,...action.payload.data as note[]]
        })
    }
});

export const saveWriteThunk = createAsyncThunk('writeAndSaveSlice/saveWriteThunk',async({noteId,text}:{noteId:string,text:string})=>{
    try {
        let supabase = createClient();
        return await supabase.schema('notes').from('notes').update({text}).eq('id', noteId).select('*');
    } catch (error) {
        
    }
})

export default whiteAndSaveSlice.reducer;
export const NoteSelector = (state: RootState)=> state.writeAndSaveNote;

export const {fillState} = whiteAndSaveSlice.actions