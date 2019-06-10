import axios from 'axios';
import { 
	START_FETCH_CHECKOUT, 
	FETCH_CHECKOUT_SUCCESS, 
	FETCH_CHECKOUT_FAIL,
	START_UPDATE_CHECKOUT_RESTO_SHIPPING_ADDRESS,
	UPDATE_CHECKOUT_RESTO_SHIPPING_ADDRESS_SUCCESS,
	UPDATE_CHECKOUT_RESTO_SHIPPING_ADDRESS_FAIL 
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

export const updateCheckoutRestoShippingAddress = (id_resto_shipping_address, id_checkout) => {
	return (dispatch) => {
		dispatch({ type: START_UPDATE_CHECKOUT_RESTO_SHIPPING_ADDRESS });
		axios.request({
			url: 'http://localhost:8080/cart/update-shipping-address',
			method: 'post',
			params: {
				id_resto_shipping_address: id_resto_shipping_address,
				id_checkout: id_checkout
			}
		})
			.then((response) => {
				dispatch({ type: UPDATE_CHECKOUT_RESTO_SHIPPING_ADDRESS_SUCCESS });
				console.log(`Update checkout resto shipping address success! --> ${response}`);
			})
			.catch((error) => {
				dispatch({ type: UPDATE_CHECKOUT_RESTO_SHIPPING_ADDRESS_FAIL });
				console.log(`Error updating resto shipping address --> ${error}`);
			});
	};
};
