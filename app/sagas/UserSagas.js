import {ServiceManager} from "../service/ServiceManager";
import {put, takeLatest, takeEvery} from 'redux-saga/effects';
import {ActionTypes, getAllUsersFail, getAllUsersSuccess} from "../actions/AppActions";
import UserEntity from "../models/UserEntity";

function* getAllUser() {
    try {
        const users = yield ServiceManager.getAllUserFromServer();
        let arrUser: [UserEntity] = [];
        for (userJSON of users) {
            let userEntity = new UserEntity();
            userEntity.mapFromJSON(userJSON);
            arrUser.push(userEntity);
        }
        yield put(getAllUsersSuccess(users));
    } catch (error) {
        yield put(getAllUsersFail());
    }
}

export function* listenFetchUsers() {
    yield takeLatest(ActionTypes.GET_USERS, getAllUser);
}