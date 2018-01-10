import constants from './constants';

export const userlogin = (state, action) =>{
  if (action.type == constants.ACTION_VALID){
    return action.validLogin
  }else if (action.type == constants.ACTION_INVALID) {
    return action.payload
  }
  else {
    return state
  }
}
