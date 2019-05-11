import axios from 'axios';

import {
	START_FETCH_HOME,
	FETCH_HOME_SUCCESS
} from './types';

export const fetchHome = (token) => {
	return (dispatch) => {
		dispatch({ type: START_FETCH_HOME });
		axios.get('https://restodepot.id/api/home', {
			headers: { Authorization: `Bearer ${token}` }
		})
			.then((response) => {
				dispatch({ type: FETCH_HOME_SUCCESS, payload: response });
		})
			.catch((error) => console.log(error));
	};
};
