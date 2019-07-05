import React, { Component } from 'react';
import { Modal, Text, View } from 'react-native';
import { Button, Card } from 'native-base';
import { withNavigation } from 'react-navigation';

class ConfirmPaymentModal extends Component {
	render() {
		const { 
			containerStyle, 
			textStyle, 
			cardStyle,
			buttonContainerStyle,
			buttonStyle,
		} = styles;

		const { modalVisible, onDecline, checkoutMidtrans } = this.props;

		return (
			<Modal
				visible={modalVisible}
				transparent
				animationType='fade'
				onRequestClose={() => {}}
			>
				<View style={containerStyle}>
					<Card style={cardStyle}>
						<Text style={textStyle}>How would you like to pay?</Text>
						<View style={{ paddingTop: 5 }}>
							<Button 
								bordered 
								style={buttonStyle}
								onPress={() => {
									onDecline();
									checkoutMidtrans();
								}}
							>
								<Text>Bank Transfer, Credit Card or Go-Pay</Text>
							</Button>

							<Button 
								bordered 
								style={buttonStyle}
								onPress={() => {
									onDecline();
									this.props.navigation.navigate('OrdersScreen');
								}}
							>
								<Text>Pay Later</Text>
							</Button>
						</View>
						<View style={buttonContainerStyle}>
							<Button 
								bordered 
								danger 
								style={buttonStyle} 
								onPress={onDecline}
							>
								<Text style={{ color: 'red' }}>Cancel</Text>
							</Button>
						</View>
					</Card>
				</View>
			</Modal>
		);
	}
}

const styles = {
	cardStyle: {
		backgroundColor: 'white',
		flex: 0.4,
	},
	textStyle: {
		fontSize: 18,
		textAlign: 'center',
		paddingTop: 20,
		lineHeight: 40
	},
	containerStyle: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
		position: 'relative',
		flex: 1,
		justifyContent: 'center'
	},
	buttonContainerStyle: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-around'
	},
	buttonStyle: {
		alignSelf: 'center',
		marginBottom: 10,
		paddingRight: 15,
		paddingLeft: 15
	},
};

export default withNavigation(ConfirmPaymentModal);
