import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, List, Button, Icon, Spinner } from 'native-base';
import ShippingAddressList from '../components/ShippingAddressList';
import { shippingAddressesFetch, resetForm } from '../actions/';

class ShippingAddressScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;
		return {
			headerTitle: 'Shipping Addresses',
			headerRight: (
				<Button 
					onPress={() => {
						params.handleResetForm();
						navigation.navigate('AddShippingAddressScreen');
					}} 
					transparent
				> 
					<Icon name='add' type='Ionicons' />
				</Button>
			),
			headerTitleStyle: {
				color: '#2077be',
			},
		};
	}

	constructor(props) {
		super(props);
		this.props.shippingAddressesFetch(this.props.jwt);
	}

	componentDidMount() {
		this.props.navigation.setParams({
			handleResetForm: this.props.resetForm
		});
	}

	renderListOrActivityIndicator() {
		if (this.props.loading) {
			return <Spinner />;
		}
		return <ShippingAddressList shippingAddresses={this.props.shipping_addresses} />;
	}

	render() {
		return (
			<Container>
				<Content>
					<List>
						{this.renderListOrActivityIndicator()}
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
		jwt: state.auth.jwt,
		loading: state.shippingAddressForm.loading
	};
};

export default connect(mapStateToProps, { shippingAddressesFetch, resetForm })(ShippingAddressScreen);
