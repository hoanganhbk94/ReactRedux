import { ActionTypes } from '../actions/AppActions';

const initialState = {

};

const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOGOUT:
            return state;
        default:
            return state;
    }
};
export default HomeReducer;