import { Toast } from 'native-base';
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
import { baseURL } from '../services/constants';

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

export const loginUser = ({ email, password }) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER });
		axios.post(`${baseURL}auth/signin`, { username: email, password: password })
			.then((response) => {
				console.log(response);
				deviceStorage.saveItem('id_token', response.data.token);
				deviceStorage.saveItem('id_user', response.data.user.id.toString());
				dispatch({ type: LOGIN_USER_SUCCESS, payload: response });
				NavigationService.navigate('Home');
			})
			.catch((error) => {
				renderMessage(error.response.data.error);
				dispatch({ type: LOGIN_USER_FAIL });
			});
	};
};

export const registerUser = ({ firstName, lastName, email, password }) => {
	return (dispatch) => {
		dispatch({ type: REGISTER_USER });
		// passing params in as 2nd argument of post() does not work ???
		axios.post(`${baseURL}auth/register?firstname=${firstName}&lastname=${lastName}&email=${email}&password=${password}`)
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
		axios.request({
			url: `${baseURL}auth/password-reset-send`,
			method: 'post',
			params: {
				email: email
			}
		})
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
		deviceStorage.removeUserId();
		NavigationService.navigate('AuthStack');
	};
};
