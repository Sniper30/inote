import { createSlice} from '@reduxjs/toolkit';
import { RootState } from '../store';


const initialStateInteraction = {
    toogleNote: false,
    whichNoteYouWillOpen: 0
}

const interactionSlice = createSlice({
    name:'interactions',
    initialState: initialStateInteraction,
    reducers:{
        toogleAction(state,action){
            state.toogleNote = !state.toogleNote;
            if(action.payload.whichNoteYouWillOpen) state.whichNoteYouWillOpen = action.payload.whichNoteYouWillOpen
        }
    }
});

export const interactionSelector = (state:RootState)=> state.interactivity;
export const {toogleAction} =  interactionSlice.actions;
export default interactionSlice.reducer;


