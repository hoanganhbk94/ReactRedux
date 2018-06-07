import { ActionTypes } from '../actions/AppActions';
import AlertManager from "../utils/AlertManager";

const initialState = {
    "email": '',
    "password": ''
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN:
            AlertManager.showAlert("Login", action.email + action.password);
            return state;
        default:
            return state;
    }
};
export default LoginReducer;