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
            console.log('TODO: ',emailText,emailText.length,":",password,password.length);

            if (emailText.length==0 || password.length==0) {
                return{
                    ...state,
                    error:true,
                    errorMessage:"Please enter all information"
                }
            }
            else{                
                let data={
                    email:emailText,
                    password
                }
                let opt={
                    method:'POST',
                    body: JSON.stringify(data),
                    headers: new Headers({
                        'Content-Type':'application/json'
                    })
                };
                let MyResponse;
                /*let wait=true;
                    let request=async ()=>{
                        console.log("response");
                        
                        let response=await fetch(url_api+"user/login",opt)
                            .then(response=>response.json());

                            console.log(response);
                        wait=false;
                        console.log(response.status);
                        console.log("responseib");
                        MyResponse=response
                    }
                    let ret= request();
                let req*/
                let xhttp=new XMLHttpRequest();

                xhttp.onreadystatechange = function() {
                    console.log("YP")
                  if (xhttp.readyState == 4 && xhttp.status == 200) {
                    MyResponse=JSON.parse(this.responseText);
                  }
                };
                xhttp.open("POST", url_api+"user/login", false);
                xhttp.setRequestHeader("Content-Type", "application/json");
                xhttp.send(JSON.stringify(data));

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
