import { NEPALI_NUMBER } from "./constant";

export function convertToNepali(num:string):string {
    let nepali = '';
  
    for (let i = 0; i < (num).length; i++) {
        nepali += NEPALI_NUMBER[parseInt((num)[i])];
    }
    return nepali;
}