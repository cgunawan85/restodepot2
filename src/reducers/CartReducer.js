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
		case START_UPDATE_QUANTITY_ITEM:
			return { ...state, loading: true };
		case UPDATE_QUANTITY_ITEM_SUCCESS:
			return { ...state, loading: false };
		case UPDATE_QUANTITY_ITEM_FAILED:
			return { ...state, loading: false };
		case START_ADD_TO_CART:
			return { ...state, loading: true };
		case ADD_TO_CART_SUCCESS:
			return { ...state, loading: false };
		case ADD_TO_CART_FAIL:
			return { ...state, loading: false };
		case START_REMOVE_CHECKOUT:
			return { ...state, loading: true };
		case REMOVE_CHECKOUT_SUCCESS:
			return { ...state, loading: false };
		case REMOVE_CHECKOUT_FAIL:
			return { ...state, loading: false };
		default:
			return state;
	}
};
