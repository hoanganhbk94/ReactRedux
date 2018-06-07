import {
    Alert
} from 'react-native';

export default class AlertManager {
    static showAlert(title, message) {
        Alert.alert(title, message, { cancelable: false });
    }
}