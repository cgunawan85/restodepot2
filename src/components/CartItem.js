import React, { Component } from 'react';
import { View } from 'react-native';
import { 
	Text, 
	Card, 
	CardItem, 
	Left, 
	CheckBox, 
} from 'native-base';
import ShippingAddressPicker from './ShippingAddressPicker';
import ShippingMethodPicker from './ShippingMethodPicker';
import CartItemProductList from './CartItemProductList';
import CartLineItem from './CartLineItem';


class CartItem extends Component {
	renderNoShippingMethodAlert() {
		const { deliveryAlertTextStyle } = styles;
		return (
			<View style={{ flex: 1, backgroundColor: 'red' }}>
				<Text style={deliveryAlertTextStyle}>Please choose a delivery method!</Text>
			</View>
		);
	}
	render() {
		const { 
			onUpdateCheckoutWithRestoShippingAddress, 
			onUpdateQuantityItem, 
			onUpdateCheckoutWithShippingMethod 
		} = this.props;
		const { checkout, dataPrice } = this.props.checkout;
		
		return (
			<Card style={checkout.id_resto_shipping_address !== 0 && checkout.shipping_name !== null ? { borderColor: 'green' } : {}}>
				{/* Does this conditional style work? */}
				<CardItem header bordered style={{ backgroundColor: '#F3F9FF' }}>
					<Left>
						<CheckBox
							checked={this.props.checked.includes(checkout.id_checkout)}
							onPress={() => {
								this.props.addOrRemoveFromChecked(checkout.id_checkout);
							}}
						/>
					</Left>
					<Text>
						{checkout.vendor.company_name}
					</Text>
				</CardItem>
				<CartItemProductList 
					checkout={checkout} 
					onUpdateQuantityItem={onUpdateQuantityItem} 
				/>
				<CartLineItem 
					name='Shipping Price' 
					amount={checkout.shipping_cost} 
				/>
				<CartLineItem 
					name='Discount' 
					amount={checkout.discount_amount} 
					style={{ color: 'green' }} 
				/>
				<CartLineItem 
					name='Total Price' 
					amount={checkout.total_price} 
				/>
				<ShippingAddressPicker 
					checkout={checkout} 
					onUpdateCheckoutWithRestoShippingAddress={onUpdateCheckoutWithRestoShippingAddress}
				/>
				<ShippingMethodPicker 
					checkout={checkout} 
					shippingData={dataPrice} 
					onUpdateCheckoutWithShippingMethod={onUpdateCheckoutWithShippingMethod}
				/>
			</Card>
		);
	}
}

const styles = {
	deliveryAlertTextStyle: {
		color: 'white',
		fontSize: 14,
		textAlign: 'center',
		paddingVertical: 10
	}
};

export default CartItem;
