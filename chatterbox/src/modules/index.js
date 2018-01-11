import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import sidebar from './Sidebar';
import header from './Header';
import login from './login/login-reducer';
import EditUserReducer from '../modules/settings/edit-user-reducer'
import userReducer from '../modules/settings/user-reducer'
import register from "./register"
import responsive from './Responsive'
import messages from './Sidebar/message-reducer'
//import userSettings from '../modules/settings/edit-user-reducer'

export default combineReducers({
    routing: routerReducer,
    sidebar: sidebar,
    user: userReducer,
    messages: messages,
    //settings: userSettings,

    edituser: EditUserReducer,
    header: header,
    register: register,
    responsive: responsive,
    login: login
});
