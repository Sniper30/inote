import { NextRequest, NextResponse } from "next/server";


const list:any = [];



export async function POST(req: NextRequest){
    console.log('hiciste la llamada')
    const body = await req.json();
    if(!list.find((l : string)=> l === body.name)) list.push(body.name);
    return NextResponse.json(list);
}

export async function GET() {
    return NextResponse.json(list);
}