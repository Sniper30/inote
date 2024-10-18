'use client'
import { createContext } from "react";
import { BoundingClientRect } from "../types";



export const ScreenSize =  createContext<BoundingClientRect>({getBoundingClientRect:()=>({x:0,y:0})});