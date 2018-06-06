/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import LoginScreen from "./views/login/LoginScreen";
import AppReducers from "./reducers/AppReducers";

const store = createStore(AppReducers);
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <LoginScreen/>
            </Provider>
        );
    }
}
