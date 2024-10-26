'use server';


import { redirect } from "next/navigation";
import DashboardComponent from "../components/DashboardComponent";
import ScreenComponent from "../components/Screen.component";
import { createClient } from "../utils/supabase/serverSupabase";
import { note } from "../utils/types";

export default async function DeleteNotesPage({ params }: {
    params: Promise<{ query: string }>
}) {
    const supabase = createClient();
    const req = await supabase.schema('notes').from('note_subfolder')
        .select('noteid:notes!inner(*),sub_folders!inner()')
        .eq('sub_folders.name', (await params).query) as any as {data : note[]};
        let data = req?.data;
    return (
        <div className="flex w-full h-full bg-zinc-800 relative">
            <DashboardComponent />
            {<ScreenComponent data={data} />}
        </div>
    )
}