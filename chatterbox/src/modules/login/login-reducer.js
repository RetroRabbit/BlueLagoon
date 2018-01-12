const initialState = {
    logged: false,
    error: false,
    textEmail:"",
    textPassword:"",
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
            let password = state.textPassword;
            let email = state.textEmail;
            console.log(email,';',password);
            if(password.length==0 || email.length==0){
                error=true;
            }
            //Check if availabel; set user with db user deets
            //if not, set error to true
            return {
                ...state,
                error: error,
                user: user
            };
        }
        case 'login/LOGIN_EMAIL': {
            console.log('TODO: verify the user');
            let error = false;
            let email = action.payload;
            //Check if availabel; set user with db user deets
            //if not, set error to true
            return {
                ...state,
                error: error,
                textEmail:email
            };
        }
        case 'login/LOGIN_PASSWORD': {
            console.log('TODO: verify the user');
            let error = false;
            let password = action.payload;
            //Check if availabel; set user with db user deets
            //if not, set error to true
            return {
                ...state,
                error: error,
                textPassword:password
            };
        }
        default:
            return state;
    }
}
