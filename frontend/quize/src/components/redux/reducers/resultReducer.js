import { SHOW_RESULT} from "../actionTypes/scoreAddAT";


const userReducer =(state={result:[]}, action)=>{
    switch(action.type){
        case SHOW_RESULT:
            return{...state,result: action.payload}
        default:
            return state
    }
}
export default userReducer
