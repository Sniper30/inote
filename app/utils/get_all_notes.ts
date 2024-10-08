import { createClient } from "./supabase/serverSupabase"
import { note } from "./types";

export default async function getAllNotes() {
    try {
        return await createClient().schema('notes').from('notes').select('*').order('id', { ascending: false }) as any as note[];
    } catch (error) {
        throw error
    }
}