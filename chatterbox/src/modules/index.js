import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import register from "./register"

export default combineReducers({
    routing: routerReducer,
    register
});
