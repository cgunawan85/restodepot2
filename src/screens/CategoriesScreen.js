import React, { Component } from 'react';
import { Container, Header, Left, Button, Icon, Body, Title, Right, Content } from 'native-base';
import ProductList from '../components/ProductList';
import FilterBar from '../components/common/FilterBar';
import { products } from '../data/productData';

class CategoriesScreen extends Component {
	// Component did mount or constructor 
	// that calls action creator to make 
	// request for products

	render() {
		const category = this.props.navigation.getParam('category');
		return (
			<Container>
				<Header>
					<Left>
						<Button 
							transparent
							onPress={() => this.props.navigation.goBack(null)}
						>
							<Icon name='arrow-back' />
						</Button>
					</Left>
					<Body>
						<Title style={{ color: '#2077be' }}>{category}</Title>
					</Body>
					<Right />
				</Header>
				<Content>
					<ProductList products={products} />
				</Content>
				<FilterBar />
			</Container>
		);
	}
}

export default CategoriesScreen;
