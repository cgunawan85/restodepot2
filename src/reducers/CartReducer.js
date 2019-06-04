import { 
	START_FETCH_CHECKOUT, 
	FETCH_CHECKOUT_SUCCESS, 
	FETCH_CHECKOUT_FAIL 
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
			return { ...state, loading: false, checkout_list: action.payload.data.data };
		case FETCH_CHECKOUT_FAIL:
			return { ...state, loading: false };
		default:
			return state;
	}
};
