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
	REMOVE_CHECKOUT_FAIL,
	START_UPDATE_SHIPPING_NAME,
	UPDATE_CHECKOUT_SHIPPING_NAME_SUCCESS,
	UPDATE_CHECKOUT_SHIPPING_NAME_FAIL,
	START_MIDTRANS_PAY,
	MIDTRANS_PAY_SUCCESS,
	MIDTRANS_PAY_FAIL
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
		return new Promise((resolve) => {
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
					resolve();
				})
				.catch((error) => {
					dispatch({ type: UPDATE_CHECKOUT_RESTO_SHIPPING_ADDRESS_FAIL });
					console.log(`Error updating resto shipping address --> ${error}`);
				});
			});
	};
};

export const updateCheckoutShippingMethod = (shipping_name, cost, id_checkout) => {
	return (dispatch) => {
		return new Promise((resolve) => {
			dispatch({ type: START_UPDATE_SHIPPING_NAME });
			axios.request({
				url: 'http://localhost:8080/cart/update-shipping-name',
				method: 'post',
				params: {
					shipping_name: shipping_name,
					cost: cost,
					id_checkout: id_checkout
				}
			})
				.then((response) => {
					dispatch({ type: UPDATE_CHECKOUT_SHIPPING_NAME_SUCCESS });
					console.log(`Update checkout resto shipping address success! --> ${response}`);
					resolve();
				})
				.catch((error) => {
					dispatch({ type: UPDATE_CHECKOUT_SHIPPING_NAME_FAIL });
					console.log(`Error updating resto shipping address --> ${error}`);
				});
			});
	};
};

export const updateQuantityCheckoutItem = (idCheckoutItem, quantity) => {
	return (dispatch) => {
		return new Promise((resolve) => {
			dispatch({ type: START_UPDATE_QUANTITY_ITEM });
			axios.request({
				url: `http://localhost:8080/cart/update-qty/${idCheckoutItem}/${quantity}`,
				method: 'get'
			})
				.then((response) => {
					dispatch({ type: UPDATE_QUANTITY_ITEM_SUCCESS });
					console.log(`Update quantity success! --> ${response}`);
					resolve();
				})
				.catch((error) => {
					dispatch({ type: UPDATE_QUANTITY_ITEM_FAILED });
					console.log(error);
				});
			});
	};
};

export const addCheckout = (idProduct, quantity) => {
	return (dispatch) => {
		return new Promise((resolve) => {
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
					resolve();
				})
				.catch((error) => {
					dispatch({ type: ADD_TO_CART_FAIL });
					console.log(error);
				});
			});
	};
};

export const removeCheckout = (checkout) => {
	return (dispatch) => {
		return new Promise((resolve) => {
			dispatch({ type: START_REMOVE_CHECKOUT });
			axios.request({ 
				url: `http://localhost:8080/cart/del-checkout-${checkout}`,
				method: 'get'
			})
				.then((response) => {
					dispatch({ type: REMOVE_CHECKOUT_SUCCESS });
					console.log(`Checkout removed! --> ${response}`);
					resolve();
				})
				.catch((error) => {
					dispatch({ type: REMOVE_CHECKOUT_FAIL });
					console.log(error);
				});
			});
	};
};

export const payMidtransSingle = (checkout) => {
	return (dispatch) => {
		dispatch({ type: START_MIDTRANS_PAY });
		axios.request({
			url: `http://localhost:8080/pay/midtrans-single-${checkout}`,
			method: 'get'
		}).then((response) => {
			dispatch({ type: MIDTRANS_PAY_SUCCESS });
			NavigationService.navigate('PaymentWebViewScreen', { url: response.data.data.redirectUrl });
		}).catch((response) => {
			dispatch({ type: MIDTRANS_PAY_FAIL });
			console.log(response);
		});
	};
};
