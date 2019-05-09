import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import ShippingAddressItem from './ShippingAddressItem';
import { shippingAddresses } from '../data/shippingAddressData';

class ShippingAddressList extends Component {
	renderRow(shippingAddress) {
		return <ShippingAddressItem shippingAddress={shippingAddress.item} />;
	}

	render() {
		return (
			<View>
				<FlatList 
					data={shippingAddresses}
					renderItem={this.renderRow}
					keyExtractor={(shippingAddress) => shippingAddress.id.toString()}
				/>
			</View>
		);
	}
}

export default ShippingAddressList;
