import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, List, Button, Icon } from 'native-base';
import ShippingAddressList from '../components/ShippingAddressList';
import { shippingAddressesFetch } from '../actions/';

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

	constructor() {
		super();
		// pass user id to this action creator
		this.props.shippingAddressesFetch(this.props.jwt);
	}

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

const mapStateToProps = state => {
	return {
		shipping_addresses: state.shippingAddressForm.shipping_addresses,
		user: state.auth.user,
		jwt: state.auth.jwt
	};
};

export default connect(mapStateToProps, { shippingAddressesFetch })(ShippingAddressScreen);
