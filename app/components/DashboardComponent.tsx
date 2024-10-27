import MenuHeader from "./MenuTopDashboardComponent";
import { parentFolder } from "../utils/types";
import ItemsMenuComponent from "./Items.menu.component";
import getParentsFolders from "../utils/getParentFolders";

export default async function DashboardComponent() {
  const folders = await getParentsFolders();
    return (    
        <div className="w-0 xl:min-w-64 h-full bg-zinc-700 border-r-[1.4px] border-zinc-800 overflow-hidden">
            <MenuHeader />
            <div className={`p-1 px-3 overflow-y-scroll `}>
                {folders?.map((menu:parentFolder)=> <ItemsMenuComponent key={menu.name} name={menu.name} id={menu.id} />)}
            </div>
            {/* <button onClick={()=>setToogleModal(!toogleModal)} className="absolute bottom-0 left-0 p-5 cursor-pointer">boton</button>
            <Modal children={<CreateNewSubFolderComponent close={close}/>} toogle={toogleModal}/>  */}
        </div>
    );
}