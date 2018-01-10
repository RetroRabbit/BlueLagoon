export const getUserName = user => {
    return {
        type: 'GET_USER_NAME',
        payload: user
    };
};
export const getUserPassword = user => {
    return {
        type: 'GET_USER_PASSWORD',
        payload: user
    };
};
export const verifyUser = user => {
    return {
        type: 'VERIFY_USER',
        payload: user
    };
};
