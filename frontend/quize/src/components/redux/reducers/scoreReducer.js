import { ADD_POINT,DIF_POINT } from "../actionTypes/scoreAddAT"


const scoreReducer =(state={score:0}, action)=>{
    switch(action.type){
        case ADD_POINT:
            console.log(action.payload)
            return{...state,score: state.score + action.payload}
        case DIF_POINT:
            return {...state,score: state.score - action.payload}
        default:
            return state
    }
}
export default scoreReducer
