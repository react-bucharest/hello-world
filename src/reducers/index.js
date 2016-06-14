import { combineReducers } from 'redux'
import all from './all'

const rootReducer = combineReducers({
  messages: all
})

export default rootReducer