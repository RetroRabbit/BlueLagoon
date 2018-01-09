import { push } from 'react-router-redux'
const HANDLE_OPEN_MENU = 'header/HANDLE_OPEN_MENU'
const HANDLE_CLOSE_MENU = 'header/HANDLE_CLOSE_MENU'


const initialState = {
    anchorEl:null 
}

export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_OPEN_MENU:
      return {
        ...state,
        anchorEl: action.payload
      }
    case HANDLE_CLOSE_MENU:
      return {
        ...state,
        anchorEl: null
      }

    default:
      return state
  }
}

export const openMenu = (event) => {
    // alert("GO TO CHAT: "+id);
   
  return dispatch => {
    dispatch({
      type: HANDLE_OPEN_MENU,
      payload:event.currentTarget
    })
  }
}
export const closeMenu = () => {
  return dispatch => {
    dispatch({
      type: HANDLE_CLOSE_MENU
    })
  }
}
