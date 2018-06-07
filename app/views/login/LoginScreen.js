import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Colors from "../../utils/Colors";
import {login} from "../../actions/AppActions";
import {connect} from 'react-redux';
import Common from "../../utils/Common";
import {ScreenName} from "../navigator/AppNavigator";
import Validation from "../../utils/Validation";
import Log from "../../utils/Log";
import AlertManager from "../../utils/AlertManager";

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <TextInput style={styles.textInput} onChangeText={(email) => this.setState({email})}/>
                <TextInput style={styles.textInput} onChangeText={(password) => this.setState({password})}/>
                <TouchableOpacity style={styles.loginButton} onPress={this.onClickLogin}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <Text>{`IsLogin: ${this.props.isLogin}`}</Text>
            </View>
        );
    }

    onClickLogin = () => {
        if (!Validation.isEmail(this.state.email)) {
            AlertManager.showAlert("Warning", "Email is not valid");
        } else if (!Validation.isPassword(this.state.password)) {
            AlertManager.showAlert("Warning", "Password is not enough characters");
        } else {
            this.props.onClickLogin(this.state.email, this.state.password);
            // If isLogin = true
            this.props.navigation.navigate(ScreenName.HomeScreen);
            // else do nothing
        }
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.mainColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        width: Common.window.width - 30,
        backgroundColor: 'white',
        marginBottom: 20
    },
    loginButton: {
        backgroundColor: 'gray',
        width: Common.window.width - 30,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const mapStateToProps = state => {
    return {
        isLogin: state.LoginReducer.isLogin
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickLogin: (email, password) => {
            dispatch(login(email, password))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

