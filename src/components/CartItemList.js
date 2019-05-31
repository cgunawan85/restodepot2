import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import CartItem from './CartItem';

class CartItemList extends Component {
	renderCartItem(item) {
		return <CartItem checkout={item} />;
	}

	render() {
		return (
			<View>
				<FlatList 
					data={this.props.checkoutList}
					renderItem={({ item }) => this.renderCartItem(item)}
					keyExtractor={(checkout) => checkout.id_checkout.toString()}
					style={{ paddingBottom: 10 }}
				/>
			</View>
		);
	}
}

export default CartItemList;
