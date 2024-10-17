
import { OutgoingHttpHeader } from "http";
import { createClient } from "./supabase/serverSupabase";

export default async function getSubsFolders(parentID:string){
    try {
        return (await createClient().schema('notes').from('sub_folders').select('*').eq('parent',parentID)).data;
    } catch (error) {
        
    }
}
