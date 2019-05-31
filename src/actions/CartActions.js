import axios from 'axios';
import { 
	START_FETCH_CHECKOUT, 
	FETCH_CHECKOUT_SUCCESS, 
	FETCH_CHECKOUT_FAIL 
} from './types';

export const fetchCheckout = () => {
	return (dispatch) => {
		dispatch({ type: START_FETCH_CHECKOUT });
		axios.request({ 
			url: 'http://localhost:8080/cart/list',
			method: 'get'
		})
			.then((response) => {
				dispatch({ type: FETCH_CHECKOUT_SUCCESS, payload: response });
			})
			.catch((error) => {
				dispatch({ type: FETCH_CHECKOUT_FAIL });
				console.log(error);
			});
	};
};
