import { combineReducers } from 'redux'

import userReducer from "./userReducer";
import questionReducer from './questionReducer'
import scoreReducer from "./scoreReducer";
import resultReducer from "./resultReducer";


const rootReducer = combineReducers({
    user:userReducer,
    question: questionReducer,
    score: scoreReducer,
    result: resultReducer
})

export default rootReducer
