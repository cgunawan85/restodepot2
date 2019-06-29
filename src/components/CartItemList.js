import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import CartItem from './CartItem';

class CartItemList extends Component {
	renderCartItem(item) {
		const { 
			checked, 
			addOrRemoveFromChecked, 
			onUpdateCheckoutWithRestoShippingAddress,
			onUpdateQuantityItem,
			onUpdateCheckoutWithShippingMethod 
		} = this.props;

		return (
			<CartItem 
				checked={checked} 
				checkout={item} 
				addOrRemoveFromChecked={addOrRemoveFromChecked}
				onUpdateCheckoutWithRestoShippingAddress={onUpdateCheckoutWithRestoShippingAddress}
				onUpdateQuantityItem={onUpdateQuantityItem}
				onUpdateCheckoutWithShippingMethod={onUpdateCheckoutWithShippingMethod}
			/>
		);
	}

	render() {
		return (
			<View>
				<FlatList 
					data={this.props.checkoutList}
					renderItem={({ item }) => this.renderCartItem(item)}
					keyExtractor={(item, index) => index.toString()}
					style={{ paddingBottom: 10 }}
				/>
			</View>
		);
	}
}

export default CartItemList;
