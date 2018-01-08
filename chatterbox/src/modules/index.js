
import { combineReducers } from 'redux'
import UserReducer from './settings/user-reducer.js'
import EditUserReducer from './settings/edit-user-reducer.js'

const rootReducer = combineReducers({
  user: UserReducer,
  edituser: EditUserReducer
});

export default rootReducer;
