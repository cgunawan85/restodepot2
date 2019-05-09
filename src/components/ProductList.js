import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import ProductListItem from './ProductListItem';

class ProductList extends Component {
	renderCardItem(product) {
		return <ProductListItem product={product.item} />;
	}

	render() {
		return (
			<View>
				<FlatList 
					data={this.props.products}
					renderItem={this.renderCardItem}
					keyExtractor={(product) => product.id.toString()}
					style={{ paddingBottom: 10 }}
					numColumns={2}
					columnWrapperStyle={{ flex: 1, justifyContent: 'space-around' }}
				/>
			</View>
		);
	}
}

export default ProductList;
