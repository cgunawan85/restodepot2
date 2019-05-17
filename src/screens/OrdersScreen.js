import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Tab, Tabs, Spinner } from 'native-base';
import { connect } from 'react-redux';
import OrderList from '../components/OrderList';
import ThankYouPurchaseModal from '../components/ThankYouPurchaseModal';
import { showThankYouModal, hideThankYouModal, fetchOrders } from '../actions/';

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
		if (this.props.loading) {
			return (
				<Spinner size='small' />
			);
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
