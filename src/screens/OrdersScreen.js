import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Container, Content, Tab, Tabs, Spinner } from 'native-base';
import { connect } from 'react-redux';
import OrderList from '../components/OrderList';
import ThankYouPurchaseModal from '../components/ThankYouPurchaseModal';
import { showThankYouModal, hideThankYouModal, fetchOrders } from '../actions/';
import { ORDERS_EMPTY_STATE_IMAGE } from '../images/';

class OrdersScreen extends Component {
	static navigationOptions = {
		title: 'Orders',
		headerTitleStyle: {
			color: '#2077be',
		},
	};

	componentDidMount() {
		this.props.fetchOrders();
	}

	renderContentOrLoading() {
		const { containerStyle, imageContainerStyle, imageStyle } = styles;

		if (this.props.loading !== true) {
			if (this.props.pending_orders.length === 0 && this.props.completed_orders.length === 0) {
				return (
					<View style={containerStyle}>
						<View style={imageContainerStyle}>
							<Image style={imageStyle} source={ORDERS_EMPTY_STATE_IMAGE} />
						</View>
						<Text style={{ color: '#444444' }}>All your orders will go here</Text>
						<Text style={{ fontWeight: '600' }}>Make a purchase and come back!</Text>
					</View>
				);
			}
		} else {
			return <Spinner size='small' />;
		}

		return (
			<Tabs>
				<Tab heading='In Progress'>
					<OrderList orders={this.props.pending_orders} />
				</Tab>
				<Tab heading='Completed'>
					<OrderList loading={this.props.loading} orders={this.props.completed_orders} />
				</Tab>
			</Tabs>
		);
	}

	render() {
		return (
			<Container>
				<Content contentContainerStyle={{ flex: 1 }}>
					{this.renderContentOrLoading()}
					<ThankYouPurchaseModal modalVisible={this.props.modalVisible} />
				</Content>
			</Container>
		);
	}
}

const styles = {
	containerStyle: {
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'center'
	},
	imageContainerStyle: {
		marginBottom: 10
	},
	imageStyle: {
		height: 100, 
		width: 100
	},
};

const mapStateToProps = state => {
	return {
		modalVisible: state.orders.modalVisible,
		pending_orders: state.orders.pending_orders,
		completed_orders: state.orders.completed_orders,
		loading: state.orders.loading
	};
};

export default connect(mapStateToProps, { 
	showThankYouModal, 
	hideThankYouModal, 
	fetchOrders 
})(OrdersScreen);
