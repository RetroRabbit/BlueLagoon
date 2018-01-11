const initialState = {
    logged: false,
    error: false,
    user: {
        username: 'Adam',
        fullName: 'Adam Lerumo',
        email: 'ALerumo@retrorabbit.co.za',
        password: '1234'
    }
};
export default function(state = initialState, action) {
    switch (action.type) {
        case 'VERIFY_USER': {
            console.log('TODO: verify the user');
            let error = false;
            let user = {};
            let password = action.payload.password;
            let email = action.payload.email;
            //Check if availabel; set user with db user deets
            //if not, set error to true
            return {
                ...state,
                error: error,
                user: user
            };
        }
        default:
            return state;
    }
}
