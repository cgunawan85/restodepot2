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
		const order = this.props.navigation.getParam('order');
		const { paidStatusText } = styles;
		if (order.status_payment === 2) {
			return (
				<View style={{ paddingTop: 20 }}>
					<Text style={paidStatusText}>
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
		const { orderStatusTextStyle } = styles;
		let imageName;
		let orderStatus;
		switch (order.status_delivery) {
			case 0:
				imageName = ORDER_STATUS_1;
				orderStatus = 'Pending';
				break;
			case 1:
				imageName = ORDER_STATUS_1;
				orderStatus = 'Order Processing';
				break;
			case 2:
				imageName = ORDER_STATUS_2;
				orderStatus = 'Finding Driver';
				break;
			case 3:
				imageName = ORDER_STATUS_3;
				orderStatus = 'Driver Picking Up Your Order';
				break;
			case 4:
				imageName = ORDER_STATUS_4;
				orderStatus = 'Driver Out For Delivery';
				break;
			case 5:
				imageName = ORDER_STATUS_4;
				orderStatus = 'Order Completed';
				break;
			default:
				return null;
		}
		return (
			<View>
				<View style={{ flexDirection: 'row', flex: 1 }}>
					<Image 
						source={imageName} 
						style={{ flex: 1 }}
						resizeMode='center'
					/>
				</View>
				<H2 style={orderStatusTextStyle}>
					{orderStatus}
				</H2>
			</View>
		);
	}

	render() {
		const order = this.props.navigation.getParam('order');
		console.log(order);
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
								source={{ uri: `https://s3-ap-southeast-1.amazonaws.com/restodepotbucket/${order.vendor.logo}` }}
								defaultSource={LOADING_IMAGE} 
							/>
						</View>
						<H2 style={vendorTitleStyle}>{order.vendor.name}</H2>
						<Text>{`Order #${order.checkout_id_transaction}`}</Text>
						<Text>{order.dt_created}</Text>
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
							<Text style={{ fontWeight: '600', fontSize: 14 }}>{order.shipping_name}</Text>
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
							<Text style={{ fontWeight: '600', fontSize: 14 }}>{order.shippingAddress.name}</Text>
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
	},
	paidStatusText: {
		backgroundColor: 'green', 
		color: 'white', 
		padding: 15 
	},
	orderStatusTextStyle: {
		textAlign: 'center', 
		fontWeight: '600', 
		paddingBottom: 20
	}
};

export default OrderDetailsScreen;
