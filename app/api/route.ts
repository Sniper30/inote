import { NextRequest, NextResponse } from "next/server";
import getParentsFolders from "../utils/getParentFolders";

export async function GET(req:NextRequest){
    const folders =  await getParentsFolders();
    return NextResponse.json(folders);
}