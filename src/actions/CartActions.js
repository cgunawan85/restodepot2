import axios from 'axios';
import { 
	START_FETCH_CHECKOUT, 
	FETCH_CHECKOUT_SUCCESS, 
	FETCH_CHECKOUT_FAIL,
	START_UPDATE_CHECKOUT_RESTO_SHIPPING_ADDRESS,
	UPDATE_CHECKOUT_RESTO_SHIPPING_ADDRESS_SUCCESS,
	UPDATE_CHECKOUT_RESTO_SHIPPING_ADDRESS_FAIL,
	START_UPDATE_QUANTITY_ITEM,
	UPDATE_QUANTITY_ITEM_SUCCESS,
	UPDATE_QUANTITY_ITEM_FAILED,
	START_ADD_TO_CART,
	ADD_TO_CART_SUCCESS,
	ADD_TO_CART_FAIL,
	START_REMOVE_CHECKOUT,
	REMOVE_CHECKOUT_SUCCESS,
	REMOVE_CHECKOUT_FAIL
} from './types';
import NavigationService from '../services/NavigationService';

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

export const updateQuantityCheckoutItem = (idCheckoutItem, quantity) => {
	return (dispatch) => {
		dispatch({ type: START_UPDATE_QUANTITY_ITEM });
		axios.request({
			url: `http://localhost:8080/cart/update-qty/${idCheckoutItem}/${quantity}`,
			method: 'get'
		})
			.then((response) => {
				dispatch({ type: UPDATE_QUANTITY_ITEM_SUCCESS });
				console.log(`Update quantity success! --> ${response}`);
			})
			.catch((error) => {
				dispatch({ type: UPDATE_QUANTITY_ITEM_FAILED });
				console.log(error);
			});
	};
};

export const addCheckout = (idProduct, quantity) => {
	return (dispatch) => {
		dispatch({ type: START_ADD_TO_CART });
		axios.request({
			url: 'http://localhost:8080/cart/add-checkout',
			method: 'post',
			params: {
				productId: idProduct,
				qty: quantity
			}
		})
			.then((response) => {
				dispatch({ type: ADD_TO_CART_SUCCESS });
				NavigationService.navigate('Cart');
				console.log(`Add to cart success ---> ${response}`);
			})
			.catch((error) => {
				dispatch({ type: ADD_TO_CART_FAIL });
				console.log(error);
			});
	};
};

export const removeCheckout = (checkout) => {
	return (dispatch) => {
		dispatch({ type: START_REMOVE_CHECKOUT });
		axios.request({ 
			url: `http://localhost:8080/cart/del-checkout-${checkout}`,
			method: 'get'
		})
			.then((response) => {
				dispatch({ type: REMOVE_CHECKOUT_SUCCESS });
				console.log(`Checkout removed! --> ${response}`);
			})
			.catch((error) => {
				dispatch({ type: REMOVE_CHECKOUT_FAIL });
				console.log(error);
			});
	};
};
