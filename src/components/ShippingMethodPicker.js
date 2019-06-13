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

class ShippingMethodPicker extends Component {
	constructor(props) {
		super(props);
		this.state = { shipping_name: 'key0' };
	}

	renderPicker() {
		const { 
			pickerTextStyle, 
			containerStyle, 
			shippingMethodsTextContainerStyle, 
			deliveryAlertTextStyle 
		} = styles;

		if (this.props.checkout.id_resto_shipping_address !== 0) {
			return (
				<View style={containerStyle}>
					<View style={shippingMethodsTextContainerStyle}>
						<StyleProvider style={getTheme({ iconFamily: 'MaterialCommunityIcons' })}>
							<Icon 
								name='truck'
								style={{ fontSize: 16 }}
							/>
						</StyleProvider>
						<Text style={{ fontSize: 14 }}>Shipping Method</Text>
					</View>

					<View style={{ flex: 1 }}>
						<Form>
							<Picker
								mode="dropdown"
								note
								selectedValue={this.state.shipping_name}
								textStyle={pickerTextStyle}
								onValueChange={(itemValue) => this.setState({ shipping_name: itemValue })}
							>
								<Picker.Item label="None" value="key0" />
								<Picker.Item label="Go-Jek Instant" value="key1" />
								<Picker.Item label="Go-Jek Same Day" value="key2" />
								<Picker.Item label="Ninja Van" value="key3" />
							</Picker>
						</Form>
					</View>
				</View>
			);
		}
		return (
			<View style={{ flex: 1 }}>
				<Text style={deliveryAlertTextStyle}>Please choose a delivery address!</Text>
			</View>
		);
	}

	render() {
		return (
			<CardItem bordered>
				{this.renderPicker()}
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
	},
	deliveryAlertTextStyle: {
		color: 'red',
		fontSize: 14,
		textAlign: 'center',
		paddingVertical: 10
	}
};

const mapStateToProps = state => {
	return {
		shippingMethods: state.cart.shipping_methods,
		loading: state.cart.loading
	};
};

export default connect(mapStateToProps, null)(ShippingMethodPicker);
