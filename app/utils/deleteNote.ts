'use server'

import { revalidatePath } from "next/cache";
import { createClient } from "./supabase/serverSupabase"

export default async function deleteNote<T>(noteId:T){
    const supabase = createClient();
    console.log("server ",noteId)
    try {
        await supabase.schema('notes').from('note_subfolder').delete().eq('noteid',noteId);
        await supabase.schema('notes').from('notes').delete().eq('id',noteId);

        revalidatePath('/');
    } catch (error) {
        
    }
}