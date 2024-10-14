import {configureStore} from '@reduxjs/toolkit';
import interactionReducer from './fetures/interactivity.slice'
import writeAndSaveReducer from './fetures/write.and.save.note.slice'
import folderReducer from './fetures/folders.slice'
import subfolderReducer from './fetures/subFolders.slice'
const store = configureStore({
    reducer:{
        interactivity: interactionReducer,
        writeAndSaveNote: writeAndSaveReducer,
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch