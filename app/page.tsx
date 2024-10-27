

import {getAllNotes} from "./utils/get_all_notes";

import Dashboard from "./components/DashboardComponent";
import ScreenComponent from "./components/Screen.component";
import { note } from "./utils/types";




export default async function Home({
  searchParams
}:{
  searchParams :{
    query?:string,
  }
}) {
  const {data} = await getAllNotes(searchParams.query || 'all') as any as { data: note[] };
  return (
    <main className="flex w-full h-full bg-blue-500 relative">
      <Dashboard />

      <ScreenComponent data={data} />


    </main>

  );
}
