import {
	START_FETCH_VENDOR,
	FETCH_VENDOR_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
	vendor: {},
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case START_FETCH_VENDOR:
			return { ...state, loading: true };
		case FETCH_VENDOR_SUCCESS:
			return { ...state, vendor: action.payload, loading: false };
		default:
			return state;
	}
};
