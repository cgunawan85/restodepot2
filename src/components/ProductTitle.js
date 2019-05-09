import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, H1, Text, Icon } from 'native-base';

class ProductTitle extends Component {
	render() {
		const { 
			cardStyle, 
			containerStyle, 
			priceContainerStyle, 
			priceTextStyle, 
			ratingContainerStyle, 
			starIconStyle, 
			reviewsTextStyle 
		} = styles;
		const { brand, name, price, rating, review_count } = this.props.product;
		
		return (
			<Card 
				transparent 
				style={cardStyle}
			>
				<View style={containerStyle}>
					<Text note>{brand}</Text>
					<H1 style={{ fontWeight: '600' }}>{name}</H1>
					<View style={priceContainerStyle}>
						<Text style={priceTextStyle}>
							{`IDR ${price.toLocaleString()}`}
						</Text>
						<Text 
							note 
							style={{ 
								textAlign: 'right', 
								fontSize: 12 
							}}
						>
							Delivered in 1 business day
						</Text>
					</View>
					<View style={ratingContainerStyle}>
						<Icon name='star' style={starIconStyle} />
						<Text style={{ color: '#FFD700' }}> {rating}</Text>
						<Text style={reviewsTextStyle}>  {`${review_count} Reviews`}</Text>
					</View>
				</View>
			</Card>
		);
	}
}

const styles = {
	cardStyle: {
		padding: 5,
		borderWidth: 1,
	},
	containerStyle: {
		paddingLeft: 5, 
		paddingTop: 10, 
		paddingBottom: 10, 
		justifyContent: 'space-around'		
	},
	priceContainerStyle: {
		flex: 1, 
		paddingTop: 10
	},
	priceTextStyle: {
		color: 'tomato', 
		fontSize: 20, 
		fontWeight: '600', 
		textAlign: 'right'
	},
	ratingContainerStyle: {
		flexDirection: 'row', 
		paddingTop: 10
	},
	starIconStyle: {
		fontSize: 18, 
		color: '#FFD700'
	},
	reviewsTextStyle: {
		fontSize: 14, 
		color: '#333333', 
		fontStyle: 'italic',
		lineHeight: 20
	}
};

export default ProductTitle;
