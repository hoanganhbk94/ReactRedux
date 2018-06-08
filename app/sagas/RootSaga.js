import {delay} from 'redux-saga';
import {all} from 'redux-saga/effects';
import {listenLogin, loginToServer, sayHello, watchLogin} from "./AppSagas";
import {listenFetchUsers} from "./UserSagas";

export default function* rootSaga() {
    yield all([
        listenLogin(),
        listenFetchUsers()
    ]);
}