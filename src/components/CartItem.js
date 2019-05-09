import React, { Component } from 'react';
import { 
	Text, 
	Card, 
	CardItem, 
	Left, 
	CheckBox, 
} from 'native-base';
import CartItemProduct from './CartItemProduct';
import ShippingAddressPicker from './ShippingAddressPicker';
import ShippingMethodPicker from './ShippingMethodPicker';


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
						PT. Karacoco
					</Text>
				</CardItem>
				{/* FlatList should go here to render CartItemProduct */}
				<CartItemProduct />
				<CartItemProduct />
				<ShippingAddressPicker />
				<ShippingMethodPicker />
			</Card>
		);
	}
}

export default CartItem;
