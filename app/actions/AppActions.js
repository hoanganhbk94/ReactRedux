export class ActionTypes {
    static LOGIN = 'LOGIN';
}

export const login = (email, password) => {
    return {
        type: ActionTypes.LOGIN,
        email: email,
        password: password
    }
};

