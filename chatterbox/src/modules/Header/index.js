import { push } from 'react-router-redux';
const HANDLE_OPEN_MENU = 'header/HANDLE_OPEN_MENU';
const HANDLE_CLOSE_MENU = 'header/HANDLE_CLOSE_MENU';
const HANDLE_OPEN_SEARCH = 'header/HANDLE_OPEN_SEARCH';
const HANDLE_CLOSE_SEARCH = 'header/HANDLE_CLOSE_SEARCH';
const HANDLE_IN_CHAT = 'header/HANDLE_IN_CHAT';



const initialState = {
    anchorEl: false,
    searchShow:false,
    phonemodechat:false
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
export const handleHeaderInChat = status => {
    return dispatch => {
        dispatch({
            type: HANDLE_IN_CHAT,
            payload: status
        });
    };
};
