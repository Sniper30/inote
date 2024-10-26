

export const validateInputs = (inputs: [string,string][])=>{
    let check = true
    let msg = '';
    for(let array of inputs){
        if(array[0].includes('$ACTION')) continue;
        
        if(array[1].length === 0){
            check = false;
            msg = 'Make shure you fill every input.';
            return {check,msg};
        }
        if(array[0].match(/lastname|name/) && array[1].length < 3){
            check = false;
            msg = 'Looks like you name o lastname are too short.';
            return {check,msg};
        }
        if(array[0] === 'phone' && !array[1].match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)){
            check = false;
            msg = 'Wrong number';
            return {check,msg};
        }
        if(array[0] === 'email' && !array[1].match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            check = false;
            msg = 'Wrong email'
            return {check,msg};
        }
}
return {check,msg};
}