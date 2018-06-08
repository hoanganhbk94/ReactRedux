import {ServiceManager} from "../service/ServiceManager";
import {put, takeLatest, takeEvery} from 'redux-saga/effects';
import {ActionTypes, getAllUsersFail, getAllUsersSuccess} from "../actions/AppActions";

function* getAllUser() {
    try {
        const users = yield ServiceManager.getAllUserFromServer();
        yield put(getAllUsersSuccess(users));
    } catch (error) {
        yield put(getAllUsersFail());
    }
}

export function* listenFetchUsers() {
    yield takeLatest(ActionTypes.GET_USERS, getAllUser);
}