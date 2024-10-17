import { createClient } from "./supabase/serverSupabase";



export default async function getParentsFolders(){
    try {
        const data =  (await createClient().schema('notes').from('folders').select('*'));
        return data.data
    } catch (error) {
        throw error;
    }
}