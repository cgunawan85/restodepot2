import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Card, CardItem, Left, Button, Text, Spinner } from 'native-base';
import CartFooter from '../components/CartFooter';
import ConfirmPaymentModal from '../components/ConfirmPaymentModal';
import CartItemList from '../components/CartItemList';
import { fetchCheckout } from '../actions/';

class CartScreen extends Component {
	static navigationOptions = {
		title: 'Cart',
		headerTitleStyle: {
			color: '#2077be',
		},
	};

	/*
	You have to use multiple state variables. If you use this.state.checked for all your items, 
	then if you change it; it's going to update all of them. This is more an architecture question 
	than a problem with RNE, however, I'll still help.
	Basically you need a unique value in your state for each checkbox. Since our list is coming 
	through the props; in our constructor we can create the variables we need. Let's make checked an 
	array. You can use a for loop to create an array the size of interests. Each position in the array 
	will represent if the interest is checked or not. Next we can assign each position in our renderItem 
	prop.
	Here's a hint! renderItem={ ({ item }) also has an index parameter! renderItem={ ({ item, index })
	*/

	constructor(props) {
		super(props);
		this.state = { modalVisible: false };
	}

	componentDidMount() {
		this.props.fetchCheckout();
	}

	showModal() {
		this.setState({ modalVisible: true });
	}

	closeModal() {
		this.setState({ modalVisible: false });
	}

	renderLoadingOrContent() {
		if (this.props.loading) {
			return <Spinner size='small' />;
		}
		return (
			<View>
				<Card transparent>
					<CardItem>
						<Left>
						<Button small bordered onPress={() => console.log('test')}>
							<Text style={{ fontSize: 14 }}>Select All</Text>
						</Button>
						</Left>
						<Button small danger>
							<Text>Remove</Text>
						</Button>
					</CardItem>
				</Card>
				<CartItemList checkoutList={this.props.checkout_list} />
				<ConfirmPaymentModal 
					modalVisible={this.state.modalVisible} 
					onDecline={this.closeModal.bind(this)}
				/>
			</View>
		);
	}

	render() {
		const { contentStyle } = styles;
		return (
			<Container>
				<Content padder style={contentStyle}>
					{this.renderLoadingOrContent()}
				</Content>
				<View>
					<CartFooter 
						showModal={this.showModal.bind(this)}
					/>
				</View>
			</Container>
		);
	}
}

const styles = {
	contentStyle: {
		flex: 1,
	},
};

const mapStateToProps = state => {
	return {
		loading: state.cart.loading,
		checkout_list: state.cart.checkout_list
	};
};

export default connect(mapStateToProps, { fetchCheckout })(CartScreen);
