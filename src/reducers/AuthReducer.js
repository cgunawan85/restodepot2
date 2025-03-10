import { 
	FIRST_NAME_CHANGED,
	LAST_NAME_CHANGED,
	EMAIL_CHANGED, 
	PASSWORD_CHANGED,
	FORGET_EMAIL_CHANGED, 
	LOGIN_USER, 
	LOGIN_USER_SUCCESS, 
	LOGIN_USER_FAIL,
	LOGOUT_SUCCESS,
	REGISTER_USER,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_FAIL,
	LOAD_JWT,
	REMOVE_JWT,
	RESET_PASSWORD_EMAIL_SENT,
	LOAD_USER_ID, 
	REMOVE_USER_ID
} from '../actions/types';

const INITIAL_STATE = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	forget_email: '',
	user: {},
	user_id: '',
	jwt: null,
	error: '',
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FIRST_NAME_CHANGED:
			return { ...state, firstName: action.payload };
		case LAST_NAME_CHANGED:
			return { ...state, lastName: action.payload };
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case FORGET_EMAIL_CHANGED:
			return { ...state, forget_email: action.payload };
		case LOGIN_USER:
			return { ...state, loading: true };
		case LOGIN_USER_SUCCESS:
			return { 
				...INITIAL_STATE, 
				user: action.payload.data.user, 
				jwt: action.payload.data.token, 
				loading: false 
			};
		case LOGIN_USER_FAIL:
			return { ...state, password: '', loading: false };
		case LOGOUT_SUCCESS:
			return { ...INITIAL_STATE };
		case REGISTER_USER:
			return { ...state, loading: true };
		case REGISTER_USER_SUCCESS:
			return { ...INITIAL_STATE };
		case REGISTER_USER_FAIL:
			return { ...state, loading: false };
		case LOAD_JWT:
			return { ...state, jwt: action.payload };
		case REMOVE_JWT:
			return { ...state, jwt: null };
		case RESET_PASSWORD_EMAIL_SENT:
			return { ...INITIAL_STATE };
		case LOAD_USER_ID:
			return { ...state, user_id: action.payload };
		case REMOVE_USER_ID:
			return { ...state, user_id: '' };
		default:
			return state;
	}
};
