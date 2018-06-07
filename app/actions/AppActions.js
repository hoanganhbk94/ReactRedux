export class ActionTypes {
    static LOGIN = 'LOGIN';
    static LOGOUT = 'LOGOUT';
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

