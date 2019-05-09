import React, { Component } from 'react';
import { ListItem, Text, Body, Right, Icon } from 'native-base';
import { withNavigation } from 'react-navigation';

class ShippingAddressItem extends Component {
	render() {
		const { title } = this.props.shippingAddress;
		return (
			<ListItem 
				button 
				onPress={() => this.props.navigation.navigate('EditShippingAddressScreen')}
			>
				<Body>
					<Text>{title}</Text>
				</Body>
				<Right>
					<Icon name="arrow-forward" />
				</Right>
			</ListItem>
		);
	}
}

export default withNavigation(ShippingAddressItem);
