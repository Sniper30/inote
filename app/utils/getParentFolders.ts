
import { createClient } from "./supabase/serverSupabase";

export default async function getParentsFolders(){
    try {
        return (await createClient().schema('notes').from('folders').select('*')).data;
    } catch (error) {
        throw error;
    }
}

export async function fetchVersionToCacheGetParentsFolders(){
    try {
        const request =  await fetch('http://localhost:3000/api/',{
            method:'GET',
            cache:'force-cache'
        })
        return await request.json();
        
    } catch (error) {
        console.log(error)
        throw error;
    }
}