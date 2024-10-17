'use server'
import { revalidatePath } from "next/cache";
import { createClient } from "./supabase/serverSupabase";
import { querysForNotes } from "./types";
import { URLSearchParams } from "url";
import { useSearchParams } from "next/navigation";




export async function createNote(query?: string) {

    try {
        const { user } = (await createClient().auth.getUser()).data;
        const note = await createClient().schema('notes').from('notes').insert({ author: user?.id }).select();
        const linkTofolder = await searchSubFolder(note.data![0].id,query);
        revalidatePath('/');
        return note;
    } catch (error) {
        throw error;
    }
}


const searchSubFolder = async (noteid:string,query?: string) =>{
    let supabase = createClient();
    if(query) {
        let {data} = await supabase.schema('notes').from('sub_folders').select('id').eq('query',query);
        return await linkNoteSubFolder(noteid,data![0].id);
    }
    return await linkNoteSubFolder(noteid,'b8f1ed2d-9f6f-4ec3-8612-68a63a53d75a');
}

export async function linkNoteSubFolder(noteid: number | string,query: string){
    try {
        const sql = createClient();
        return await sql.schema('notes').from('note_subfolder').insert({noteid: noteid,sub_foldersid:query})
        
    } catch (error) {
        throw error
    }


}  