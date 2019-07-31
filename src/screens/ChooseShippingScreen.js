import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Content, Button, Text, H3 } from 'native-base';
import { connect } from 'react-redux';
import { NavigationActions, StackActions } from 'react-navigation';
import { updateCheckoutShippingMethod } from '../actions';
import { numberWithCommas } from '../services/utils';
import { BOX } from '../images/';

class ChooseShippingScreen extends Component {
	static navigationOptions = {
		title: 'Shipping Methods',
		headerTitleStyle: {
			color: '#2077be',
		},
	};

	componentDidMount() {
		//test
	}

	onUpdateCheckoutWithShippingMethod(itemValue, cost, idCheckout) {
		this.props.updateCheckoutShippingMethod(itemValue, cost, idCheckout).then(() => {
			const resetAction = StackActions.reset({
				index: 0,
				actions: [NavigationActions.navigate({ routeName: 'CartScreen' })]
			});
			this.props.navigation.dispatch(resetAction);
		});
	}

	render() {
		const { 
			buttonStyle, 
			screenContainerStyle,
			boxContainerStyle,
			boxImageStyle 
		} = styles;
		const shippingMethods = this.props.navigation.getParam('shippingMethods');
		const idCheckout = this.props.navigation.getParam('idCheckout');

		const renderShippingMethods = shippingMethods.map((shippingMethod) => {	
			return (
				<Button 
					key={shippingMethod.shippingName}
					style={buttonStyle}
					onPress={() => this.onUpdateCheckoutWithShippingMethod(shippingMethod.shippingName, shippingMethod.cost, idCheckout)}
				>
					<Text>
						{`${shippingMethod.shippingName} - IDR ${numberWithCommas(shippingMethod.cost)}`}
					</Text>
				</Button>
			);
		});

		return (
			<Container>
				<Content>
					<View style={screenContainerStyle}>
						<View style={{ paddingTop: 50 }}>
							<View style={boxContainerStyle}>
								<Image source={BOX} style={boxImageStyle} />
							</View>

							<View style={{ paddingVertical: 20, paddingHorizontal: 10 }}>
								<H3 style={{ textAlign: 'center' }}>How would you like us to send your order to you?</H3>
							</View>

							<View>
								{renderShippingMethods}
							</View>

							<View style={{ paddingHorizontal: 20 }}>
								<Text note>Note: Some shipping methods may not be available to you due to size, weight and distance limitations</Text>
							</View>
						</View>
					</View>
				</Content>
			</Container>
		);
	}
}

const styles = {
	screenContainerStyle: {
		flex: 1,
	},
	boxContainerStyle: {
		justifyContent: 'center',
		alignSelf: 'center'
	},
	boxImageStyle: {
		width: 100,
		height: 100
	},
	buttonStyle: {
		marginBottom: 10,
		alignSelf: 'center',
	}
};

export default connect(null, { updateCheckoutShippingMethod })(ChooseShippingScreen);
