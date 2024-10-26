'use server'
import { revalidatePath } from "next/cache";
import { createClient } from "../utils/supabase/serverSupabase";
import { redirect } from "next/navigation";
import { stateRegisterType } from "./form";
import { validateInputs } from "./validateInputs";

export type inputs ={
    name: string,
    lastname: string;
    phone:string;
    email: string,
    password: string
}

export const register = async (state: stateRegisterType,formData:FormData) => {
    const validate = validateInputs([...formData as any]);
    const values = Object.fromEntries(formData) as inputs;
    if(!validate.check){
        state.error = validate.msg;
        return state;
    }
    const supabase = createClient();
    {
        let {error} = await supabase.schema('notes').from('users').insert({name: values.name, lastname: values.lastname,email: values.email,phone: values.phone});
        if(error){
            state.error = error.message;
            if(error.message.includes('duplicate key value violates unique constraint')) state.error = 'This email already exists';
            return state;
        }

    }
    const {error} = await supabase.auth.signUp({email: values.email,password: values.password,phone: values.phone});
        if(error){
            state.error = error.message;
            return state;
        }
        state.error = null;
        return state;

}