import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, CardItem, Thumbnail } from 'native-base';
import NumericInput from 'react-native-numeric-input';
import { LOADING_IMAGE } from '../images/';
import { numberWithCommas } from '../services/utils';

class CartItemProduct extends Component {
	constructor(props) {
		super(props);
		this.state = { quantity: props.item.quantity };
	}

	render() {
		const { textStyle, priceTextStyle, itemTextContainerStyle } = styles;
		const { preview_photo_file } = this.props.item;
		const { name, price_regular } = this.props.item.product;
		return (
			<CardItem bordered style={{ justifyContent: 'space-around' }}>
				<View style={{ justifyContent: 'flex-start' }}>
					<Thumbnail 
						square 
						small
						defaultSource={LOADING_IMAGE} 
						source={{ uri: `https://s3-ap-southeast-1.amazonaws.com/restodepotbucket/${preview_photo_file}` }} 
					/>
				</View>
				<View style={itemTextContainerStyle}>
					<Text 
						style={textStyle} 
						numberOfLines={3}
					>
						{name}
					</Text>
				</View>
				<View>
					<NumericInput
						value={this.state.quantity}
						initValue={this.state.quantity}
						minValue={0}
						totalWidth={75} 
						totalHeight={40} 
						rounded 
						textColor='#444444'
						onChange={quantity => this.setState({ quantity })}
					/>
				</View>
				<View>
					<Text style={priceTextStyle}>{`IDR ${numberWithCommas(price_regular)}`}</Text>
				</View>
			</CardItem>
		);
	}
}

const styles = {
	textStyle: {
		fontSize: 12,
		justifyContent: 'center',
		alignItems: 'flex-start',
		paddingHorizontal: 5,
		flexShrink: 1
	},
	itemTextContainerStyle: {
		justifyContent: 'center',
		alignItems: 'flex-start',
		paddingHorizontal: 5,
		flex: 0.7
	},
	priceTextStyle: {
		fontSize: 12,
		color: 'tomato',
		fontWeight: '600',
		justifyContent: 'center',
		alignItems: 'flex-start',
		paddingHorizontal: 5,
		flexShrink: 1
	}
};

export default CartItemProduct;
