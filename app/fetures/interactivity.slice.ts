import { createSlice} from '@reduxjs/toolkit';
import { RootState } from '../store';


export type view = 'scroll' | 'squares'

const initialStateInteraction = {
    toogleNote: false,
    whichNoteYouWillOpen: 0 || null,
    typeView: 'scroll',
    deleteView: {x: -1, y: -1},
    whichYouWillDelete: 0 || null,
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
        },
        toogleDelete(state,action){
            state.deleteView = action.payload.deleteView
            state.whichYouWillDelete = action.payload.whichYouWillDelete
            
        }
    }
});

export const interactionSelector = (state:RootState)=> state.interactivity;
export const viewSelector = (state:RootState) => state.interactivity.typeView
export const {toogleAction,toogleView, toogleDelete} =  interactionSlice.actions;
export default interactionSlice.reducer;


