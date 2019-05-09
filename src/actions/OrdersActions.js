import {
	SHOW_THANK_YOU_MODAL, 
	HIDE_THANK_YOU_MODAL
} from './types';

export const showThankYouModal = () => {
	return {
		type: SHOW_THANK_YOU_MODAL
	};
};

export const hideThankYouModal = () => {
	return {
		type: HIDE_THANK_YOU_MODAL
	};
};
