export const verifyUser = user => {
    /*NB:
     user={
       password:"",
       email:""
     }
  */
    return {
        type: 'VERIFY_USER',
        payload: user
    };
};

export const handleEmail = e => {
    return dispatch => {
        dispatch({
            type: "login/LOGIN_EMAIL",
            payload: e.target.value
        });
    };
};

export const handlePassword = e => {
    console.log(e)
    return dispatch => {
        dispatch({
            type: "login/LOGIN_PASSWORD",
            payload: e.target.value
        });
    };
};