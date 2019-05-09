import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Card, CardItem, Left, Button, Text } from 'native-base';
import CartItem from '../components/CartItem';
import CartFooter from '../components/CartFooter';
import ConfirmPaymentModal from '../components/ConfirmPaymentModal';

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
		this.state = { checked: false, modalVisible: false };
	}

	onSelectAllButtonPress() {
		this.setState({ checked: !this.state.checked });
	}

	toggleChecked() {
		this.setState({ checked: !this.state.checked });
	}

	showModal() {
		this.setState({ modalVisible: true });
	}

	closeModal() {
		this.setState({ modalVisible: false });
	}


	render() {
		const { contentStyle } = styles;
		return (
			<Container>
				<Content padder style={contentStyle}>
					<Card transparent>
						<CardItem>
							<Left>
							<Button small bordered onPress={() => this.onSelectAllButtonPress()}>
								<Text style={{ fontSize: 14 }}>Select All</Text>
							</Button>
							</Left>
							<Button small danger>
								<Text>Remove</Text>
							</Button>
						</CardItem>
					</Card>
					<CartItem 
						checked={this.state.checked} 
						toggleChecked={this.toggleChecked.bind(this)} 
					/>
					<ConfirmPaymentModal 
						modalVisible={this.state.modalVisible} 
						onDecline={this.closeModal.bind(this)}
					/>
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

export default CartScreen;
