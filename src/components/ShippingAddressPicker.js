import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
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
	/*
	renderShippingAddresses() {
		this.props.shippingAddresses.map((shippingAddress) => {
			return (
				<Picker.Item label={shippingAddress.name} value={shippingAddress.id} />
			);
		});
	}
	*/

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
								<Picker.Item label="None" value="none" />
								{/* 
									Use array map to iterate over an array and render Picker.Item 
									shippingAddresses.map((shippingAddress) => {
										return (
											<Picker.Item label={shippingAddress.name} value={shippingAddress.id} />
											);
										});

									use this.props.checkout.id_resto_shipping_address as selectedValue

									what happens if shipping address is not selected?
									--> selectedValue={'none'}
									render fixed None Picker.Item (value 'none') 
									then render rest of picker items.

									onValueChange={(itemValue, itemIndex) =>
										this.setState({language: itemValue})

									use itemValue to call action creator to 
									set resto shipping address in checkout table

								*/}
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

const mapStateToProps = state => {
	return {
		shippingAddresses: state.cart.shipping_addresses
	};
};

export default connect(mapStateToProps, {})(ShippingAddressPicker);
