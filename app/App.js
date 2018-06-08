/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import AppNavigator from "./views/navigator/AppNavigator";
import AppReducers from "./reducers/AppReducers";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas/RootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(AppReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        );
    }
}

