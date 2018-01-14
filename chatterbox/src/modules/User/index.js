import { push } from "react-router-redux/actions";
import { history } from "../../store";

const ENTER_USER="user/ENTER_USER";

let initialState={
    id:"",
    name:"",
    profile:"",
    email:"",
}

export default function(state = initialState, action) {
    switch (action.type) {
        case "user/ENTER_USER": {
            console.log("user",user)
            let user=action.payload;
            return {
                ...state,
                id:user.id,
                name:user.name,
                image:user.image,
                email:user.email,
            };
        }
        default:{
            return state;
        }
    }
}
/*
export const enterUserToSystem = (user) => {
    return dispatch => {
        dispatch({
            type: ENTER_USER,
            payload: user
        });
        history.push("/");
    };
};*/

export const enterUserToSystem = (user) => {
    setCookie("user",JSON.stringify(user),5);
    console.log(user)
    return dispatch => {
        dispatch({
            type: ENTER_USER,
            payload: user
        });
    };
};

export const enterUserToSystemOnLogin = () => {
    let user=JSON.parse(getCookie("user"));
    console.log(user)
    return dispatch => {
        dispatch({
            type: "user/ENTER_USER",
            payload: user
        });
    };
};

function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
        }
        return "";
    } 

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
} 