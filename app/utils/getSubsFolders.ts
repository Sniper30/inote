
import { OutgoingHttpHeader } from "http";
import { createClient } from "./supabase/serverSupabase";

export default async function getSubsFolders(parentID:string){
    try {
        // return (await createClient().schema('notes').from('sub_folders').select('*').eq('parent',parentID)).data;
        return await createClient().schema('notes').from('sub_folders').select('*')
    } catch (error) {
        
    }
}



export async function fetchgetSubsFolders(id:string){
    try {
        const request =  await fetch('http://localhost:3000/api/subfolders/'+id,{
            method:'GET',
            cache:'no-cache',
        })
        
        return await request.json();
        

    } catch (error) {
        console.log(error)
        throw error;
    }
}