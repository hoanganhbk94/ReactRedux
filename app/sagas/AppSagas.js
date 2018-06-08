import {delay} from 'redux-saga';
import {put, takeEvery} from 'redux-saga/effects';
import {ActionTypes} from "../actions/AppActions";
import AlertManager from "../utils/AlertManager";

export function* loginToServer() {
    AlertManager.showAlert("App", "Login to server");
}

export function* listenLogin() {
    yield takeEvery(ActionTypes.LOGIN, loginToServer);
}