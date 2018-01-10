import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import sidebar from './Sidebar';

import header from './Header';
import EditUserReducer from '../modules/settings/edit-user-reducer'
import userReducer from '../modules/settings/user-reducer'
import register from "./register"

export default combineReducers({
    routing: routerReducer,
    sidebar:sidebar,
    user: userReducer,

    settings: userSettings

    edituser: EditUserReducer,
    header:header,
    register:register,

});
