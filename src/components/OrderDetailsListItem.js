import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Thumbnail, Card } from 'native-base';
import { LOADING_IMAGE } from '../images/';

class OrderDetailsListItem extends Component {
	render() {
		const { item } = this.props;
		const { 
			cardStyle, 
			itemNameTextContainerStyle, 
			textContainerStyle, textStyle 
		} = styles;
		
		return (
			<Card transparent style={cardStyle}>
				<View style={{ justifyContent: 'flex-start' }}>
					<Thumbnail 
						small 
						square 
						source={{ uri: item.photo }} 
						defaultSource={LOADING_IMAGE}
					/>
				</View>

				<View style={itemNameTextContainerStyle}>
					<Text numberOfLines={2} style={styles.textStyle}>{item.name}</Text>
				</View>

				<View style={textContainerStyle}>
					<Text numberOfLines={1} style={textStyle}>{item.quantity}</Text>
				</View>

				<View style={textContainerStyle}>
					<Text numberOfLines={2} style={textStyle}>{`IDR ${item.price.toLocaleString()}`}</Text>
				</View>
			</Card>
		);
	}
}

const styles = {
	cardStyle: {
		flexDirection: 'row', 
		justifyContent: 'space-around', 
		paddingVertical: 10, 
		paddingHorizontal: 5
	},
	itemNameTextContainerStyle: {
		justifyContent: 'center',
		alignItems: 'flex-start',
		paddingHorizontal: 5,
		flex: 0.7
	},
	textContainerStyle: {
		justifyContent: 'center',
		alignItems: 'flex-start',
		paddingHorizontal: 5,
		flexShrink: 1
	},
	textStyle: {
		fontSize: 12
	}
};

export default OrderDetailsListItem;
