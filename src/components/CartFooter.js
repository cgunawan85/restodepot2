import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text, Toast } from 'native-base';
import { numberWithCommas } from '../services/utils';

class CartFooter extends Component {
	onBuyButtonPress() {
		if (this.isFormValid()) {
			this.props.showModal();
		}
		return Toast.show({
			text: 'Please complete your shipping information!',
			duration: 3000,
			buttonText: 'Got it!'
		});
	}

	buyButtonDisable() {
		const { checked } = this.props;
		if (checked === undefined || checked.length === 0) {
			return true;
		}
		return false;
	}

	isFormValid() {
		const { checked } = this.props;
		const { checkoutList } = this.props;
		// only if checkout.id in checked?
		for (const checkout of checkoutList) {
			if (checkout.id_resto_shipping_address !== 0 && checkout.shipping_name !== null) {
				return true;
			}
			return false;
		}
	}

	render() {
		const { 
			buttonAndPriceContainerStyle, 
			totalTextStyle, 
			priceTextStyle, 
			buttonContainerStyle, 
			priceContainerStyle 
		} = styles;

		return (
			<View style={buttonAndPriceContainerStyle}>
				<View style={priceContainerStyle}>
					<Text style={totalTextStyle}>Grand Total</Text>
					<Text style={priceTextStyle}>{`IDR ${numberWithCommas(this.props.totalPrice)}`}</Text>
				</View>
				<View style={buttonContainerStyle}>
					<Button 
						full 
						onPress={() => this.onBuyButtonPress()}
						disabled={this.buyButtonDisable()}
					>
						<Text>{`Buy Now (${this.props.checked.length})`}</Text>
					</Button>
				</View>
			</View>
		);
	}
}

const styles = {
	buttonAndPriceContainerStyle: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		left: 0,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderTopWidth: 0.2,
		borderColor: '#444444',
		backgroundColor: 'white'
	},
	totalTextStyle: {
		fontSize: 14,
		color: '#444444'
	},
	priceContainerStyle: {
		justifyContent: 'center',
		paddingLeft: 20
	},
	priceTextStyle: {
		fontSize: 18,
		color: 'tomato'
	},
	buttonContainerStyle: {
		paddingVertical: 20,
		paddingRight: 20
	},
};

export default CartFooter;
