import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Button } from 'native-base';
import { signOut } from '../actions';

import { products } from '../data/productData';
import { vendors } from '../data/vendorData';
import HorizontalProductFlatList from '../components/HorizontalProductFlatList';
import HorizontalVendorFlatList from '../components/HorizontalVendorFlatList';
import BannerCarousel from '../components/BannerCarousel';
import CategoryTable from '../components/CategoryTable';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import Seperator from '../components/common/Seperator';

class HomeScreen extends Component {
	static navigationOptions = {
		header: null,
		title: 'RestoDepot'
	};

	render() {
		const { 
			titleContainerStyle, 
			titleTextStyle, 
			buttonContainerStyle, 
			buttonTextStyle 
		} = styles;
		
		return (
			<Container>
				<SearchBar />
				<Content>
					<BannerCarousel />
					<Seperator />
					<Text style={titleTextStyle}>Categories</Text>
					<CategoryTable />
					<Seperator />
					<View style={titleContainerStyle}>
						<Text style={titleTextStyle}>Best Sellers</Text>
						<View style={buttonContainerStyle}>
							<Button 
								transparent 
								onPress={() => this.props.navigation.navigate('QVStack', { qv: 'Best Sellers' })}
							>
								<Text style={buttonTextStyle}>View All</Text>
							</Button>
						</View>
					</View>
					<HorizontalProductFlatList 
						products={products} 
						navigation={this.props.navigation} 
					/>
					<Seperator />
					<View style={titleContainerStyle}>
						<Text style={titleTextStyle}>Recently Bought</Text>
						<View style={buttonContainerStyle}>
							<Button 
								transparent 
								onPress={() => this.props.navigation.navigate('QVStack', { qv: 'Recently Bought' })}
							>
								<Text style={buttonTextStyle}>View All</Text>
							</Button>
						</View>
					</View>
					<HorizontalProductFlatList products={products} />
					<Seperator />
					<View style={titleContainerStyle}>
						<Text style={titleTextStyle}>Best Deals</Text>
						<View style={buttonContainerStyle}>
							<Button 
								transparent 
								onPress={() => this.props.navigation.navigate('QVStack', { qv: 'Best Deals' })}
							>
								<Text style={buttonTextStyle}>View All</Text>
							</Button>
						</View>
					</View>
					<HorizontalProductFlatList products={products} />
					<Seperator />
					<View style={titleContainerStyle}>
						<Text style={titleTextStyle}>Vendors</Text>
						<View style={buttonContainerStyle}>
							<Button transparent>
								<Text style={buttonTextStyle}>View All</Text>
							</Button>
						</View>
					</View>
					<HorizontalVendorFlatList vendors={vendors} />
					<Seperator />
					<View style={titleContainerStyle}>
						<Text style={titleTextStyle}>Products</Text>
						<View style={buttonContainerStyle}>
							<Button 
								transparent
								onPress={() => this.props.navigation.navigate('AllProductsStack')}
							>
								<Text style={buttonTextStyle}>View All</Text>
							</Button>
						</View>
					</View>
					<ProductList products={products} />
				</Content>
			</Container>
		);
	}
}

const styles = {
	titleContainerStyle: {
		flexDirection: 'row', 
		justifyContent: 'space-between'
	},
	titleTextStyle: {
		paddingTop: 20,
		paddingBottom: 15,
		paddingLeft: 7,
		fontSize: 18,
		fontWeight: 'bold',
		color: '#444444'
	},
	buttonContainerStyle: {
		justifyContent: 'center', 
		paddingRight: 20, 
		paddingTop: 8
	},
	buttonTextStyle: {
		color: 'tomato'
	}
};

export default connect(null, { signOut })(HomeScreen);
