import { 
	START_FETCH_CHECKOUT, 
	FETCH_CHECKOUT_SUCCESS, 
	FETCH_CHECKOUT_FAIL,
	START_UPDATE_CHECKOUT_RESTO_SHIPPING_ADDRESS,
	UPDATE_CHECKOUT_RESTO_SHIPPING_ADDRESS_SUCCESS,
	UPDATE_CHECKOUT_RESTO_SHIPPING_ADDRESS_FAIL
} from '../actions/types';

const INITIAL_STATE = {
	loading: false,
	checkout_list: [],
	shipping_addresses: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case START_FETCH_CHECKOUT:
			return { ...state, loading: true };
		case FETCH_CHECKOUT_SUCCESS:
			return { 
				...state, 
				loading: false, 
				checkout_list: action.payload.data.data.checkouts, 
				shipping_addresses: action.payload.data.data.shipping_addresses   
			};
		case FETCH_CHECKOUT_FAIL:
			return { ...state, loading: false };
		case START_UPDATE_CHECKOUT_RESTO_SHIPPING_ADDRESS:
			return { ...state, loading: true };
		case UPDATE_CHECKOUT_RESTO_SHIPPING_ADDRESS_SUCCESS:
			return { ...state, loading: false };
		case UPDATE_CHECKOUT_RESTO_SHIPPING_ADDRESS_FAIL:
			return { ...state, loading: false };
		default:
			return state;
	}
};
