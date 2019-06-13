import React, { Component } from 'react';
import { Container, Header, Left, Button, Icon, Body, Title, Right, Content } from 'native-base';
import ProductList from '../components/ProductList';

class QVScreen extends Component {
	render() {
		const qv = this.props.navigation.getParam('qv');
		return (
			<Container>
				<Header>
					<Left>
						<Button 
							transparent
							onPress={() => this.props.navigation.goBack(null)}
						>
							<Icon name='arrow-back' />
						</Button>
					</Left>
					<Body>
						<Title style={{ color: '#2077be' }}>{qv.title}</Title>
					</Body>
					<Right />
				</Header>
				<Content>
					<ProductList products={qv.products} />
				</Content>
			</Container>
		);
	}
}

export default QVScreen;
