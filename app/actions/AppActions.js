export class ActionTypes {
    static LOGIN                = 'LOGIN';
    static LOGIN_SUCCESS        = 'LOGIN_SUCCESS';
    static LOGIN_FAIL           = 'LOGIN_FAIL';
    static LOGOUT               = 'LOGOUT';
    static GET_USERS            = 'GET_USERS';
    static GET_USERS_SUCCESS    = 'GET_USERS_SUCCESS';
    static GET_USERS_FAIL       = 'GET_USERS_FAIL';
}

export const login = (email, password) => {
    return {
        type: ActionTypes.LOGIN,
        email: email,
        password: password
    }
};

export const logout = () => {
    return {
        type: ActionTypes.LOGOUT
    }
};

export const getAllUsers = () => {
    return {
        type: ActionTypes.GET_USERS
    }
};

export const getAllUsersSuccess = (users) => {
    return {
        type: ActionTypes.GET_USERS_SUCCESS,
        users: users
    }
};

export const getAllUsersFail = () => {
    return {
        type: ActionTypes.GET_USERS_FAIL
    }
};