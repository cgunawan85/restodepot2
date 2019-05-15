import axios from 'axios';

import {
	START_FETCH_HOME,
	FETCH_HOME_SUCCESS,
} from './types';

export const fetchHome = () => {
	return (dispatch) => {
		dispatch({ type: START_FETCH_HOME });
		axios.get('http://localhost:8080/home')
			.then((response) => {
				dispatch({ type: FETCH_HOME_SUCCESS, payload: response });
			})
			.catch((error) => {
				console.log(error);
			});
	};
};
