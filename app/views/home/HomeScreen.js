import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    FlatList
} from 'react-native';
import {connect} from 'react-redux';
import {getAllUsers} from "../../actions/AppActions";
import ProgressHUD from "../hud/ProgressHUD";
import UserItemView from "./UserItemView";

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.fetchDataFromServer();
    }

    render() {
        return(
            <View style={styles.container}>
                <FlatList
                    style={{flex: 1}}
                    data={this.props.users}
                    keyExtractor={(item, index) => item.id.toString()}
                    renderItem={({item}) => <UserItemView item={item}/>}
                />
                { this.props.showProgress && <ProgressHUD/> }
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
        users: state.HomeReducer.users,
        showProgress: state.HomeReducer.showProgress
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
