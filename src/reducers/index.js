import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ShippingAddressFormReducer from './ShippingAddressFormReducer';
import OrdersReducer from './OrdersReducer';
import ReviewsReducer from './ReviewsReducer';
import HomeReducer from './HomeReducer';

export default combineReducers({
	auth: AuthReducer,
	shippingAddressForm: ShippingAddressFormReducer,
	orders: OrdersReducer,
	reviews: ReviewsReducer,
	home: HomeReducer,
});
