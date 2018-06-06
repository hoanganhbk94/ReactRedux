import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Colors from "../../common/Colors";
import {login} from "../../actions/AppActions";
import {connect} from 'react-redux';

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
                <TextInput/>
                <TextInput/>
                <TouchableOpacity onPress={this.onClickLogin}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }

    onClickLogin = () => {
        this.props.onClickLogin(this.state.email, this.state.password);
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.mainColor,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const mapStateToProps = state => {
    return {
        email: state.email,
        password: state.password
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

