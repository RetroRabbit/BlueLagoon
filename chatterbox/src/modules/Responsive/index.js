import { push } from 'react-router-redux';
const RESIZE_WINDOW = 'responsiveness/RESIZE_WINDOW';
const HANDLE_IN_CHAT = 'header/HANDLE_IN_CHAT';

let initWinsize = window.innerWidth;
let btncls = 'normal';
let phnmd = false;
let inChat = window.location.href.indexOf('chat') > 0;
if (initWinsize < 600) {
    btncls = 'phonesize';
    phnmd = true;
}

const initialState = {
    windowSizeClass: btncls,
    phonemode: phnmd,
    phonemodechat: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case RESIZE_WINDOW: {
            let windowSizeClass = state.windowSizeClass;
            let phonemode = state.phonemode;
            let winsize = window.innerWidth;
            if (winsize < 600) {
                windowSizeClass = 'phonesize';
                console.log('PHONEMODE', winsize);
                phonemode = true;
            } else {
                windowSizeClass = 'normal';
                console.log('NORMMODE', winsize);
                phonemode = false;
            }
            return {
                ...state,
                windowSizeClass: windowSizeClass,
                phonemode: phonemode
            };
        }
        case HANDLE_IN_CHAT: {
            let phonemodechat = action.payload; //window.location.href.indexOf("chat")>0;
            return {
                ...state,
                phonemodechat: phonemodechat
            };
        }

        default:
            return state;
    }
};

export const resize = () => {
    return dispatch => {
        dispatch({
            type: RESIZE_WINDOW
        });
    };
};
