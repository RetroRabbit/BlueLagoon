import logo from '../../assets/male1.png';
import logo1 from '../../assets/male2.png';
import logo2 from '../../assets/female1.png';
import logo3 from '../../assets/Male3.png';
import slogo from '../../assets/search.png';
import { push } from 'react-router-redux'
import SearchApi from 'redux-search/dist/commonjs/SearchApi';
export const CHAT_CLICKED = 'sidebar/CHAT_CLICKED';
export const SEARCH = 'sidebar/SEARCH';


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
        },
        {
            id: 3,
            name: 'Catherine Sanders',
            msg:
                'It is not always possible to jet off half way around the world when you and your significant',
            img: logo2
        },
        {
            id: 4,
            name: 'Siyabonga Gift Ndovela',
            msg:
                'Here, I focus on a range of items and features that we use in life without giving them a second',
            img: logo3
        },
        {
            id: 5,
            name: 'Lloyd Jimenez',
            msg:
                'The practice of cigar smoking has been on the rise in the U.S. since the early 90’s. In part due',
            img: logo
        },
        {
            id: 6,
            name: 'Jeffrey Thomas',
            msg:
                'When you type the website name on your address bar, a simple yet classy homepage of',
            img: logo1
        },
        {
            id: 7,
            name: 'Catherine Sanders',
            msg:
                'It is not always possible to jet off half way around the world when you and your significant',
            img: logo2
        },
        {
            id: 8,
            name: 'Terry Gordon',
            msg:
                'Here, I focus on a range of items and features that we use in life without giving them a second',
            img: logo3
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
    case SEARCH:
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
  }
}


export const searchGo = (event) => {
    alert(event.target.value);
    
    // return dispatch => {
    //     dispatch({
    //       type: SEARCH,
    //       payload:users
    //     })
    //   }
  
}
