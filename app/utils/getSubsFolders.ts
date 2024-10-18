
import { OutgoingHttpHeader } from "http";
import { createClient } from "./supabase/serverSupabase";

export default async function getSubsFolders(parentID:string){
    const supabase = createClient();
    try {
        return (await supabase.schema('notes').from('sub_folders').select('*').eq('parent',parentID));

    } catch (error) {
        
    }
}
