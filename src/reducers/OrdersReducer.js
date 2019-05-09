import { 
	SHOW_THANK_YOU_MODAL, 
	HIDE_THANK_YOU_MODAL
} from '../actions/types';

const INITIAL_STATE = {
	modalVisible: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SHOW_THANK_YOU_MODAL:
			return { ...state, modalVisible: true };
		case HIDE_THANK_YOU_MODAL:
			return { ...state, modalVisible: false };
		default:
			return state;
	}
};
