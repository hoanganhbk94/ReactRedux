import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList
} from 'react-native';
import {connect} from 'react-redux';
import {getAllUsers, logout} from "../../actions/AppActions";

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        };
        this.fetchDataFromServer();
    }

    render() {
        return(
            <View style={styles.container}>
                <FlatList
                    style={{flex: 1}}
                    data={this.props.users}
                    renderItem={({item}) => <Text>{item.name}</Text>}
                />
            </View>
        );
    }

    fetchDataFromServer() {
        this.props.fetchUserData();
    }
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
        users: state.HomeReducer.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserData: () => {
            dispatch(getAllUsers());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
