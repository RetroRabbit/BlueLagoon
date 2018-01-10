export const editUserName = (user) => {
    console.log("Edit user name " + user.name)
    return {
        type: "EDIT_USER_NAME",
        payload: user
    }
}

export const editUserEmail = (user) => {
    console.log("Edit user email " + user.email)
    return {
        type: "EDIT_USER_EMAIL",
        payload: user
    }
}

export const editProfilePicture = (user) => {
    console.log("Edit user pp " + user.name)
    return {
        type: "EDIT_PROFILE_PICTURE",
        payload: user
    }
}

export const saveChanges = (user) => {
    console.log("save changes to " + user.name)
    return {
        type: "SAVE_CHANGES_USER_DETAILS",
        payload: user
    }
}