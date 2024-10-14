
import MenuHeader from "./MenuTopDashboardComponent";

import { fetchVersionToCacheGetParentsFolders } from "../utils/getParentFolders";
import { parentFolder } from "../utils/types";
import ItemsMenuComponent from "./Items.menu.component";

export default async function DashboardComponent() {
    const folders =  await fetchVersionToCacheGetParentsFolders();
    console.log("mmg",folders)
    return (    
        <div className="min-w-64 h-full bg-zinc-700 border-r-[1.4px] border-zinc-800">
            <MenuHeader />
            <div className={`p-1 px-3 overflow-y-scroll `}>
                {folders?.map((menu:parentFolder)=> <ItemsMenuComponent key={menu.name} name={menu.name} id={menu.id} />)}
            </div>
            {/* <button onClick={()=>setToogleModal(!toogleModal)} className="absolute bottom-0 left-0 p-5 cursor-pointer">boton</button>
            <Modal children={<CreateNewSubFolderComponent close={close}/>} toogle={toogleModal}/>  */}
        </div>
    );
}