'use server'
import { revalidatePath } from "next/cache";
import { createClient } from "./supabase/serverSupabase";




export async function createNote(query: string) {
    let supabase = createClient();
    try {
        const { user } = (await supabase.auth.getUser()).data;
        const note = await supabase.schema('notes').from('notes').insert({ author: user?.id }).select();
        await supabase.rpc('link_sub_folder_to_a_note',{"_query":query,"note":note.data![0].id});
        revalidatePath('/');
        return note;
    } catch (error) {
        throw error;
    }
}