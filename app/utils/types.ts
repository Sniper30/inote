

export interface note {
    id: number;
    text: string;
    author: number;
    updated_at: number;
    titulo: string;
    created_at: string
}

export interface folder {
    name?: string;
    query: querysForNotes;
    noteid: string | number
}

export enum querysForNotes {
    'lastDay',
    'lastWeek',
    'byTag',
    'all'
}

export interface parentFolder {
    id: string;
    name:string;
}
export type Item = {
    id: string,
    name: string,
    query: string
}
export type BoundingClientRect = {
    getBoundingClientRect: ()=>({x:0,y:0})
}