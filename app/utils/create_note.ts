'use server'
import { revalidatePath } from "next/cache";
import { createClient } from "./supabase/serverSupabase";




export async function createNote() {
    try {
        let { user } = (await createClient().auth.getUser()).data;
        const note = await createClient().schema('notes').from('notes').insert({ author: user?.id }).select();
        revalidatePath('/');
        return note;
    } catch (error) {
        throw error;
    }
}