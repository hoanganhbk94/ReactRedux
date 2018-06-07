import { ActionTypes } from '../actions/AppActions';
import AlertManager from "../utils/AlertManager";

const initialState = {
    "email": '',
    "password": '',
    'isLogin': false
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN:
            if (action.email === 'Test' && action.password === '123') {
                return {
                    email: action.email,
                    password: action.password,
                    isLogin: true
                };
            }
            return state;
        case ActionTypes.LOGOUT:
            return {

            };
        default:
            return state;
    }
};
export default LoginReducer;