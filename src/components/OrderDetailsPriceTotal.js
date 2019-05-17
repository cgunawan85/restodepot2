import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'native-base';

class OrderDetailsPriceTotal extends Component {
	numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}

	render() {
		const { order } = this.props;
		const { cardStyle, textContainerStyle, textHeaderstyle, textStyle } = styles;
		return (
			<Card transparent style={cardStyle}>
				<View style={textContainerStyle}>
					<Text style={textHeaderstyle}>Shipping</Text>
					<Text style={textStyle}>{`IDR ${this.numberWithCommas(order.shipping_cost)}`}</Text>
				</View>

				<View style={textContainerStyle}>
					<Text style={textHeaderstyle}>Discount</Text>
					<Text style={textStyle}>{`IDR ${this.numberWithCommas(order.discount_amount)}`}</Text>
				</View>

				<View style={textContainerStyle}>
					<Text style={textHeaderstyle}>Total</Text>
					<Text style={textStyle}>{`IDR ${this.numberWithCommas(order.total_price)}`}</Text>
				</View>
			</Card>
		);
	}
}

const styles = {
	cardStyle: {
		flexDirection: 'row', 
		justifyContent: 'space-around', 
		paddingVertical: 20
	},
	textContainerStyle: {
		alignItems: 'center'
	},
	textHeaderstyle: {
		color: '#444444',
		fontSize: 14
	},
	textStyle: {
		fontSize: 14,
		fontWeight: '600'
	},
};

export default OrderDetailsPriceTotal;
