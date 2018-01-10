export const EDIT_USER_NAME = 'edit-user-reducer/EDIT_USER_NAME_REQUESTED';
export const EDIT_USER_EMAIL = 'edit-user-reducer/EDIT_USER_EMAIL_REQUESTED';
export const SAVE_CHANGES_USER_DETAILS = 'edit-user-reducer/EDIT_USER_PROFILE_PICTURE_REQUESTED';
export const EDIT_PROFILE_PICTURE = 'edit-user-reducer/EDIT_USER_PROFILE_PICTURE_REQUESTED';

const initialState = {
    editUserName: false,
    editUserEmail: false,
    editProfilePicture: false,
    saveChanges: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case 'EDIT_USER_NAME':
            return {
                ...state,
                editUserName: !state.editUserName
            };

        case 'EDIT_USER_EMAIL':
            return {
                ...state,
                editUserEmail: !state.editUserEmail
            };

        case 'SAVE_CHANGES_USER_DETAILS':
            return {
                ...state,
                saveChanges: !state.saveChanges,
                editUserName: !state.editUserName,
                editUserEmail: !state.editUserName,
                editProfilePicture: !state.editUserName
            };

        case 'EDIT_PROFILE_PICTURE':
            return {
                ...state,
                editProfilePicture: true
            };

        default:
            return state;
    }
}

export const editUserNameRequest = action => {
    console.log('edit user ' + action.firstname + ' ' + action.lastname);
    return dispatch => {
        dispatch({
            type: 'EDIT_USER_NAME_REQUESTED'
        });
    };
};

export const editUserEmailRequest = action => {
    console.log('edit user email: ' + action.email + ' ');
    return dispatch => {
        dispatch({
            type: 'EDIT_USER_EMAIL_REQUESTED'
        });
    };
};

export const editUserProfilePictureRequest = action => {
    console.log('edit profile picture of ' + action.firstname);
    return dispatch => {
        dispatch({
            type: 'EDIT_USER_PROFILE_PICTURE_REQUESTED'
        });
    };
};

export const saveChangesRequest = action => {
    console.log('saving changes to ' + action.firstname);
    return dispatch => {
        dispatch({
            type: 'SAVE_CHANGES_REQUESTED'
        });
    };
};
