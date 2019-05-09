import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import OrderDetailsListItem from './OrderDetailsListItem';

class OrderDetailsList extends Component {
	renderRow(item) {
		return <OrderDetailsListItem item={item.item} />;
	}

	render() {
		return (
			<View>
				<FlatList 
					data={this.props.order.items}
					renderItem={this.renderRow}
					keyExtractor={(item) => item.id.toString()}
				/>
			</View>
		);
	}
}

export default OrderDetailsList;
