import { createStore, applyMiddleware, combineReducers  } from 'redux'
import promiseMiddleware from "redux-promise-middleware"


import userReducer from "./ducks/user"
import eventReducer from "./ducks/event"

const reducers = combineReducers({ mainReducer: userReducer, eventReducer })

const store = createStore( reducers , applyMiddleware(promiseMiddleware()));

export default store;