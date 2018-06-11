import {AsyncStorage} from 'react-native';
import Log from "../utils/Log";

export async function saveItemWithKey(key, value) {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        Log.error(error);
    }
}

export async function getItemWithKey(key) {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
    } catch (error) {
        Log.error(error);
    }
}

export async function removeItemWithKey(key) {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        Log.error(error);
    }
}