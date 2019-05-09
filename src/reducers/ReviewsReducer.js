import { ADD_REVIEW_FORM_UPDATE, RESET_REVIEW_FORM } from '../actions/types';

const INITIAL_STATE = {
	rating: 2.5,
	review: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_REVIEW_FORM_UPDATE:
			return { ...state, [action.payload.prop]: action.payload.value };
		case RESET_REVIEW_FORM:
			return { ...INITIAL_STATE };
		default:
			return state;
	}
};
