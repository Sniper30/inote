import { MouseEventHandler } from "react";

export default function CreateNewSubFolderComponent({close}:{close: (e: MouseEventHandler<HTMLButtonElement> & Event)=>void}) {
    return (
        <div className="w-full h-full flex flex-col justify-top items-start p-5 text-white">
            <h3 className="font-bold size-4 w-full h-10">New Folder</h3>
            <form action="" className="w-full h-full flex flex-col justify-between items-start">
                <div className="w-full">
                    <label>Name: </label>
                    <input type="text" name="folder" className="w-10/12 rounded-md border-yellow-600 border-4" />
                </div>
                <div>
                    <input type="checkbox" />
                    <label>make into smart folder</label>
                    <p>Organize using tags and other filters</p>
                </div>

                <div className="w-full h-12 text-end">
                    <button onClick={(e)=> close(e as any)} className="mr-3">cancel</button>
                    <button>ok</button>

                </div>
            </form>
        </div>
    )
}