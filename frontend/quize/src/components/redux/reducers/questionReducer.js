
import {INIT_QUESTIONS} from '../actionTypes/questionAT'

const questionReducer = (state={question:{}}, action) => {
  switch(action.type) {
    case INIT_QUESTIONS:
      return {...state, question: action.payload}
      default:
        return state
  }
}
export default questionReducer