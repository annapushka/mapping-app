import {applyMiddleware, combineReducers, createStore} from "redux";
import orderReducer from "./orderReduser";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "../../saga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    orderReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)