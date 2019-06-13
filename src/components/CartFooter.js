import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import { numberWithCommas } from '../services/utils';

class CartFooter extends Component {
	isValidForm() {
		//return true if this.props.checkout_list valid
		//if all checkout.id_resto_shipping_address !== 0 && id.shipping_name !== null
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
					<Button full onPress={() => this.props.showModal()}>
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
