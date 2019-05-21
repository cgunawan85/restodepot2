import {
	START_FETCH_HOME,
	FETCH_HOME_SUCCESS,
	START_FETCH_PRODUCT_SUGGESTIONS,
	FETCH_PRODUCT_SUGGESTIONS_SUCCESS,
	FETCH_PRODUCT_SUGGESTIONS_FAIL
} from '../actions/types';

const INITIAL_STATE = {
	featured_vendors: [],
	best_sellers: [],
	best_deals: [],
	rd_approved: [],
	products: [],
	product_suggestions: [],
	loading: false,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case START_FETCH_HOME:
			return { ...state, loading: true };
		case FETCH_HOME_SUCCESS:
			return { 
				...state, 
				loading: false, 
				featured_vendors: action.payload.data.data.feature_vendor,
				best_sellers: action.payload.data.data.best_seller, 
				best_deals: action.payload.data.data.best_deals,
				rd_approved: action.payload.data.data.approved_product,
				products: action.payload.data.data.products
			};
		case START_FETCH_PRODUCT_SUGGESTIONS:
			return { ...state, loading: true };
		case FETCH_PRODUCT_SUGGESTIONS_SUCCESS:
			return { 
				...state, 
				loading: false, 
				product_suggestions: action.payload.data.data 
			};
		case FETCH_PRODUCT_SUGGESTIONS_FAIL:
			return { ...state, loading: false };
		default:
			return state;
	}
};
