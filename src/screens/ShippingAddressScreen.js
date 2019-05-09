import React, { Component } from 'react';
import { Container, Content, List, Button, Icon } from 'native-base';
import ShippingAddressList from '../components/ShippingAddressList';


class ShippingAddressScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		headerTitle: 'Shipping Addresses',
		headerRight: (
			<Button 
				onPress={() => navigation.navigate('AddShippingAddressScreen')} 
				transparent
			> 
				<Icon name='add' type='Ionicons' />
			</Button>
		),
		headerTitleStyle: {
			color: '#2077be',
		},
	});

	render() {
		return (
			<Container>
				<Content>
					<List>
						<ShippingAddressList />
					</List>
				</Content>
			</Container>
		);
	}
}

export default ShippingAddressScreen;
