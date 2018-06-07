import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import HomeReducer from  './HomeReducer';

const AppReducers = combineReducers({
    LoginReducer,
    HomeReducer
});

export default AppReducers;