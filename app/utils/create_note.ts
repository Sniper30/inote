'use server'
import { revalidatePath } from "next/cache";
import { createClient } from "./supabase/serverSupabase";
import { linkNoteSubFolder } from "./createFolder";




export async function createNote() {
    try {
        let { user } = (await createClient().auth.getUser()).data;
        const note = await createClient().schema('notes').from('notes').insert({ author: user?.id }).select();
        const linkTofolder = await linkNoteSubFolder(note.data![0].id,'b8f1ed2d-9f6f-4ec3-8612-68a63a53d75a');
        console.log("note",linkTofolder);
        revalidatePath('/');
        return note;
    } catch (error) {
        throw error;
    }
}