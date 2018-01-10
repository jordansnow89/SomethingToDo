import { createStore, applyMiddleware } from 'redux'
import promisedMiddleware from "redux-promise-middleware"

import userReducer from "./ducks/user"

const store = createStore(userReducer, applyMiddleware(promisedMiddleware()));

export default store;