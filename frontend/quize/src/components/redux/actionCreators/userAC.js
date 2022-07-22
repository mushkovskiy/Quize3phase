import { REG_USER } from "../actionTypes/userAT"

export function userAC (payload){
    return{
        type: REG_USER,
        payload
    }
}
