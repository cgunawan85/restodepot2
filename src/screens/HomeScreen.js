import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Button } from 'native-base';
import { signOut, fetchHome } from '../actions';

import { products } from '../data/productData';
import HorizontalProductFlatList from '../components/HorizontalProductFlatList';
import HorizontalVendorFlatList from '../components/HorizontalVendorFlatList';
import BannerCarousel from '../components/BannerCarousel';
import CategoryTable from '../components/CategoryTable';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import Seperator from '../components/common/Seperator';
import deviceStorage from '../services/deviceStorage';

class HomeScreen extends Component {
	static navigationOptions = {
		header: null,
		title: 'RestoDepot'
	};

	/*
	constructor(props) {
		super(props);
		this.willFocus = this.props.navigation.addListener('willFocus', () => {
			this.props.fetchHome(this.props.jwt);
		});
	}
	*/

	async componentDidMount() {
		await this.props.fetchHome(this.props.jwt);
	}

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
						products={this.props.best_sellers} 
						navigation={this.props.navigation} 
					/>
					<Seperator />
					<View style={titleContainerStyle}>
						<Text style={titleTextStyle}>RestoDepot Approved</Text>
						<View style={buttonContainerStyle}>
							<Button 
								transparent 
								onPress={() => this.props.navigation.navigate('QVStack', { qv: 'RestoDepot Approved' })}
							>
								<Text style={buttonTextStyle}>View All</Text>
							</Button>
						</View>
					</View>
					<HorizontalProductFlatList 
						products={this.props.rd_approved}
						navigation={this.props.navigation} 
					/>
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
					<HorizontalProductFlatList 
						products={this.props.best_deals} 
						navigation={this.props.navigation}
					/>
					<Seperator />
					<View style={titleContainerStyle}>
						<Text style={titleTextStyle}>Vendors</Text>
						<View style={buttonContainerStyle}>
							<Button transparent>
								<Text style={buttonTextStyle}>View All</Text>
							</Button>
						</View>
					</View>
					<HorizontalVendorFlatList vendors={this.props.featured_vendors} />
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

const mapStateToProps = state => {
	return {
		featured_vendors: state.home.featured_vendors,
		best_sellers: state.home.best_sellers,
		best_deals: state.home.best_deals,
		rd_approved: state.home.rd_approved,
		jwt: state.auth.jwt
	};
};

export default connect(mapStateToProps, { signOut, fetchHome })(HomeScreen);
