import { NextRequest, NextResponse } from "next/server";
import getSubsFolders from "@/app/utils/getSubsFolders";

export async function GET(req:NextRequest,{params}:{params:{id: string}}){
// export async function GET(req:NextRequest){
    const subfolders =  await getSubsFolders('5c4317ae-9131-415b-b187-5564b4236c31');
    console.log("MMG",subfolders)
    return NextResponse.json({});
}