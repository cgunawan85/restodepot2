// auth types

export const FIRST_NAME_CHANGED = 'first_name_changed';
export const LAST_NAME_CHANGED = 'last_name_changed';
export const EMAIL_CHANGED = 'email_changed';
export const PASSWORD_CHANGED = 'password_changed';
export const FORGET_EMAIL_CHANGED = 'forget_email_changed';
export const LOGIN_USER = 'login_user';
export const LOGIN_USER_SUCCESS = 'login_user_success';
export const LOGIN_USER_FAIL = 'login_user_fail';
export const LOGOUT_SUCCESS = 'logout_success';
export const REGISTER_USER = 'register_user';
export const REGISTER_USER_SUCCESS = 'register_user_success';
export const REGISTER_USER_FAIL = 'register_user_fail';
export const LOAD_JWT = 'load_jwt';
export const REMOVE_JWT = 'remove_jwt';
export const RESET_PASSWORD_EMAIL_SENT = 'reset_password_email_sent';

// shipping address actions

export const SHIPPING_ADDRESS_FORM_UPDATE = 'shipping_address_form_update';
export const RESET_LOCATION = 'reset_location';
export const RESET_FORM = 'reset_form';
export const UPDATE_LONGITUDE_LATITUDE = 'update_longitude_latitude';
export const UPDATE_ADDRESS_QUERY = 'update_address_query';
export const FETCH_SHIPPING_ADDRESSES = 'fetch_shipping_address';
export const FETCH_SHIPPING_ADDRESSES_SUCCESS = 'fetch_shipping_address_success';
export const FETCH_SHIPPING_ADDRESS_FAIL = 'fetch_shipping_address_fail';
export const LOAD_SHIPPING_ADDRESS_FORM = 'load_shipping_address_form';
export const ADD_SHIPPING_ADDRESS = 'add_shipping_address';
export const ADD_SHIPPING_ADDRESS_SUCCESS = 'add_shipping_address_success';
export const ADD_SHIPPING_ADDRESS_FAIL = 'add_shipping_address_fail';
export const DELETE_SHIPPING_ADDRESS = 'delete_shipping_address';
export const DELETE_SHIPPING_ADDRESS_SUCCESS = 'delete_shipping_address_success';
export const DELETE_SHIPPING_ADDRESS_FAIL = 'delete_shipping_address_fail';
export const UPDATE_SHIPPING_ADDRESS = 'update_shipping_address';
export const UPDATE_SHIPPING_ADDRESS_SUCCESS = 'update_shipping_address_success';
export const UPDATE_SHIPPING_ADDRESS_FAIL = 'update_shipping_address_fail';

// orders actions

export const SHOW_THANK_YOU_MODAL = 'show_thank_you_modal';
export const HIDE_THANK_YOU_MODAL = 'hide_thank_you_modal';
export const START_FETCH_ORDERS = 'start_fetch_orders';
export const FETCH_ORDERS_SUCCESS = 'fetch_orders_success';
export const FETCH_ORDERS_FAIL = 'fetch_orders_fail';

// reviews actions

export const ADD_REVIEW_FORM_UPDATE = 'add_review_form_udpate';
export const RESET_REVIEW_FORM = 'reset_review_form';
export const START_FETCH_PRODUCT_REVIEWS = 'start_fetch_product_reviews';
export const FETCH_PRODUCT_REVIEWS_SUCCESS = 'fetch_product_reviews_success';
export const FETCH_PRODUCT_REVIEWS_FAIL = 'fetch_product_reviews_fail';
export const START_CREATE_PRODUCT_REVIEW = 'start_create_product_review';
export const CREATE_PRODUCT_REVIEW_SUCCESS = 'create_product_review_success';
export const CREATE_PRODUCT_REVIEW_FAIL = 'create_product_review_fail';

// home actions

export const START_FETCH_HOME = 'start_fetch_home';
export const FETCH_HOME_SUCCESS = 'fetch_home_success';

// vendor actions
export const START_FETCH_VENDOR = 'start_fetch_vendor';
export const FETCH_VENDOR_SUCCESS = 'fetch_vendor_success';
