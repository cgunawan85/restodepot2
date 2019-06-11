import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Card, CardItem, Left, Button, Text, Spinner } from 'native-base';
import CartFooter from '../components/CartFooter';
import ConfirmPaymentModal from '../components/ConfirmPaymentModal';
import CartItemList from '../components/CartItemList';
import { 
	fetchCheckout, 
	updateCheckoutRestoShippingAddress, 
	updateQuantityCheckoutItem,
	removeCheckout,
} from '../actions/';

class CartScreen extends Component {
	static navigationOptions = {
		title: 'Cart',
		headerTitleStyle: {
			color: '#2077be',
		},
	};

	constructor(props) {
		super(props);
		this.state = { modalVisible: false, checked: [] };
	}

	componentDidMount() {
		this.props.fetchCheckout();
	}

	onUpdateCheckoutWithRestoShippingAddress(itemValue, idCheckout) {
		this.props.updateCheckoutRestoShippingAddress(itemValue, idCheckout);
	}

	onUpdateQuantityItem(idCheckoutItem, quantity) {
		this.props.updateQuantityCheckoutItem(idCheckoutItem, quantity);
	}

	onRemoveCheckoutFromCart() {
		const mappedArray = this.state.checked.map(checkout => this.props.removeCheckout(checkout));
		console.log(mappedArray);
	}

	onSelectAllButtonPress() {
		const mappedArray = this.props.checkout_list.map((checkout) => checkout.id_checkout);
		this.setState({ checked: mappedArray });
	}

	addOrRemoveFromChecked(idCheckout) {
		const newCheckedArray = this.state.checked;
		if (newCheckedArray.includes(idCheckout)) {
			const finalArray = newCheckedArray.filter((item) => item !== idCheckout);
			this.setState({ checked: finalArray });
		} else {
			newCheckedArray.push(idCheckout);
			this.setState({ checked: newCheckedArray });
		}
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
						<Button 
							small 
							bordered 
							onPress={() => this.onSelectAllButtonPress()}
						>
							<Text style={{ fontSize: 14 }}>Select All</Text>
						</Button>
						</Left>
						<Button 
							small 
							danger
							onPress={() => this.onRemoveCheckoutFromCart()}
						>
							<Text>Remove</Text>
						</Button>
					</CardItem>
				</Card>
				<CartItemList 
					checkoutList={this.props.checkout_list} 
					checked={this.state.checked}
					addOrRemoveFromChecked={this.addOrRemoveFromChecked.bind(this)}
					onUpdateCheckoutWithRestoShippingAddress={this.onUpdateCheckoutWithRestoShippingAddress.bind(this)}
					onUpdateQuantityItem={this.onUpdateQuantityItem.bind(this)}
				/>
				<ConfirmPaymentModal 
					modalVisible={this.state.modalVisible} 
					onDecline={this.closeModal.bind(this)}
				/>
			</View>
		);
	}

	render() {
		return (
			<Container>
				<Content padder style={{ flex: 1 }}>
					{this.renderLoadingOrContent()}
				</Content>
				<View>
					<CartFooter 
						checked={this.state.checked}
						showModal={this.showModal.bind(this)}
					/>
				</View>
			</Container>
		);
	}
}

const mapStateToProps = state => {
	return {
		loading: state.cart.loading,
		checkout_list: state.cart.checkout_list
	};
};

export default connect(mapStateToProps, { 
	fetchCheckout, 
	updateCheckoutRestoShippingAddress,
	updateQuantityCheckoutItem,
	removeCheckout 
})(CartScreen);
