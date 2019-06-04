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
		const { checkout } = this.props;
		return (
			<Card>
				<CardItem header bordered>
					<Left>
						<CheckBox 
							checked={this.props.checked.includes(checkout.id_checkout)}
							onPress={() => this.props.addOrRemoveFromChecked(checkout.id_checkout)}
						/>
					</Left>
					<Text>
						{checkout.vendor.company_name}
					</Text>
				</CardItem>
				<CartItemProductList checkout={checkout} />
				<ShippingAddressPicker checkout={checkout} />
				<ShippingMethodPicker />
			</Card>
		);
	}
}

export default CartItem;
