import { combineReducers, applyMiddleware, createStore } from 'redux'
import footerTabChange from './footerTabChange'

const rootReducer = combineReducers({
    footerTabChange
})

export default rootReducer