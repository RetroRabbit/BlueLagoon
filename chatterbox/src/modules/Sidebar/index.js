import UserChat from '../../Main/MainArea/ChattingComponent/Sidebar/userchat';
import logo from '../../assets/male1.png';
import logo1 from '../../assets/male2.png';
import logo2 from '../../assets/female1.png';
import logo3 from '../../assets/Male3.png';
import slogo from '../../assets/search.png';
import { push } from 'react-router-redux';
import { createFilter } from 'react-search-input';
import SearchApi from 'redux-search/dist/commonjs/SearchApi';
import '../../Main/MainArea/ChattingComponent/Sidebar/index.css';
import axios from 'axios';
import userchat from '../../Main/MainArea/ChattingComponent/Sidebar/userchat';
export const CHAT_CLICKED = 'sidebar/CHAT_CLICKED';
export const SEARCH = 'sidebar/SEARCH';
export const MESSAGE = 'sidebar/MESSAGE';
export const GET_MSGS = 'sidebar/GET_MSGS';

const link = '10.0.0.178:63679';

var initialState = {
    currentChat: 1,
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
    ],
    displayUsers: [
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
    ],
    Messages: [],

};
var msgs = 1;
var messageStore =[];
var messageStore2 = [];
var messageCapture = [];
export default (state = initialState, action) => {
    switch (action.type) {
        case CHAT_CLICKED:
            var chatNum = action.payload

            //const KEYS_TO_FILTERS2 = ['id'];
            const KEYS_TO_FILTER = ['id'];
            console.log(chatNum);
            var messageStore = messageCapture.filter(createFilter(chatNum.toString(), KEYS_TO_FILTER.toString()));
            return {
                ...state,
                currentChat: chatNum,
                Messages: messageStore
            }
        case SEARCH: {
            var searchString = action.payload;
            var searchFound = [];
            if (searchString.length > 0) {
                const KEYS_TO_FILTERS = ['name', 'msg'];
                searchFound = state.users.filter(createFilter(searchString, KEYS_TO_FILTERS));
            } else {
                searchFound = state.users;
            }

            return {
                ...state,

                displayUsers: searchFound
            };
        }
        case MESSAGE: {
            console.log(state.currentChat)
            // let data = {
            //     text:action.payload.message,
            //     type:action.payload.type,
            //     time:action.payload.time
            // }
            // let obj = {
            //     method = "POST",
            //     body: JSON.stringify(data),
            //     headers: new Headers({
            //         "Content-Type":"application/json"
            //     })
            // }

            // fetch("http://localhost:56187/api/Messages",obj)
            // .then(response=>response.json())
            // .then(respJSON=>{
            //     console.log(respJSON)
            // })
            // .catch(err=>{
            //     console.log(err)
            // })


            // var messages1 = [];
            // axios
            //     .get('/api/Messages/')
            //     .then(function(response){
            //         console.log(response.data[0])
            //         var chat = response.data[0];
            //         chat.message = response.data[0].text;
            //         chat.selected = false;
            //         messages1.push(chat);

            //         for(let i=1; i<response.data.length; i++)
            //         {
            //             let duplicateFound = false;
            //             for(let j=0;j<messages1.length;j++)
            //             {
            //                 if(response.data[i].action.payload.id == messages1[j].action.payload.id)
            //                 {
            //                     messages1[j].message = response.data[i].text;
            //                     messages1[j].selected = false;
            //                     duplicateFound = true;
            //                 }
            //                 if(!duplicateFound)
            //                 {
            //                     chat = response.data[i];
            //                     chat.message = response.data[i].text;
            //                     chat.selected = false;
            //                     messages1.push(chat);
            //                 }
            //             }
            //         }

            //     })
            messageCapture.push({message: action.payload.message, time: action.payload.time, type: action.payload.type, id: msgs.toString()})
            const KEYS_TO_FILTER = ['id'];
            var messageStore2 = messageCapture.filter(createFilter(msgs.toString(), KEYS_TO_FILTER.toString()));

            return {
                users: state.users,
                displayUsers: state.displayUsers,
                currentChat: state.currentChat,
                Messages: messageStore2, //messageStore
            };
            
        }

        default:
            return state;
    }

};

export const chatClick = id => {
    msgs = id;

    return dispatch => {
        dispatch({
            type: CHAT_CLICKED,
            payload: id
        });
    };
};

export var searchGo = event => {
    //alert(event.target.value);
    //searchString = event.target.value
    console.log('SEARCH FOR:', event.target.value);

    return dispatch => {
        dispatch({
            type: SEARCH,
            payload: event.target.value
        });
    };
};

export function messagesCatch(message, time, type)
{
    
    return dispatch => {
            dispatch({
                type: MESSAGE,
                payload: {
                    message: message,
                    time: time,
                    type: type
                }
            });
    }

}



