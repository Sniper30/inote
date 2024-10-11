import { createSlice} from '@reduxjs/toolkit';
import { RootState } from '../store';


const initialStateInteraction = {
    toogleNote: false,
    whichNoteYouWillOpen: 0 || null
}

const interactionSlice = createSlice({
    name:'interactions',
    initialState: initialStateInteraction,
    reducers:{
        toogleAction(state,action){
            console.log(action.payload)
            state.toogleNote = action.payload.toogleNote
            state.whichNoteYouWillOpen = action.payload.whichNoteYouWillOpen
        }
    }
});

export const interactionSelector = (state:RootState)=> state.interactivity;
export const {toogleAction} =  interactionSlice.actions;
export default interactionSlice.reducer;


