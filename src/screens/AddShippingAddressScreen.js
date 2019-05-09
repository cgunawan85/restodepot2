import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import ShippingAddressForm from '../components/ShippingAddressForm';
import HeaderBackButton from '../components/common/HeaderBackButton';
import { resetState } from '../actions';


class AddShippingAddressScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Add Shipping Address',
		headerLeft: <HeaderBackButton title='some label' navigation={navigation} />,
		headerTitleStyle: {
			color: '#2077be',
		},
	});

	render() {
		return (
			<Container>
				<Content>
					<ShippingAddressForm />
				<Button full success>
					<Text>Add Address</Text>
				</Button>
				</Content>
			</Container>
		);
	}
}

export default connect(null, { resetState })(AddShippingAddressScreen);
