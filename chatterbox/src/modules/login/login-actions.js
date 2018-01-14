export const verifyUser = () => {
    /*NB:
     user={
       password:"",
       email:""
     }
  */
    return {
        type: 'VERIFY_USER'
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