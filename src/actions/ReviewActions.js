import {
	ADD_REVIEW_FORM_UPDATE, 
	RESET_REVIEW_FORM
} from './types';

export const addReviewFormUpdate = ({ prop, value }) => {
	return {
		type: ADD_REVIEW_FORM_UPDATE,
		payload: { prop, value }
	};
};

export const resetReviewForm = () => {
	return {
		type: RESET_REVIEW_FORM
	};
};
