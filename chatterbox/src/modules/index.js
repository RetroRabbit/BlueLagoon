import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import register from "./register"
import sidebar from './Sidebar'

export default combineReducers({
    routing: routerReducer,
    register,
    sidebar:sidebar
});
