import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import HorizontalProductFlatListItem from './HorizontalProductFlatListItem';

class HorizontalProductFlatList extends Component {
	renderCardItem(product) {
		return <HorizontalProductFlatListItem product={product} />;
	}

	render() {
		return (
			<View>
				<FlatList 
					data={this.props.products}
					renderItem={({ item }) => this.renderCardItem(item)}
					horizontal
					keyExtractor={(product) => product.id.toString()}
					style={{ paddingBottom: 10 }}
				/>
			</View>
		);
	}
}

export default HorizontalProductFlatList;
