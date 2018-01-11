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
