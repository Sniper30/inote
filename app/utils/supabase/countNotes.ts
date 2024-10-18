import { createClient } from "./serverSupabase";


export default async function counNotes(subfolder:string){
    return await createClient().schema('notes').from('note_subfolder').select('*',{count: 'exact'}).eq('sub_foldersid',subfolder);
}