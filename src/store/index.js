import { combineReducers, createStore, compose, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"

import userListReducer from "./reducers/userListReducer"
import selectedUserReducer from './reducers/selectedUserReducer'

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose

const reducers = combineReducers({
    users: userListReducer,
    selectedUser: selectedUserReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
)