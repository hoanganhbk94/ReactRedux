import { ActionTypes } from '../actions/AppActions';
import AlertManager from "../utils/AlertManager";

const initialState = {
    email: '',
    password: '',
    isLogin: false,
    showProgress: false
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN:
            if (action.email === 'Test@gmail.com' && action.password === '123456') {
                return {
                    email: action.email,
                    password: action.password,
                    isLogin: true
                };
            }
            return state;
        case ActionTypes.LOGOUT:
            return {...state, isLogin: false};
        default:
            return state;
    }
};
export default LoginReducer;