import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { 
	Card, 
	Container, 
	Content,
	H2,
	Text,
	Icon,
	Button 
} from 'native-base';
import OrderDetailsList from '../components/OrderDetailsList';
import OrderDetailsPriceTotal from '../components/OrderDetailsPriceTotal';
import Seperator from '../components/common/Seperator';
import { 
	ORDER_STATUS_1, 
	ORDER_STATUS_2, 
	ORDER_STATUS_3, 
	ORDER_STATUS_4,
	LOADING_IMAGE, 
} from '../images';

//need to clean up this screen
class OrderDetailsScreen extends Component {
	static navigationOptions = {
		title: 'Order Details',
		headerTitleStyle: {
			color: '#2077be',
		},
	};

	renderPaidOrNotPaid() {
		const order = this.props.navigation.getParam('order'); // use state instead
		if (order.payment_status === 1) {
			return (
				<View style={{ paddingTop: 20 }}>
					<Text 
						style={{ 
							backgroundColor: 'green', 
							color: 'white', 
							padding: 15 
						}}
					>
						Paid
					</Text>
				</View>
			);
		}
		return (
			<View style={{ paddingTop: 20 }}>
				<Button danger>
					<Text style={{ color: 'white' }}>Not Paid, Tap to Pay Now</Text>
				</Button>
			</View>
		);
	}

	renderOrderStatusImage() {
		const order = this.props.navigation.getParam('order');
		let imageName;
		let orderStatus;
		switch (order.delivery_status) {
			case 1:
				imageName = ORDER_STATUS_1;
				orderStatus = 'Order Processing';
				break;
			case 2:
				imageName = ORDER_STATUS_2;
				orderStatus = 'Driver Found';
				break;
			case 3:
				imageName = ORDER_STATUS_3;
				orderStatus = 'Courier Out For Delivery';
				break;
			case 4:
				imageName = ORDER_STATUS_4;
				orderStatus = 'Order Completed';
				break;
			default:
				return null;
		}
		return (
			<View>
				<View 
					style={{ 
						flexDirection: 'row', 
						flex: 1 
					}}
				>
					<Image 
						source={imageName} 
						style={{ flex: 1 }}
						resizeMode='center'
					/>
				</View>
				<H2 style={{ textAlign: 'center', fontWeight: '600', paddingBottom: 20 }}>
					{orderStatus}
				</H2>
			</View>
		);
	}

	render() {
		const order = this.props.navigation.getParam('order');
		const { 
			orderTitleSectionStyle, 
			vendorLogoContainerStyle, 
			vendorLogoImageStyle, 
			vendorTitleStyle, 
			orderDeliverySectionStyle, 
			orderDeliveryDateSectionStyle, 
			orderDeliveryDestinationSectionStyle 
		} = styles;

		return (
			<Container>
				<Content>
					<Card transparent style={orderTitleSectionStyle}>
						<View style={vendorLogoContainerStyle}>
							<Image 
								style={vendorLogoImageStyle} 
								source={{ uri: order.vendor_logo }}
								defaultSource={LOADING_IMAGE} 
							/>
						</View>
						<H2 style={vendorTitleStyle}>{order.vendor}</H2>
						<Text>{`Order #${order.order_id}`}</Text>
						<Text>{order.date}</Text>
						{this.renderPaidOrNotPaid()}
					</Card>
					<Seperator />
					<Card transparent>
						{this.renderOrderStatusImage()}
					</Card>
					<Seperator />
					<Card transparent style={orderDeliverySectionStyle}>
						<View style={orderDeliveryDestinationSectionStyle}>
							<Icon 
								name='paper-plane' 
								type='SimpleLineIcons' 
								style={{ fontSize: 18 }} 
							/>
							<Text style={{ color: '#444444', fontSize: 14 }}>Delivered By</Text>
							<Text style={{ fontWeight: '600', fontSize: 14 }}>Go-Jek Same Day</Text>
						</View>
						<View style={orderDeliveryDateSectionStyle}>
							<Icon 
								name='calendar' 
								type='SimpleLineIcons' 
								style={{ fontSize: 18 }} 
							/>
							<Text style={{ color: '#444444', fontSize: 14 }}>Delivery Date</Text>
							<Text style={{ fontWeight: '600', fontSize: 14 }}>{order.date}</Text>
						</View>
						<View style={orderDeliveryDestinationSectionStyle}>
							<Icon 
								name='location-pin' 
								type='SimpleLineIcons' 
								style={{ fontSize: 18 }} 
							/>
							<Text style={{ color: '#444444', fontSize: 14 }}>Delivered To</Text>
							<Text style={{ fontWeight: '600', fontSize: 14 }}>Home</Text>
						</View>
					</Card>
					<Seperator />
					<OrderDetailsList order={order} />
					<OrderDetailsPriceTotal order={order} />
				</Content>
			</Container>
		);
	}
}

const styles = {
	orderTitleSectionStyle: {
		alignItems: 'center',
		paddingVertical: 20
	},
	vendorLogoContainerStyle: {
		paddingBottom: 15 
	},
	// change this fixed dimensions
	vendorLogoImageStyle: {
		height: 100, 
		width: 100
	},
	vendorTitleStyle: {
		paddingVertical: 10,
		fontWeight: '600'
	},
	orderDeliverySectionStyle: {
		flexDirection: 'row', 
		justifyContent: 'space-around',
		paddingVertical: 20
	},
	orderDeliveryDateSectionStyle: {
		alignItems: 'center'
	},
	orderDeliveryDestinationSectionStyle: {
		alignItems: 'center'
	}
};

export default OrderDetailsScreen;
