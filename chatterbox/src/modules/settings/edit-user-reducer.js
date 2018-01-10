const initialState = {
    user: {
        name: "Rian van der Merwe",
        email: 'hvandermerwe@retrorabbit.co.za',
        profilePic: 'http://www.legobatman.com/assets/media/global/header/batwink-loop.gif'
    },
    editName: false,
    editEmail: false,
    editProfilePic: false,
    changesMade: false
}

export default function(state=initialState, action) {
    switch(action.type) {
        case 'EDIT_USER_NAME':
           return {
               ...state,
               editName: !state.editName,
               editEmail: false,
               editProfilePic: false
            }
 
        case 'EDIT_USER_EMAIL':
            return {
                ...state,
                editEmail: !state.editEmail,
                editName: false,
                editProfilePic: false
            }

        case 'EDIT_PROFILE_PICTURE':
            return {
                ...state,
                editProfilePic: !state.editProfilePic,
                editName: false,
                editEmail: false,
            }

        case 'SAVE_CHANGES_USER_DETAILS':
            return {
                ...state,
                editName: false,
                editEmail: false,
                editProfilePic: false,
                changesMade: true
        }

        default:
            return state;
    }
}
