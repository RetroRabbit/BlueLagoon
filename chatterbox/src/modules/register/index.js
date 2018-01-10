export const CHANGE_STAGE = 'register/CHANGESTAGE';
export const STAGE_ONE_EMAIL = 'register/STAGE_ONE_EMAIL';
export const STAGE_ONE_NAME = 'register/STAGE_ONE_NAME';
export const STAGE_ONE_PASSWORD = 'register/STAGE_ONE_PASSWORD';

const initialState = {
    stage: 1,
    canNext: false,
    error: false,
    email: '',
    password: '',
    name: '',
    heading: [
        {
            title: 'Step One',
            sub: 'THE BASICS',
            error: 'Enter all details'
        },
        {
            title: 'Step Two',
            sub: 'PROFILE PICTURE',
            error: 'Pick a profile image'
        },
        {
            title: 'Last Step',
            sub: 'YOUR FIRST CHAT',
            error: "Enter friend's email"
        }
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_STAGE: {
            let currStage = state.stage;
            let canNext = state.canNext;
            let error = state.error;
            if (canNext) {
                if (currStage == 1) {
                    console.log('TO-DO: send details to backend');
                } else if (currStage == 2) {
                    console.log('TO-DO: send image to backend');
                } else if (currStage == 3) {
                    console.log('TO-DO: search for friend, redirect to main');
                    //this.props.history.push('/');
                }
                if (currStage != 3) {
                    currStage += 1;
                    error = false;
                    canNext = false;
                }
            } else {
                error = true;
            }
            return {
                ...state,
                stage: currStage,
                error: error,
                canNext: canNext
            };
        }
        case STAGE_ONE_EMAIL: {
            let email = action.payload;
            let password = state.password;
            let name = state.name;
            let canNext = state.canNext;
            if (email.length > 0 && password.length > 0 && name.length > 0) canNext = true;
            return {
                ...state,
                email,
                canNext
            };
        }
        case STAGE_ONE_PASSWORD: {
            let password = action.payload;
            let email = state.email;
            let name = state.name;
            let canNext = state.canNext;
            if (email.length > 0 && password.length > 0 && name.length > 0) canNext = true;
            return {
                ...state,
                password,
                canNext
            };
        }
        case STAGE_ONE_NAME: {
            let name = action.payload;
            let email = state.email;
            let password = state.password;
            let canNext = state.canNext;
            let error = state.error;
            if (email.length > 0 && password.length > 0 && name.length > 0) {
                canNext = true;
            }
            return {
                ...state,
                name,
                canNext
            };
        }
        default:
            return state;
    }
};

export const changeStage = () => {
    return dispatch => {
        dispatch({
            type: CHANGE_STAGE
        });
    };
};

export const handleStageOneEmail = e => {
    let val = e.target.value;
    console.log('EMAIL:', val);
    return dispatch => {
        dispatch({
            type: STAGE_ONE_EMAIL,
            payload: val
        });
    };
};

export const handleStageOnePassword = e => {
    let val = e.target.value;
    return dispatch => {
        dispatch({
            type: STAGE_ONE_PASSWORD,
            payload: val
        });
    };
};

export const handleStageOneName = e => {
    let val = e.target.value;
    return dispatch => {
        dispatch({
            type: STAGE_ONE_NAME,
            payload: val
        });
    };
};
