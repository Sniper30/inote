import { createSlice} from '@reduxjs/toolkit';
import { RootState } from '../store';


export type view = 'scroll' | 'squares'

const initialStateInteraction = {
    toogleNote: false,
    whichNoteYouWillOpen: 0 || null,
    typeView: 'scroll'
}

const interactionSlice = createSlice({
    name:'interactions',
    initialState: initialStateInteraction,
    reducers:{
        toogleAction(state,action){
            state.toogleNote = action.payload.toogleNote
            state.whichNoteYouWillOpen = action.payload.whichNoteYouWillOpen
        },
        toogleView(state,action){
            state.typeView = action.payload.view
        }
    }
});

export const interactionSelector = (state:RootState)=> state.interactivity;
export const viewSelector = (state:RootState) => state.interactivity.typeView
export const {toogleAction,toogleView} =  interactionSlice.actions;
export default interactionSlice.reducer;


