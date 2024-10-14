import { createClient } from "./supabase/serverSupabase";
import { folder, note, querysForNotes } from "./types";

export async function linkNoteSubFolder(noteid: number | string,query: querysForNotes){
    try {
        let sql = createClient();
        return await sql.schema('notes').from('note_subfolder').insert({noteid: noteid,sub_foldersid:query})
        
    } catch (error) {
        
    }


}  