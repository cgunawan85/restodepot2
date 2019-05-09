import React from 'react';
import { Modal, Text, View } from 'react-native';
import { Button, Card } from 'native-base';
import NumericInput from 'react-native-numeric-input';

function ConfirmAddToCart({ modalVisible, onAccept, onDecline }) {
	const { 
		containerStyle, 
		textStyle, 
		cardStyle,
		buttonContainerStyle,
		numericInputContainerStyle, 
		buttonStyle, 
		buttonTextStyle,
		cancelButtonTextStyle 
	} = styles;

	return (
		<Modal
			visible={modalVisible}
			transparent
			animationType='fade'
			onRequestClose={() => {}}
		>
			<View style={containerStyle}>
				<Card style={cardStyle}>
					<Text style={textStyle}>How many do you need?</Text>
					<View style={numericInputContainerStyle}>
						<NumericInput
							onChange={(value) => console.log(value)} 
							initValue={1}
							minValue={1}
						/>
					{/* Need to add value here and use redux to implement into state */}
					</View>
					<View style={buttonContainerStyle}>
						<Button 
							bordered 
							danger 
							style={buttonStyle} 
							onPress={onDecline}
						>
							<Text style={cancelButtonTextStyle}>Cancel</Text>
						</Button>
						<Button
							success 
							style={buttonStyle} 
							onPress={onAccept}
						>
							<Text style={buttonTextStyle}>Confirm</Text>
						</Button>
					</View>
				</Card>
			</View>
		</Modal>
	);
}

const styles = {
	cardStyle: {
		backgroundColor: 'white',
		flex: 0.3,
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
	numericInputContainerStyle: {
		alignItems: 'center', 
		paddingTop: 20
	},
	buttonContainerStyle: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-around'
	},
	buttonStyle: {
		alignSelf: 'center',
		paddingRight: 15,
		paddingLeft: 15
	},
	buttonTextStyle: {
		color: 'white'
	},
	cancelButtonTextStyle: {
		color: 'red'
	}
};

export default ConfirmAddToCart;
