import {
	SHIPPING_ADDRESS_FORM_UPDATE, 
	RESET_LOCATION, RESET_STATE, 
	UPDATE_LONGITUDE_LATITUDE,
	UPDATE_ADDRESS_QUERY,
	EMPLOYEES_FETCH_SUCCESS
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

export const resetState = () => {
	return {
		type: RESET_STATE
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
		axios.get('https://api.restodepot.id/shipping_addresses', {
			params: { 
				id_resto: 87
			},
			headers: {
				Authorization: `Bearer ${token}`
			} 
		})
		.then((response) => {
			dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: response.data });
		})
		.catch((error) => console.log(error));
	};
};
