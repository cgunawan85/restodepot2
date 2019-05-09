import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import OrderListItem from './OrderListItem';
	
class OrderList extends Component {
	renderOrderListItem(order) {
		return <OrderListItem order={order.item} />;
	}

	render() {
		return (
			<View>
				<FlatList 
					data={this.props.orders}
					renderItem={this.renderOrderListItem}
					keyExtractor={(order) => order.id.toString()}
				/>
			</View>
		);
	}
}

export default OrderList;
