
import logo from '../../assets/male1.png';
import { push } from 'react-router-redux'
export const CHAT_CLICKED = 'sidebar/CHAT_CLICKED'
export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
export const DECREMENT = 'counter/DECREMENT'

const initialState = {
    currentChat:1,  
    users: [
        {
            id: 1,
            name: 'Lloyd Jimenez',
            msg:
                'The practice of cigar smoking has been on the rise in the U.S. since the early 90’s. In part due The practice of cigar smoking has been on the rise in the U.S. since the early 90’s. In part due',
            img: logo
        },
        {
            id: 2,
            name: 'John Jimenez',
            msg:
                'The practice of cigar smoking has been on the rise in the U.S. since the early 90’s. In part due The practice of cigar smoking has been on the rise in the U.S. since the early 90’s. In part due',
            img: logo
        }
    ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHAT_CLICKED:
      return {
        ...state,
        currentChat: action.payload
      }

    default:
      return state
  }
}

export const chatClick = (id) => {
    alert("GO TO CHAT: "+id);
   
  return dispatch => {
    dispatch({
      type: CHAT_CLICKED,
      payload:id
    })

    dispatch({
      type: INCREMENT
    })
  }
}
