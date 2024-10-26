
import getSubsFolders from "../utils/getSubsFolders";
import counNotes from "../utils/supabase/countNotes";
import { LinkSubfolder } from "./LinksubFolder";


export default async function ItemsMenuComponent({name,id}:{name: string,id: string}) {
    const subfolders = await getSubsFolders(id);
    return (
        <>
        <span className="cursor-pointer font-black text-zinc-500" >{name}</span>
        <ul className={` w-full  h-fit  max-h-[160px] overflow-hidden transition-all transform ease-in-out delay-150 flex flex-col`}>
            {subfolders?.data ?.map(async item =>{
                const count = (await counNotes(item.id)).count
               return <LinkSubfolder key={item.id} item={item} count={count || 0}/>
            })}
        </ul>
        </>
    );
}
