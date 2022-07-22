import { DIF_POINT } from "../actionTypes/scoreAddAT"

export function scoreDifAC (payload){
    return{
        type: DIF_POINT,
        payload
    }
}
