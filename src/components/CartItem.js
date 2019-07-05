import React, { Component } from 'react';
import { View } from 'react-native';
import { 
	Text, 
	Button,
	Card, 
	CardItem, 
	Left, 
	CheckBox, 
	Icon
} from 'native-base';
import ShippingAddressPicker from './ShippingAddressPicker';
// import ShippingMethodPicker from './ShippingMethodPicker';
import CartItemProductList from './CartItemProductList';
import CartLineItem from './CartLineItem';
import { withNavigation } from 'react-navigation';

class CartItem extends Component {
	renderNoShippingMethodAlert() {
		const { deliveryAlertTextStyle } = styles;
		return (
			<View style={{ flex: 1, backgroundColor: 'red' }}>
				<Text style={deliveryAlertTextStyle}>Please choose a delivery method!</Text>
			</View>
		);
	}

	renderCheckmark() {
		if (this.props.checkout.checkout.shipping_name !== null) {
			return (
				<Icon name='ios-checkmark' style={{ fontSize: 28 }} />
			);
		}
	}

	renderShippingMethodChooseButton() {
		const { checkout, dataPrice } = this.props.checkout;
		const { shippingAddressAlertTextStyle } = styles;

		if (checkout.id_resto_shipping_address !== 0) {
			return (
				<Button
					success={checkout.shipping_name !== null ? true : false}
					block
					onPress={() => this.props.navigation.navigate(
						'ChooseShippingScreen', 
						{ shippingMethods: dataPrice, idCheckout: checkout.id_checkout }
					)}
				>
					{this.renderCheckmark()}
					<Text>Choose Shipping Method</Text>
				</Button>
			);
		}
		return (
			<View style={{ backgroundColor: 'yellow' }}>
				<Text style={shippingAddressAlertTextStyle}>Please choose a shipping adddress</Text>
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
				{this.renderShippingMethodChooseButton()}
				{/*
				<ShippingMethodPicker 
					checkout={checkout} 
					shippingData={dataPrice} 
					onUpdateCheckoutWithShippingMethod={onUpdateCheckoutWithShippingMethod}
				/>
				*/}
			</Card>
		);
	}
}

const styles = {
	shippingAddressAlertTextStyle: {
		textAlign: 'center', 
		fontSize: 12, 
		paddingVertical: 5
	},
	deliveryAlertTextStyle: {
		color: 'white',
		fontSize: 14,
		textAlign: 'center',
		paddingVertical: 10
	}
};

export default withNavigation(CartItem);
