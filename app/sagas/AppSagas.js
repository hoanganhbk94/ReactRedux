import {delay} from 'redux-saga';
import {put, takeEvery} from 'redux-saga/effects';
import {ActionTypes} from "../actions/AppActions";
import AlertManager from "../utils/AlertManager";
import Log from "../utils/Log";

export function* loginToServer() {
    Log.print("Login success");
}

export function* listenLogin() {
    yield takeEvery(ActionTypes.LOGIN, loginToServer);
}