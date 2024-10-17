
import { NextResponse } from "next/server";
import getParentsFolders from "../utils/getParentFolders";

export async function GET(){
    const folders =  await getParentsFolders();

    return NextResponse.json(folders);
}