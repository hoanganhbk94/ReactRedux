export class ActionTypes {
    static LOGIN                = 'LOGIN';
    static LOGIN_SUCCESS        = 'LOGIN_SUCCESS';
    static LOGIN_FAIL           = 'LOGIN_FAIL';
    static LOGOUT               = 'LOGOUT';
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

