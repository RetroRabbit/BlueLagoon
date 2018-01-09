import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import sidebar from './Sidebar';
import userSettings from '../modules/settings/edit-user-reducer'
import userReducer from '../modules/settings/user-reducer'

export default combineReducers({
    routing: routerReducer,
    sidebar:sidebar,
    user: userReducer,
    settings: userSettings
});
