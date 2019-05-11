import {
	SHIPPING_ADDRESS_FORM_UPDATE, 
	RESET_LOCATION, 
	RESET_FORM, 
	UPDATE_LONGITUDE_LATITUDE,
	UPDATE_ADDRESS_QUERY,
	FETCH_SHIPPING_ADDRESSES,
	FETCH_SHIPPING_ADDRESSES_SUCCESS,
	FETCH_SHIPPING_ADDRESS_FAIL,
	LOAD_SHIPPING_ADDRESS_FORM
} from './types';

const axios = require('axios');

export const shippingAddressFormUpdate = ({ prop, value }) => {
	return {
		type: SHIPPING_ADDRESS_FORM_UPDATE,
		payload: { prop, value }
	};
};

export const updateLongitudeAndLatitude = ({ longitude, latitude }) => {
	return {
		type: UPDATE_LONGITUDE_LATITUDE,
		payload: { longitude, latitude }
	};
};

export const resetLocation = () => {
	return {
		type: RESET_LOCATION
	};
};

export const resetForm = () => {
	return {
		type: RESET_FORM
	};
};

export const updateAddressQuery = (text) => {
	return {
		type: UPDATE_ADDRESS_QUERY,
		payload: text
	};
};

// need to pass the id resto into fetch
export const shippingAddressesFetch = (token) => {
	return function (dispatch) {
		dispatch({ type: FETCH_SHIPPING_ADDRESSES });
		axios.get('http://localhost:8080/shipping_addresses', {
			params: { 
				id_resto: 87
			},
			headers: {
				Authorization: `Bearer ${token}`
			} 
		})
		.then((response) => {
			dispatch({ type: FETCH_SHIPPING_ADDRESSES_SUCCESS, payload: response });
		})
		.catch((error) => {
			console.log(error);
			dispatch({ type: FETCH_SHIPPING_ADDRESS_FAIL });
		});
	};
};

export const loadShippingAddressForm = (shippingAddress) => {
	return {
		type: LOAD_SHIPPING_ADDRESS_FORM,
		payload: shippingAddress
	};
};

//create action creator for creating shipping address
//create action creator for updating shipping address
//create action creator for deleting shipping address
