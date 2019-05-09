import React, { Component } from 'react';
import { ListItem, Left, Thumbnail, Body, Text, Right, Button } from 'native-base';
import { withNavigation } from 'react-navigation';
import { LOADING_IMAGE } from '../images/';

class OrderListItem extends Component {
	render() {
		const { order_id, delivery_status, items } = this.props.order;
		const { productNameTextStyle } = styles;

		return (
			<ListItem thumbnail>
				<Left>
					<Thumbnail 
						square
						large
						defaultSource={LOADING_IMAGE} 
						source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/coldmoo-f07a2.appspot.com/o/photo1.JPG?alt=media&token=7d9ae1f8-f2b0-4133-b61c-2fd536cdac20' }} 
					/>
				</Left>
				<Body>
					<Text>{`Order #${order_id}`}</Text>
					<Text 
						numberOfLines={2}
						style={productNameTextStyle}
					>
							{`${items[0].name} and ${items.length - 1} more items`}
					</Text>
					{/* or 'Not Paid' using status_payment */}
					<Text note>Paid on Apr 14, 2019</Text>
					{/* Use delivery status */}
					<Text note numberOfLines={1}>Order Processing</Text>
				</Body>
				<Right>
					<Button 
						transparent
						onPress={() => 
							this.props.navigation.navigate('OrderDetailsScreen', { order: this.props.order })}
					>
						<Text>View</Text>
					</Button>
				</Right>
			</ListItem>
		);
	}
}

const styles = {
	productNameTextStyle: {
		fontSize: 14
	}
};

export default withNavigation(OrderListItem);
