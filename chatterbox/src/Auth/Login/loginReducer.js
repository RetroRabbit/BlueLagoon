import constants from './constants';

export const userlogin = (state, action) =>{

  switch (action.type) {
    case constants.ACTION_VALID :
      return action.validLogin
    case constants.ACTION_INVALID :
      return action.invalidLogin 
    default:
    return state
  }

}
