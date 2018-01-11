import { push } from 'react-router-redux';
const HANDLE_OPEN_MENU = 'header/HANDLE_OPEN_MENU';
const HANDLE_CLOSE_MENU = 'header/HANDLE_CLOSE_MENU';
const HANDLE_OPEN_SEARCH = 'header/HANDLE_OPEN_SEARCH';
const HANDLE_CLOSE_SEARCH = 'header/HANDLE_CLOSE_SEARCH';
const RESIZE_HEADER = 'header/RESIZE_HEADER';
const HANDLE_IN_CHAT = 'header/HANDLE_IN_CHAT';

let initWinsize = window.innerWidth;
let btncls = 'normal';
let phnmd = false;
let inChat = window.location.href.indexOf('chat') > 0;
if (initWinsize < 500) {
    btncls = 'phonesize';
    phnmd = true;
}

console.log('INIT SIZE:', phnmd);
const initialState = {
    anchorEl: false,
    buttonsClass: btncls,
    phonemode: phnmd,
    searchShow: false,
    phonemodechat: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_OPEN_MENU:
            return {
                ...state,
                anchorEl: true
            };
        case HANDLE_CLOSE_MENU:
            return {
                ...state,
                anchorEl: false
            };

        case HANDLE_OPEN_SEARCH:
            return {
                ...state,
                searchShow: true
            };
        case HANDLE_CLOSE_SEARCH:
            return {
                ...state,
                searchShow: false
            };
        case HANDLE_IN_CHAT: {
            let phonemodechat = action.payload; //window.location.href.indexOf("chat")>0;
            return {
                ...state,
                phonemodechat: phonemodechat
            };
        }
        case RESIZE_HEADER: {
            let buttonsClass = state.buttonsClass;
            let phonemode = state.phonemode;
            let winsize = window.innerWidth;
            if (winsize < 500) {
                buttonsClass = 'phonesize';
                phonemode = true;
            } else {
                buttonsClass = 'normal';
                phonemode = false;
            }
            return {
                ...state,
                buttonsClass: buttonsClass,
                phonemode: phonemode
            };
        }

        default:
            return state;
    }
};

export const openMenu = () => {
    // alert("GO TO CHAT: "+id);

    return dispatch => {
        dispatch({
            type: HANDLE_OPEN_MENU
        });
    };
};
export const closeMenu = () => {
    return dispatch => {
        dispatch({
            type: HANDLE_CLOSE_MENU
        });
    };
};

export const openSearch = () => {
    // alert("GO TO CHAT: "+id);

    return dispatch => {
        dispatch({
            type: HANDLE_OPEN_SEARCH
        });
    };
};
export const closeSearch = () => {
    return dispatch => {
        dispatch({
            type: HANDLE_CLOSE_SEARCH
        });
    };
};
export const resize = () => {
    return dispatch => {
        dispatch({
            type: RESIZE_HEADER
        });
    };
};

export const handleHeaderInChat = status => {
    return dispatch => {
        dispatch({
            type: HANDLE_IN_CHAT,
            payload: status
        });
    };
};
