import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ActivityIndicator
} from 'react-native';

export default class ProgressHUD extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    }
});