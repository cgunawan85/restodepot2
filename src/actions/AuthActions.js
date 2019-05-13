import { Toast } from 'native-base';
import firebase from 'firebase/app';
import axios from 'axios';
import { 
	FIRST_NAME_CHANGED,
	LAST_NAME_CHANGED,
	EMAIL_CHANGED, 
	PASSWORD_CHANGED,
	FORGET_EMAIL_CHANGED, 
	LOGIN_USER, 
	LOGIN_USER_SUCCESS, 
	LOGIN_USER_FAIL,
	LOGOUT_SUCCESS,
	REGISTER_USER,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_FAIL,
	RESET_PASSWORD_EMAIL_SENT
} from './types';
import NavigationService from '../services/NavigationService';
import deviceStorage from '../services/deviceStorage';

require('firebase/auth');

function renderMessage(message) {
	return Toast.show({
		text: message,
		duration: 3000,
		buttonText: 'Got it!'
	});
}

export const firstNameChanged = (text) => {
	return {
		type: FIRST_NAME_CHANGED,
		payload: text
	};
};

export const lastNameChanged = (text) => {
	return {
		type: LAST_NAME_CHANGED,
		payload: text
	};
};

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const forgetEmailChanged = (text) => {
	return {
		type: FORGET_EMAIL_CHANGED,
		payload: text
	};
};

/*
export const loginUser = ({ email, password }) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER });
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(user => {
				dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
				NavigationService.navigate('Main');
			})
			.catch((error) => {
				renderErrorMessage(error.message);
				dispatch({ type: LOGIN_USER_FAIL });
		});
	};
};
*/

export const loginUser = ({ email, password }) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER });
		axios.post('https://restodepot.id/api/auth/signin', { username: email, password: password })
			.then((response) => {
				console.log(response);
				deviceStorage.saveItem('id_token', response.data.token);
				dispatch({ type: LOGIN_USER_SUCCESS, payload: response });
				NavigationService.navigate('Home');
			})
			.catch((error) => {
				renderMessage(error.response.data.error);
				dispatch({ type: LOGIN_USER_FAIL });
			});
	};
};

/*
export const registerUser = ({ email, password }) => {
	return (dispatch) => {
		dispatch({ type: REGISTER_USER });
		firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(user => { 
			renderMessage('Please check your email for an account verification link!');
			dispatch({ type: REGISTER_USER_SUCCESS, payload: user });
			NavigationService.navigate('Main');
		})
		.catch((error) => {
			renderMessage(error.message);
			dispatch({ type: REGISTER_USER_FAIL });
		});
	};
};
*/

export const registerUser = ({ firstName, lastName, email, password }) => {
	return (dispatch) => {
		dispatch({ type: REGISTER_USER });
		// passing params in as 2nd argument of post() does not work ???
		axios.post(`https://restodepot.id/api/auth/register?firstname=${firstName}&lastname=${lastName}&email=${email}&password=${password}`)
		.then((user) => {
			console.log(user);
			dispatch({ type: REGISTER_USER_SUCCESS });
			NavigationService.navigate('LoginScreen');
			renderMessage('Please check your email for an account verification link!');
		})
		.catch((error) => {
			renderMessage(error.response.data.error);
			dispatch({ type: REGISTER_USER_FAIL });
		});
	};
};

export const resetPasswordEmailSend = ({ email }) => {
	return (dispatch) => {
		axios.post(`https://restodepot.id/api/auth/password-reset-send?email=${email}`)
			.then((response) => {
				dispatch({ type: RESET_PASSWORD_EMAIL_SENT, payload: response });
				renderMessage(response.message);
			})
			.catch((error) => {
				renderMessage(error.response.data.error);
			});
	};
};

export const signOut = () => {
	return (dispatch) => {
		dispatch({ type: LOGOUT_SUCCESS });
		deviceStorage.removeJWT();
		NavigationService.navigate('AuthStack');
	};
};
