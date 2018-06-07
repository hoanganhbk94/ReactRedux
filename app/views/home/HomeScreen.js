import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {logout} from "../../actions/AppActions";
import AlertManager from "../../utils/AlertManager";

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>{`${this.props.isLogin}`}</Text>
                <TouchableOpacity onPress={this.onLogOutClick}>
                    <Text>LOGOUT</Text>
                </TouchableOpacity>
            </View>
        );
    }

    onLogOutClick = () => {
        this.props.logOutClick();
        // Callback
        this.props.navigation.goBack();
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const mapStateToProps = (state) => {
    return {
        isLogin: state.LoginReducer.isLogin
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logOutClick: () => {
            dispatch(logout())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
