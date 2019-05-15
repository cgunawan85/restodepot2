import axios from 'axios';
import { Toast } from 'native-base';
import {
	ADD_REVIEW_FORM_UPDATE, 
	RESET_REVIEW_FORM,
	START_FETCH_PRODUCT_REVIEWS,
	FETCH_PRODUCT_REVIEWS_SUCCESS,
	FETCH_PRODUCT_REVIEWS_FAIL,
	START_CREATE_PRODUCT_REVIEW,
	CREATE_PRODUCT_REVIEW_SUCCESS,
	CREATE_PRODUCT_REVIEW_FAIL
} from './types';
import NavigationService from '../services/NavigationService';

function renderMessage(message) {
	return Toast.show({
		text: message,
		duration: 3000,
		buttonText: 'Got it!'
	});
}

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

export const fetchProductReviews = (id_product) => {
	return (dispatch) => {
		dispatch({ type: START_FETCH_PRODUCT_REVIEWS });
		axios.request({
			url: 'http://localhost:8080/product_reviews',
			params: {
				id_product: id_product
			}
		})
		.then((response) => {
			dispatch({ type: FETCH_PRODUCT_REVIEWS_SUCCESS, payload: response });
		})
		.catch((error) => {
			dispatch({ type: FETCH_PRODUCT_REVIEWS_FAIL });
			console.log(error);
		});
	}; 
};

export const createProductReview = ({ id_product, id_resto, comments, rating }) => {
	return (dispatch) => {
		dispatch({ type: START_CREATE_PRODUCT_REVIEW });
		axios.request({
			url: 'http://localhost:8080/product_review/create',
			method: 'post',
			params: {
				id_product: id_product,
				id_resto: id_resto,
				comments: comments,
				rating: rating
			}
		})
		.then((response) => {
			dispatch({ type: CREATE_PRODUCT_REVIEW_SUCCESS, payload: response });
			renderMessage(response.data.message);
			NavigationService.navigate('ProductDetailScreen');
		})
		.catch((error) => {
			console.log(error.response);
			renderMessage('Sorry! An error occured, please try again');
			dispatch({ type: CREATE_PRODUCT_REVIEW_FAIL });
		});
	};
};
