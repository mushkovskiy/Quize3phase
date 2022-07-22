
import {INIT_QUESTIONS} from '../actionTypes/questionAT'

const questionReducer = (state={questions:[]}, action) => {
  switch(action.type) {
    case INIT_QUESTIONS:
      console.log(action.payload)
      return {...state, questions: action.payload}
      default:
        return state
  }
}
export default questionReducer