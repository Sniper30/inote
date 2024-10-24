'use server'

import { revalidatePath } from "next/cache";
import { createClient } from "./supabase/serverSupabase"

export default async function deleteNote<T>(noteId: T) {
    const supabase = createClient();
    const DELETE_FOLDER = "9144853d-49b1-4eda-9e66-3d12e5bf94e6";
    try {

        await supabase.schema('notes').from('note_subfolder').update({ sub_foldersid: DELETE_FOLDER }).eq('noteid', noteId);


        revalidatePath('/');
    } catch (error) {

    }
}