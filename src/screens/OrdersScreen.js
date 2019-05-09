import React, { Component } from 'react';
import { Container, Content, Tab, Tabs } from 'native-base';
import { connect } from 'react-redux';
import OrderList from '../components/OrderList';
import ThankYouPurchaseModal from '../components/ThankYouPurchaseModal';
import { orders } from '../data/orderData';
import { showThankYouModal, hideThankYouModal } from '../actions/';

class OrdersScreen extends Component {
	static navigationOptions = {
		title: 'Orders',
		headerTitleStyle: {
			color: '#2077be',
		},
	};

	render() {
		return (
			<Container>
				<Content>
					<Tabs>
						<Tab heading='Pending'>
							<OrderList orders={orders} />
						</Tab>
						<Tab heading='Completed'>
							<OrderList orders={orders} />
						</Tab>
					</Tabs>
					<ThankYouPurchaseModal modalVisible={this.props.modalVisible} />
				</Content>
			</Container>
		);
	}
}

const mapStateToProps = state => {
	return {
		modalVisible: state.orders.modalVisible,
	};
};

export default connect(mapStateToProps, { showThankYouModal, hideThankYouModal })(OrdersScreen);
