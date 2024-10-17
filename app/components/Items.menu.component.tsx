
import getSubsFolders from "../utils/getSubsFolders";
import ItemMenuComponent from "./item.menu.component";


export default async function ItemsMenuComponent({name,id}:{name: string,id: string}) {
    const subfolders = await getSubsFolders(id);

    return (
        <>
        <span className="cursor-pointer font-black text-zinc-500" >{name}</span>
        <ul className={` w-full  h-fit  max-h-[160px] overflow-hidden transition-all transform ease-in-out delay-150`}>
            <ItemMenuComponent items={subfolders || []}/>
        </ul>
        </>
    );
}
