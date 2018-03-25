import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from "redux-promise-middleware"

//IMPORTING REDUCERS
import userReducer from "./ducks/user"
import eventReducer from "./ducks/event"


//COMBINING REDUCERS
const reducers = combineReducers({ user: userReducer, events: eventReducer })

const store = createStore(reducers, applyMiddleware(promiseMiddleware()));

//EXPORTING STORE
export default store;