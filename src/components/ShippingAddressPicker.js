import React, { Component } from 'react';
import { View } from 'react-native';
import { 
	Text,
	CardItem,
	Form, 
	Picker, 
	Icon, 
	StyleProvider, 
	getTheme 
} from 'native-base';

class ShippingAddressPicker extends Component {
	render() {
		const { containerStyle, shippingMethodsTextContainerStyle, pickerTextStyle } = styles;
		return (
			<CardItem bordered>
				<View style={containerStyle}>
					<View style={shippingMethodsTextContainerStyle}>
						<StyleProvider style={getTheme({ iconFamily: 'MaterialCommunityIcons' })}>
							<Icon 
								name='store'
								style={{ fontSize: 16 }}
							/>
						</StyleProvider>
						<Text style={{ fontSize: 14 }}>Delivery Address</Text>
					</View>

					<View style={{ flex: 1 }}>
						<Form>
							<Picker
								mode="dropdown"
								note
								selectedValue={'key0'}
								textStyle={pickerTextStyle}
							>
								<Picker.Item label="None" value="key0" />
								<Picker.Item label="Home" value="key1" />
								<Picker.Item label="Office" value="key2" />
								<Picker.Item label="Kelapa Gading" value="key3" />
							</Picker>
						</Form>
					</View>
				</View>
			</CardItem>
		);
	}
}

const styles = {
	containerStyle: {
		flexDirection: 'row'
	},
	shippingMethodsTextContainerStyle: {
		flexDirection: 'row', 
		justifyContent: 'center', 
		alignItems: 'center' 
	},
	pickerTextStyle: {
		fontSize: 14, 
		flexShrink: 1, 
		textAlign: 'right'
	}
};

export default ShippingAddressPicker;
