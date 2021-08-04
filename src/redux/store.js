import thunk from 'redux-thunk';
import AuthReducer from './reducer/AuthReducer'
import { createStore, applyMiddleware, combineReducers } from 'redux'

export default createStore(combineReducers({
    AuthReducer
  }), applyMiddleware(thunk))