import axios from 'axios';

import {
	START_FETCH_HOME,
	FETCH_HOME_SUCCESS,
	START_FETCH_PRODUCT_SUGGESTIONS,
	FETCH_PRODUCT_SUGGESTIONS_SUCCESS,
	FETCH_PRODUCT_SUGGESTIONS_FAIL
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

export const fetchProductSuggestions = (text) => {
	return (dispatch) => {
		dispatch({ type: START_FETCH_PRODUCT_SUGGESTIONS });
		axios.request({
			url: 'http://localhost:8080/search',
			method: 'get',
			params: {
				keyword: text,
				limit: 8
			}
		})
		.then((response) => {
			console.log(response);
			dispatch({ type: FETCH_PRODUCT_SUGGESTIONS_SUCCESS, payload: response });
		})
		.catch((error) => {
			console.log(error);
			dispatch({ type: FETCH_PRODUCT_SUGGESTIONS_FAIL });
		});
	};
};
