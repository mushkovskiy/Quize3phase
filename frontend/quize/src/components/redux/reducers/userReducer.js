import { REG_USER,DEL_REG_USER } from "../actionTypes/userAT"


const userReducer =(state={user:null}, action)=>{
    switch(action.type){
        case REG_USER:
            return{...state,user: action.payload}
        case DEL_REG_USER:
            return {...state,user: null}
        default:
            return state
    }
}
export default userReducer
