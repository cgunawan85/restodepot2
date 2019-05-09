import { 
	SHIPPING_ADDRESS_FORM_UPDATE, 
	RESET_LOCATION, 
	RESET_STATE, 
	UPDATE_LONGITUDE_LATITUDE,
	UPDATE_ADDRESS_QUERY,
	EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
	title: '',
	address: '',
	province: '',
	city: '',
	postal_code: '',
	pic: '',
	pic_phone_number: '',
	error: '',
	latitude: null,
	longitude: null,
	address_query: '',
	shipping_addresses: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMPLOYEES_FETCH_SUCCESS:
			return { ...state, shipping_addresses: action.payload };
		case SHIPPING_ADDRESS_FORM_UPDATE:
			return { ...state, [action.payload.prop]: action.payload.value };
		case UPDATE_LONGITUDE_LATITUDE:
			return { ...state, latitude: action.payload.latitude, longitude: action.payload.longitude };
		case RESET_LOCATION:
			return { ...state, latitude: null, longitude: null };
		case RESET_STATE:
			return INITIAL_STATE;
		case UPDATE_ADDRESS_QUERY:
			return { ...state, address_query: action.payload };
		default:
			return state;
	}
};
