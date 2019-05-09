import {
	SHIPPING_ADDRESS_FORM_UPDATE, 
	RESET_LOCATION, RESET_STATE, 
	UPDATE_LONGITUDE_LATITUDE,
	UPDATE_ADDRESS_QUERY,
} from './types';

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
