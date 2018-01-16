import { enterUserToSystem } from "../User";
const url_api="http://localhost:54604/api/";
const initialState = {
    logged: false,
    error: false,
    emailText:"",
    password:"",
    errorMessage:""
};
export default function(state = initialState, action) {
    switch (action.type) {
        case 'VERIFY_USER': {
            let error = false;
            let user = {};
            
            //Check if availabel; set user with db user deets
            //if not, set error to true
            let emailText=state.emailText;
            let password=state.password;

            if (emailText.length==0 || password.length==0) {
                return{
                    ...state,
                    error:true,
                    errorMessage:"Please enter all information"
                }
            }else{ 
                let MyResponse=action.payload;

                if (MyResponse.status=="failed") {
                    return {
                        ...state,
                        error: true,
                        errorMessage:MyResponse.message
                    };                        
                }else if (MyResponse.status=="successful") {
                    return {
                        ...state,
                        error: false
                    };                        
                }
            }
        }
        case 'HANDLE_LOGIN_EMAIL': {
            let error = false;
            let emailText=action.payload;
            
            //Check if availabel; set user with db user deets
            //if not, set error to true
            return {
                ...state,
                error: error,
                emailText
            };
        }
        case 'HANDLE_LOGIN_PASSWORD': {
            let error = false;
            let password=action.payload;
            return {
                ...state,
                error: error,
                password
            };
        }
        default:
            return state;
    }
}
