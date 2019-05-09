import { AsyncStorage } from 'react-native';
import { LOAD_JWT, REMOVE_JWT } from '../actions/types';
import store from '../store';

const deviceStorage = {
	async saveItem(key, value) {
		try {
			await AsyncStorage.setItem(key, value);
		} catch (error) {
			console.log(`AsyncStorage Error: ${error.message}`);
		}
	},

	async loadJWT() {
		try {
			const value = await AsyncStorage.getItem('id_token');
			if (value !== null) {
				store.dispatch({ type: LOAD_JWT, payload: value });
			} else {
				console.log('No JWT in this device');
			}
		} catch (error) {
			console.log(`AsyncStorage Error: ${error.message}`);
		}
	},

	async removeJWT() {
		try {
			await AsyncStorage.removeItem('id_token').then(() => store.dispatch({ type: REMOVE_JWT }));
		} catch (error) {
			console.log(`AsyncStorage Error: ${error.message}`);
		}
	},
};

export default deviceStorage;
