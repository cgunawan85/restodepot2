import React, { Component } from 'react';
import { 
	Icon, 
	Container, 
	Content, 
	Button, 
	Text, 
	Header, 
	Left, 
	Right, 
	Body, 
	Title 
} from 'native-base';
import ShippingAddressForm from '../components/ShippingAddressForm';
import ConfirmDeleteModal from '../components/ConfirmDeleteModal';


class EditShippingAddressScreen extends Component {
	static navigationOptions = {
		title: 'Edit Shipping Address',
		headerTitleStyle: {
			color: '#2077be',
		},
		header: null,
	};

	constructor() {
		super();
		this.state = { modalVisible: false };
	}

	onDecline() {
		this.setState({ modalVisible: false });
	}

	render() {
		return (
			<Container>
				<Header>
					<Left>
						<Button 
							transparent
							onPress={() => this.props.navigation.goBack(null)}
						>
							<Icon name='arrow-back' />
						</Button>
					</Left>
					<Body>
						<Title style={{ color: '#2077be' }}>Edit Address</Title>
					</Body>
					<Right>
						<Button 
							transparent
							onPress={() => this.setState({ modalVisible: true })}
						>
							<Icon name='trash' style={{ fontSize: 24 }} />
						</Button>
					</Right>
				</Header>
				<Content>
					<ShippingAddressForm />
				<Button full success>
					<Text>Save Changes</Text>
				</Button>
				<ConfirmDeleteModal 
					modalVisible={this.state.modalVisible} 
					onDecline={this.onDecline.bind(this)}
				/>
				</Content>
			</Container>
		);
	}
}

export default EditShippingAddressScreen;
