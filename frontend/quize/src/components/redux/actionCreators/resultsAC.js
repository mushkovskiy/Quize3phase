import { SHOW_RESULT } from "../actionTypes/scoreAddAT"

export function resultAC (payload){
    return{
        type: SHOW_RESULT,
        payload
    }
}
