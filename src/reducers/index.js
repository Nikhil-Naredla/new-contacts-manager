import {combineReducers} from 'redux'
import contactReducers from './contact.reducers'

export default combineReducers({
    contacts : contactReducers
})