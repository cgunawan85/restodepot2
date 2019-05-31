import React, { Component } from 'react';
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


class CartItem extends Component {
	render() {
		return (
			<Card>
				<CardItem header bordered>
					<Left>
						<CheckBox 
							checked={this.props.checked} 
							onPress={() => this.props.toggleChecked()} 
						/>
					</Left>
					<Text>
						{this.props.checkout.vendor.company_name}
					</Text>
				</CardItem>
				<CartItemProductList checkout={this.props.checkout} />
				<ShippingAddressPicker />
				<ShippingMethodPicker />
			</Card>
		);
	}
}

export default CartItem;
