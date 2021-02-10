// global state / redux state
// store is an object

// ACTIONS - they initiate the change
// REDUCERS - they save the change in the store

import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { counterReducer } from './counter/counter'
import { loginReducer } from './login/login'
import { albumsReducer } from './albums/albums'
import { artistsReducer } from './artists/artists'

const allReducers = combineReducers({
  counterReducer, 
  loginReducer, 
  albumsReducer,
  artistsReducer
})

const store = createStore(allReducers, applyMiddleware(thunk, logger))

export default store