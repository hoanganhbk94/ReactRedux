import { ActionTypes } from '../actions/AppActions';

const initialState = {
    users: []
};

const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_USERS_SUCCESS:
            return {
                ...state, users: action.users
            };
        default:
            return state;
    }
};
export default HomeReducer;