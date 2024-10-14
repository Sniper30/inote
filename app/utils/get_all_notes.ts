import { createClient } from "./supabase/serverSupabase"
import { note } from "./types";

export default async function getAllNotes(query:string) {
    try {
        // return await createClient().schema('notes').from('note_subfolder').select('notes!inner(*)').eq('subfolders.query',query).order('id', { ascending: false }) as any as note[];
        return await createClient().schema('notes').from('note_subfolder').select('noteid!inner(*),sub_folders!inner()').eq('sub_folders.query',query);
    } catch (error) {
        throw error
    }
}