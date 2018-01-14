export const verifyUser = (e) => {
    /*NB:
     user={
       password:"",
       email:""
     }
  */
    return {
        type: 'VERIFY_USER',
        payload:e
    };
};

export const handleEmail = e => {
    return {
        type: 'HANDLE_LOGIN_EMAIL',
        payload: e.target.value
    };
};

export const handlePassword = e => {
    return {
        type: 'HANDLE_LOGIN_PASSWORD',
        payload: e.target.value
    };
};