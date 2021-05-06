import { combineReducers } from 'redux'
import loginDuck from './loginDuck'

const allReducers = combineReducers({
    login: loginDuck,
})

export default allReducers
