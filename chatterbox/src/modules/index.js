import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import sidebar from './Sidebar'

export default combineReducers({
    routing: routerReducer,
    sidebar:sidebar
});
