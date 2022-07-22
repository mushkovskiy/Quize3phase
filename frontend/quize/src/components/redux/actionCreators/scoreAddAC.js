import { ADD_POINT } from "../actionTypes/scoreAddAT"

export function scoreAddAC (payload){
    return{
        type: ADD_POINT,
        payload
    }
}
