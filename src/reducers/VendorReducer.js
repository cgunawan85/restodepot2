import {
	START_FETCH_VENDOR,
	FETCH_VENDOR_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
	vendor: {},
	products: [],
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case START_FETCH_VENDOR:
			return { ...INITIAL_STATE, loading: true };
		case FETCH_VENDOR_SUCCESS:
			return { 
				...state, 
				vendor: action.payload.data.data.vendor,
				products: action.payload.data.data.products, 
				loading: false 
			};
		default:
			return state;
	}
};
