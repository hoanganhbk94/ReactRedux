import { ActionTypes } from '../actions/AppActions';

const initialState = {
    users: [],
    showProgress: false
};

const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_USERS:
            return {
                ...state, showProgress: true
            };
        case ActionTypes.GET_USERS_SUCCESS:
            return {
                ...state, users: action.users, showProgress: false
            };
        case ActionTypes.GET_USERS_FAIL:
            return {
                ...state, showProgress: false
            };
        default:
            return state;
    }
};
export default HomeReducer;