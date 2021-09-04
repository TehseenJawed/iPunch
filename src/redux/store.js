import thunk from 'redux-thunk';
import AuthReducer from './reducer/AuthReducer'
import AgentDataReducer from './reducer/AgentDataReducer'
import DesignerReducer from './reducer/DesignerReducer'
import AdminReducer from './reducer/AdminReducer'
import { createStore, applyMiddleware, combineReducers } from 'redux'

export default createStore(combineReducers({
    AuthReducer,
    AgentDataReducer,
    DesignerReducer,
    AdminReducer
  }), applyMiddleware(thunk))