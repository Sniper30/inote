import { createClient } from "./supabase/serverSupabase";
import {querysForNotes } from "./types";

export async function linkNoteSubFolder(noteid: number | string,query: querysForNotes){
    try {
        const sql = createClient();
        return await sql.schema('notes').from('note_subfolder').insert({noteid: noteid,sub_foldersid:query})
        
    } catch (error) {
        throw error
    }


}  