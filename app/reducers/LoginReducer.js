import { ActionTypes } from '../actions/AppActions';
import AlertManager from "../common/AlertManager";

const initialState = {
    "email": '',
    "password": ''
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN:
            AlertManager.showAlert("Login", "Click login");
            return state;
        default:
            return state;
    }
};
export default LoginReducer;