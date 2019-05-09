import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import HorizontalVendorFlatListItem from './HorizontalVendorFlatListItem';

class HorizontalVendorFlatList extends Component {
	renderCardItem(vendor) {
		return <HorizontalVendorFlatListItem vendor={vendor.item} />;
	}

	render() {
		return (
			<View>
				<FlatList 
					data={this.props.vendors}
					renderItem={this.renderCardItem}
					horizontal
					keyExtractor={(vendor) => vendor.id.toString()}
					style={{ paddingBottom: 10 }}
				/>
			</View>
		);
	}
}

export default HorizontalVendorFlatList;
