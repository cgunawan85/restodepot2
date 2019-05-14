import axios from 'axios';

import {
	START_FETCH_VENDOR,
	FETCH_VENDOR_SUCCESS
} from './types';

export const fetchVendor = (vendorId) => {
	return (dispatch) => {
		dispatch({ type: START_FETCH_VENDOR });
		axios.request({
			url: 'http://localhost:8080/vendor',
			type: 'get',
			params: {
				id_vendor: 40
			}
		})
			.then((response) => {
				dispatch({ type: FETCH_VENDOR_SUCCESS, payload: response });
			})
			.catch((error) => console.log(error));
	};
};
