import {
    createStackNavigator
} from 'react-navigation';
import LoginScreen from "../login/LoginScreen";
import HomeScreen from "../home/HomeScreen";

export class ScreenName {
    static LoginScreen = 'Login';
    static HomeScreen = 'Home';
}

const AppNavigator = createStackNavigator(
    {
        Login: { screen: LoginScreen },
        Home: { screen: HomeScreen },
    },
    {
        headerMode: 'none',
    }
);

export default AppNavigator;