import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import Common from "../../utils/Common";

export default class UserItemView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.item.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'cyan',
        width: Common.window.width,
        height: 60,
        borderBottomWidth: 0.5,
        justifyContent: 'center',
    },
    text: {
        marginLeft: 15
    }
});