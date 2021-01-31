// ACTIONS - They initiate the change
// REDUCERS - They save the change in the store

import { createStore, combineReducers, applyMiddleware } from 'redux'

import { counterReducer } from './counter/counter'
import { loginReducer } from './login/login'
import { albumsReducer } from './albums/albums'

import logger from 'redux-logger'


const allReducers = combineReducers({
    counterReducer,
    loginReducer,
    albumsReducer
})

const store = createStore(allReducers, applyMiddleware(logger))
console.log(store.getState());

export default store