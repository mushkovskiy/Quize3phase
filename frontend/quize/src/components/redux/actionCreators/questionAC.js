import { INIT_QUESTIONS } from "../actionTypes/questionAT"

export function questionAC (payload){
    return{
        type: INIT_QUESTIONS,
        payload
    }
}
